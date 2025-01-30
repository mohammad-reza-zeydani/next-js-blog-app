import { prisma } from "../../../../prisma/lib/prisma";
import { NextResponse } from "next/server";
export async function GET() {
  try {
    const blogs = await prisma.blog.findMany();
    return NextResponse.json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs." },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const { title, description, imageUrl, category } = await req.json();

    // Validation
    if (!title || !description || !category) {
      return NextResponse.json(
        { error: "All fields except imageUrl are required." },
        { status: 400 }
      );
    }

    const newBlog = await prisma.blog.create({
      data: { title, description, imageUrl, category },
    });

    return NextResponse.json(newBlog, { status: 201 });
  } catch (error: any) {
    console.error("Error creating blog:", error);

    // Handle specific Prisma errors
    if (error.code === "P2002") {
      return NextResponse.json(
        { error: "Duplicate entry for a unique field." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to create blog." },
      { status: 500 }
    );
  }
}
