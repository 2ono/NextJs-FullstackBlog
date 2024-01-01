import React from "react";
import Post from "@/components/Post";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { TPost } from "../types";

const getPosts = async (email: string) => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/authors/${email}`);
    const {posts} = await res.json();
    return posts;
  } catch (error) {
    return null;
  }
};

const DashBoard = async () => {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  let posts = [];

  if (!session) {
    redirect("/sign-in");
  }

  if(email) {

    posts = await getPosts(email);
  }


  return (
    <div>
      <h1>My Post</h1>

      {posts && posts.length > 0 ? (
        posts.map((post:TPost) => (
          <Post
            key={post.id}
            id={post.id}
            author={''}
            authorEmail={post.authorEmail}
            date={post.createdAt}
            thumbnail={post.imageUrl}
            title={post.title}
            content={post.content}
            category={post.catName}
            links={post.links || []}
          />
        ))
      ) : (
        <div className="py-6">
          No Posts.{" "}
          <Link className="underline" href={"/create-post"}>
            Create New
          </Link>
        </div>
      )}
    </div>
  );
};

export default DashBoard;
