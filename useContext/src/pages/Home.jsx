import React, { useContext, useState } from "react";
import ContentContext from "../contexts/ContentContext";
import ContentCard from "../components/ContentCard";
import { Link } from "react-router-dom";
import useGetContents from '../hooks/useGetContents'
import { useEffect } from "react";

function Home() {
  const [title, setTitle] = useState("")
  const { contents, setContents } = useContext(ContentContext);
  const { loading, error } = useGetContents("")

  return (
    <div className="w-full ">
      <div className="text-center my-2">
        <p className="font-bold text-3xl mb-3">Content List</p>

        <Link
          className="rounded-md mb-3 px-2 py-2 text-white bg-blue-700 hover:bg-blue-900 font-medium"
          to="/contents/create"
        >
          Create
        </Link>
      </div>

      <div className="w-3/4 mx-auto">

        <div className="flex">
          <div className="flex-[0.25] p-3 bg-slate-50">
            <p className="my-3 font-medium text-xl">FILTER</p>
            <div className="flex flex-col" >
              <p className=" text-slate-700">Published</p>
              <div className="flex flex-col">
                <p>Yes</p>
                <p>No</p>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Search Content
              </label>
              <div className="mt-2">
                <input
                  id="title"
                  name="title"
                  type="title"
                  required
                  autoComplete="title"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="p-3  grid grid-cols-5 gap-5 place-content-center">
              {loading && <h1>Loading Data</h1>}
              {contents.map((content) => {
                return (
                  <ContentCard key={content.id} content={content}></ContentCard>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
