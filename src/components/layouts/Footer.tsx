import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary py-2 mt-4">
      <div className="flex items-center gap-3 justify-center">
        <h1 className="text-white">Created By:</h1>
        <h1 className="bottomtext text-3xl">Hamza Rahim</h1>
      </div>
      <div className="flex items-center gap-3 justify-center pb-2">
        <h2 className="text-white">Contact Me:</h2>
        <Link
          href="mailto:hamzarahim836@gmail.com"
          className="bottomtext text-2xl"
        >
          hamzarahim836@gmail.com
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
