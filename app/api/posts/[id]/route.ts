import { NextResponse } from "next/server";
import prisma from "@/libs/prismadb";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const post = await prisma.post.findUnique({
      where: { id },
    });
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Sing Post error occured!" });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { title, content, links, selectedCategory, imageUrl, publicId } =
    await req.json();
  const id = params.id;
  try {
    const post = await prisma.post.update({
      where: { id },
      data: {
        title,
        content,
        links,
        catName: selectedCategory,
        imageUrl,
        publicId,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    console.log(error);

    return NextResponse.json({ message: "single post revised!" });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;

    const post = await prisma.post.delete({
        where: {id}
    })

    return NextResponse.json(post)

  } catch (error) {
    console.log(error);
    
    return NextResponse.json({message: "Deleted sing post!"})
  }
}
