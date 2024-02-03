"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { SimplePhotoIn } from "./Animation";

const ImageData = ({ mydata }: { mydata: any }) => {
  const data = mydata;
  return (
    <motion.main variants={SimplePhotoIn}>
      {data.map((post: any) => (
        <div key={post._id} className="py-2">
          <Image
            src={post.imageUrl}
            alt={post.slug}
            width={500}
            height={500}
            className="w-full h-96"
          />
        </div>
      ))}
    </motion.main>
  );
};

export default ImageData;
