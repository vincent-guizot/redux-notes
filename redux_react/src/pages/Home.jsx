import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getContents } from "../redux/axios";

function Home() {
  const dispatch = useDispatch();

  const { contents } = useSelector((state) => state.content);

  useEffect(() => {
    dispatch(getContents());
    console.log(contents);
  }, [dispatch]);

  return (
    <div className="">
      <div className="">
        <p className="text-stone-500 font-bold text-xl">Content List</p>
      </div>
      <div>{JSON.stringify(contents)}</div>
    </div>
  );
}

export default Home;
