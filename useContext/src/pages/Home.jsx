import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import ContentContext from "../contexts/ContentContext";
import ContentCard from "../components/ContentCard";
import { Link } from "react-router-dom";

function Home() {
  const { contents, setContents } = useContext(ContentContext);

  const [loading, setLoading] = useState(false);
  const getAllContents = async () => {
    try {
      const results = await axios({
        method: "GET",
        url: "http://localhost:3000/contents",
      });
      console.log(results.data);
      setContents(results.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllContents();
    if (contents) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, []);

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

      <div className=" flex justify-center w-3/4 mx-auto">
        <div className="p-3  grid grid-cols-5 gap-5 place-content-center">
          {loading ? <p>Loading Data</p> : ""}

          {contents.map((content) => {
            return (
              <ContentCard key={content.id} content={content}></ContentCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
