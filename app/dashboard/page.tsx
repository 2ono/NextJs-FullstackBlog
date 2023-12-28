import React from "react";
import { postsData } from "@/data";
import Post from "@/components/Post";
import Link from "next/link";
const DashBoard = () => {
  return (
    <div>
      <h1>My Post</h1>

      {postsData && postsData.length > 0 ? (
        postsData.map((post, i) => (
          <Post
            key={post.id}
            id={post.id}
            author={post.author}
            authorEmail={"test@gmail.com"}
            date={post.datepublished}
            thumbnail={post.thumbnail}
            title={post.title}
            content={post.content}
            category={post.category}
            links={post.links || []}
          />
        ))
      ) : (
        <div className="py-6">
          No Posts. <Link className="underline" href={"/create-post"}>Create New</Link>
        </div>
      )}
    </div>
  );
};

export default DashBoard;
