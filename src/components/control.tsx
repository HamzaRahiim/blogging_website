"use client";
import { motion } from "framer-motion";

const Controll = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.main initial="initial" animate="animate" className="wrapper">
      {children}
    </motion.main>
  );
};
export default Controll;
