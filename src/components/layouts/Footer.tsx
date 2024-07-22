import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary py-2 mt-4">
      <div className="flex items-center gap-3 justify-center">
        <h1 className="text-white md:flex hidden">Created By:</h1>
        <h1 className="bottomtext md:text-3xl text-xl">Hamza Rahim</h1>
      </div>
      <div className="flex items-center gap-3 justify-center pb-2">
        <h2 className="text-white md:flex hidden">Contact Me:</h2>
        <Link
          href="mailto:hamzarahim836@gmail.com"
          className="bottomtext md:text-2xl text-xl"
        >
          hamzarahim836@gmail.com
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
