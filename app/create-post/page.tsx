import CreatePostForm from "@/components/CreatePostForm";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const CreatePost = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/sign-in");
  }

  console.log(session);

  return <CreatePostForm />;
};

export default CreatePost;
