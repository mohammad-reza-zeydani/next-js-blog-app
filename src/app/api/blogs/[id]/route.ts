import { prisma } from "../../../../../prisma/lib/prisma";
import { NextResponse } from "next/server";

// GET request to fetch a blog by its ID
export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    // Attempt to find the blog with the provided ID
    const blog = await prisma.blog.findUnique({
      where: { id: params.id },
    });

    // If no blog is found, return a 404 error
    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    // If blog is found, return the blog data
    return NextResponse.json(blog);
  } catch (error) {
    // Log the error to the console for debugging
    console.error("Error fetching blog:", error);
    
    // Return a 500 status code indicating internal server error
    return NextResponse.json(
      { error: "Failed to fetch blog" },
      { status: 500 },
    );
  }
}

// PUT request to update a blog by its ID
export async function PUT(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const { id } = params;
    // Extract the data from the request body
    const { title, description, category, imageUrl } = await req.json(); 

    // Check if the blog exists before updating
    const existingBlog = await prisma.blog.findUnique({ where: { id } });
    if (!existingBlog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    // Update the blog with the new data
    const updatedBlog = await prisma.blog.update({
      where: { id },
      data: { title, description, category, imageUrl },
    });

    // Return the updated blog data
    return NextResponse.json(updatedBlog);
  } catch (error: any) {
    // Log the error for debugging
    console.error("Error updating blog:", error);

    // Return a 500 status code indicating internal server error
    return NextResponse.json(
      { error: "Failed to update blog", details: error.message },
      { status: 500 },
    );
  }
}

// DELETE request to delete a blog by its ID
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    // Attempt to delete the blog with the provided ID
    await prisma.blog.delete({
      where: { id: params.id },
    });

    // Return a success response if the blog was deleted
    return NextResponse.json({ success: true });
  } catch (error) {
    // Log the error for debugging
    console.error("Error deleting blog:", error);

    // Return a 500 status code indicating internal server error
    return NextResponse.json(
      { error: "Failed to delete blog" },
      { status: 500 },
    );
  }
}
