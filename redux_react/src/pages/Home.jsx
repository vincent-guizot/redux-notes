import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getContents } from "../redux/axios";
import { Link } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();

  const { contents, loading, error } = useSelector((state) => state.content);

  useEffect(() => {
    dispatch(getContents());
    console.log(contents);
  }, [dispatch]);

  return (
    <div className="">
      <div className="flex flex-row ">
        <p className="text-stone-500 font-bold text-xl mr-5">Content List</p>
        <Link
          className="rounded-md border border-amber-100 font-medium text-sm text-amber-700 px-5 py-1 hover:bg-amber-700 hover:text-white"
          to="/"
        >
          + Create
        </Link>
      </div>
      <div>
        {/* {JSON.stringify(contents)} */}
        <table className="table w-3/5 my-3">
          <thead className="bg-amber-100">
            <tr className="">
              <th className="p-3">Id</th>
              <th className="p-3">Title</th>
              <th>DEscrtiption</th>
            </tr>
          </thead>
          <tbody>
            {contents.map((content) => {
              const { id, title, description } = content;
              return (
                <tr key={id} className="p-3">
                  <td className="p-3">{id}</td>
                  <td className="p-3">{title}</td>
                  <td className="">{description}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
