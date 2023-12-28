import CategoriedsList from "@/components/CategoriedsList";
import Post from "@/components/Post";
import Image from "next/image";
import { postsData } from "../data";

export default function Home() {
  return (
    <>
      <CategoriedsList />
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
        <div className="py-6">No Posts</div>
      )}
    </>
  );
}
