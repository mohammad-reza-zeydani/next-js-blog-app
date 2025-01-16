import { prisma } from "../../../../prisma/lib/prisma";
import { NextResponse } from "next/server";
export async function GET() {
    const blogs = await prisma.blog.findMany();
    return NextResponse.json(blogs);
  }
  export async function POST(req: Request) {
    const { title, description, imageUrl } = await req.json();
    const newBlog = await prisma.blog.create({
      data: { title, description, imageUrl },
    });
    return NextResponse.json(newBlog);
  }

  