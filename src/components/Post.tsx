import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import {ArrowIcon} from "../lib/Icons";

export type PostProps = {
  id: number;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  published: boolean;
  createdAt: string;
};


const Post: React.FC<{ post: PostProps }> = ({ post }) => {

  const authorName = post.author ? post.author.name : "Unknown author";
  return (
    <div className="border-t-4 border-success p-2 rounded-md bg-white">
      <h2 className="text-xl text-primary">{post.title}</h2>
      <small className="text-gray-600">Published At {new Date(post.createdAt).toLocaleDateString()} By {authorName}</small>
      <ReactMarkdown children={post.content.substring(0,70).concat('...')} />
      <Link className="underline text-success flex" href={`/p/${post.id}`}>Read more <ArrowIcon/></Link>
    </div>
  );
};

export default Post;
