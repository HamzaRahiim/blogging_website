"use client";
import PortableText from "react-portable-text";
import { motion } from "framer-motion";
import { SimpleDetailUp } from "./Animation";

const Details = ({ mydata }: { mydata: any }) => {
  const data = mydata;
  return (
    <motion.main variants={SimpleDetailUp}>
      {data.map((post: any) => (
        <div key={post._id} className="text-lg">
          <PortableText
            content={post.body}
            serializers={{
              h1: (props: any) => (
                <h1 className="heading" {...props} id="overview" />
              ),
              h2: (props: any) => (
                <h2 className="heading" {...props} id="description" />
              ),
              h3: (props: any) => (
                <h3 className="heading" {...props} id="conclusion" />
              ),
              li: (props: any) => (
                <li
                  className="ml-4 py-1 italic font-medium before:content-['•'] before:pr-2"
                  {...props}
                />
              ),
            }}
          />
        </div>
      ))}
    </motion.main>
  );
};
export default Details;
