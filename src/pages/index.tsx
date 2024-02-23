import React, { useEffect, useState } from "react";
import type { GetServerSideProps } from "next";
import Layout from "../components/Layout";
import Post, { PostProps } from "../components/Post";
import prisma from '../lib/prisma'

export const getServerSideProps: GetServerSideProps = async () => {
  let feed:any = await prisma.post.findMany({
    where: {
      published: true,
    },
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  });

  feed = feed.map(post => ({
    ...post,
    createdAt: post.createdAt.toISOString(),
  }));

  return {
    props: { feed },
  };
};

type Props = {
  feed: PostProps[];
};

const Blog: React.FC<Props> = (props) => {

  const [posts, setPosts] = useState<Array<PostProps>>(props.feed);

  const filterPosts = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;
    const filteredPosts = props.feed.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.content.toLowerCase().includes(search.toLowerCase()) ||
      post.author.name.toLowerCase().includes(search.toLowerCase())
    );
    setPosts(filteredPosts);
  }


  return (
    <Layout>
      <div className="lg:px-24 px-2">
        <div className="flex flex-col-reverse lg:flex-row lg:flex lg:justify-between">
          <h1 className="text-left text-4xl">Lastest</h1>
          <input type="text" placeholder="Search by author, content or title" onChange={filterPosts} className="rounded-md w-64 border-0 px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
        <p className="text-gray-400">A blog created with Next.js and Tailwind.css</p>
        <main className=" mt-12 flex flex-col gap-6">
          {posts.length && posts.map((post) => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>
    </Layout>
  );
};

export default Blog;
