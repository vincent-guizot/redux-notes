import React from "react";
import { Link } from "react-router-dom";

export default function ContentCard({ content }) {
  const { id, title, description, image } = content;
  return (
    <div className="shadow rounded-xl">
      <div className="w-full">
        <img src={image} alt="" />
      </div>
      <div className="w-full p-3">
        <div className="font-bold text-blue-800 text-xl">{title}</div>
        <p className="text-sm line-clamp-2">{description}</p>
      </div>
      <div className="w-full bg-gray-50 p-3">
        <div className="flex justify-center items-center">
          <Link
            to={`/contents/update/${id}`}
            className="px-3 py-2 text-sm rounded-md border border-blue-50 hover:bg-blue-700 hover:text-white"
          >
            Update
          </Link>
        </div>
      </div>
    </div>
  );
}
