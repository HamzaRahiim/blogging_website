import { client } from "../../sanity/lib/client";

export const SingleBlog = async () => {
  const res = await client.fetch(`*[_type == 'post']{
      _id,
      title,
      'slug': slug.current,
      mainsentence,
      'imageUrl': mainImage.asset -> url,
    }`);
  return res;
};

export const mainBlogs = async (slug: string) => {
  const query = `*[_type == 'post' && slug.current == "${slug}"]{
    _id,
    title,
    _createdAt,
    body,
    'imageUrl': mainImage.asset -> url,
    'slug': slug.current,
    author -> {
      name,
      'authorImage': image.asset -> url,
      'slug': slug.current,
    },
  }`;
  const res = await client.fetch(query);
  return res;
};
