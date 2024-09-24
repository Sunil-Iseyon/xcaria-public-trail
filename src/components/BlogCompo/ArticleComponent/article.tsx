// import React from "react";
// import { getAllPosts } from "@/src/app/lib/mdx";
import Link from "next/link";
import Image from "next/image";
import Articlecss from "./Article.module.css";


export async function getBlogs() {
  const url = `${process.env.BASE_URL}/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=blogs`;
  const response = await fetch(url, {
    cache: "no-store",
  });
  // console.log(url)
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}

const Articles = async () => {
  // const posts =await getAllPosts();
  const data = await getBlogs();

  return (
    <div className="mt-10">
      <h2 className="my-12 text-center text-2xl font-semibold uppercase tracking-wide text-slate-100  ">
        Articles
      </h2>
      <div className="mx-2 flex flex-col items-center justify-center">
        {data.items.map((blog: any, index: number) => {
          const image = data.includes.Asset.find(
            (asset: any) => asset.sys.id === blog.fields.blogImage.sys.id
          );
          // console.log(asset.sys.id)
          return (
            <Link href={`/blog/${index}`} key={index}>
              <div
                className={`${Articlecss.card} mb-12 flex max-w-2xl items-center justify-between rounded-lg bg-slate-300/10 p-4`}
              >
                <Image
                  src={"https:" + image.fields.file.url}
                  alt={blog.fields.title}
                  width={150}
                  height={100}
                  className="rounded-lg"
                />
                <div className="ml-4">
                  <h2 className="font-semibold">{blog.fields.title}</h2>
                  {/* <p className='text-sm'>{post.frontMatter.excerpt}</p> */}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Articles;