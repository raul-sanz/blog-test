import React, { useState } from "react";
import Layout from "../components/Layout";
import Router from "next/router";

const Draft: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { title, content };
      await fetch(`/api/post`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await Router.push("/drafts");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <div className="flex justify-center">
        <form onSubmit={submitData} className="flex flex-col gap-4 lg:w-7/12 w-full ">
          <h1 className="text-xl text-center">New Draft</h1>
          <input
            autoFocus
            className="block w-full rounded-md border-0 px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            type="text"
            value={title}
          />
          <textarea
            cols={50}
            className="block w-full rounded-md border-0 px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            rows={16}
            value={content}
          />
          <div className="flex gap-4" >
            <input className="bg-success text-white p-2 rounded-lg mt-4 disabled:opacity-50 disabled:cursor-not-allowed" disabled={!content || !title} type="submit" value="Create" />
            <a className="bg-error text-white p-2 rounded-lg mt-4" href="#" onClick={() => Router.push("/")}>
              Cancel
            </a>
          </div>
        </form>
      </div>

    </Layout>
  );
};

export default Draft;
