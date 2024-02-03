"use client";
import { motion } from "framer-motion";
import { SimpleTitleIn } from "./Animation";

const Title = ({ mydata }: { mydata: any }) => {
  const data = mydata;
  return (
    <motion.main variants={SimpleTitleIn}>
      {data.map((post: any) => (
        <div key={post._id}>
          <h1 className="md:text-4xl py-3 text-3xl text-center mt-2">
            {post.title}
          </h1>
        </div>
      ))}
    </motion.main>
  );
};
export default Title;
