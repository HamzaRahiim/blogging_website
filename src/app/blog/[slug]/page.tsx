import AuthorDetail from "@/components/Author";
import ImageData from "@/components/Images";
import Details from "@/components/Details";
import Header from "@/components/layouts/Header";
import Controll from "@/components/control";
import { mainBlogs } from "@/lib/frontdata";
import Title from "@/components/Title";
import { client } from "../../../../sanity/lib/client";

const Blog = async ({ params }: { params: { slug: string } }) => {
  const data = await mainBlogs(params.slug);

  return (
    <Controll>
      {/* navbar contains section like Author, overview, details, conclusion  */}
      <nav className="sticky top-0">
        <Header />
      </nav>
      {/* Main sections of the blog  */}
      <section>
        <div>
          <Title mydata={data} />
        </div>
        {/* Details about Author  */}
        <div>
          <AuthorDetail mydata={data} />
        </div>
        {/* mainImage of the blog  */}
        <div>
          <ImageData mydata={data} />
        </div>
        {/* details of the blog  */}
        <div>
          <Details mydata={data} />
        </div>
      </section>
    </Controll>
  );
};
export default Blog;

export const generateStaticParams = async () => {
  const query = `*[_type == "post"] {
        "slug": slug.current,
    }`;

  const data = await client.fetch(query);

  return data.map((post: any) => ({
    slug: post.slug,
  }));
};
