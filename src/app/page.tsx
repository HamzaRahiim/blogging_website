import Image from "next/image";
import { Post } from "@/type";
import { PortableText } from "@portabletext/react";
import { Button } from "@/components/ui/button";
import { SingleBlog } from "@/lib/frontdata";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export const revalidate = 864000;

export default async function Home() {
  const data: Post[] = await SingleBlog();
  return (
    <main className="wrapper">
      {/* Input from user  */}
      <div className="w-72 flex mt-4 pl-2 gap-2">
        <Input type="text" placeholder="Search Your Blog..." />
        <Button>Search</Button>
      </div>
      {/* map on data  */}
      {data.map((post: any) => (
        <div key={post._id} className="shadow-md my-4 px-2">
          {/* Title  */}
          <h1 className="md:text-4xl py-3 text-2xl text-center">
            {post.title}
          </h1>
          {/* Image  */}
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={500}
            height={500}
            className="w-full h-80"
          />
          {/* littledescription  */}
          <div className="py-2 text-lg">
            <PortableText value={post.mainsentence} />
          </div>
          {/* button read more  */}
          <Button className="mb-2">
            <Link href={`/blog/${post.slug}`}>Continue Reading</Link>
          </Button>
        </div>
      ))}
    </main>
  );
}
