"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { SimpleAuthorIn } from "@/components/Animation";

const AuthorDetail = ({ mydata }: { mydata: any }) => {
  const data = mydata;
  return (
    <motion.main variants={SimpleAuthorIn} id="author">
      {data.map((post: any) => (
        <div
          key={post._id}
          className="flex gap-3 border shadow-md max-w-96 my-3 rounded-md"
        >
          {/* author image  */}
          <div className="p-2">
            <Image
              src={post.author.authorImage}
              alt={post.author.name}
              width={100}
              height={100}
              className="rounded-md w-24 h-24"
            />
          </div>
          {/* author name  */}
          <div className="flex flex-col justify-center">
            <h1 className="text-lg">Author:</h1>
            <h1 className="italic font-medium text-lg">{post.author.name}</h1>
            <p className="text-sm mt-3">
              {/* publish data of article  */}
              Published At:{" "}
              {new Date(post._createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      ))}
    </motion.main>
  );
};
export default AuthorDetail;
