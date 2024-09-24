// import React from 'react'
import Image from "next/image";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { getBlogs } from '@/src/components/BlogCompo/ArticleComponent/article'


interface PageProps {
    params: { articleslug: string };
  }

async function AllBlogpage({ params }: PageProps ) {
  const data = await getBlogs();
  const index = params.articleslug;  
 
  // console.log(data.includes.Asset)
  const bloginfo =data.items[index].fields;
  // const blogImage = data.includes.Asset[index];
  // data[index].fields.blogImage.sys.id 
  
    const options = {
        renderText: (text:any) => {
          return text.split('\n').reduce((children:any, textSegment:any, index:any) => {
            return [...children, index > 0 && <br key={index} />, textSegment];
          }, []);
        },
      };
      const image = data.includes.Asset.find((asset:any) =>
        asset.sys.id === data.items[index].fields.blogImage.sys.id 
        )
      // In fields there is image id and in includes there is image link         
          
          {/* // console.log(image.fields.file.url); */}

           return (
            <div key={index} className=' mt-[150px] space-y-9'>
              <h1 className="mt-2 scroll-m-20 text-4xl font-bold tracking-tight">{bloginfo.title}</h1>
              <Image src={'https:'+image.fields.file.url} alt="An Image" width={600} height={200} className="ml-52"/>
              <div>{documentToReactComponents((bloginfo.description),options)}</div>
            </div>
          ); 
}

export default AllBlogpage;
