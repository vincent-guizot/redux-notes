import React, { useEffect } from "react";

import { Link, Outlet, useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(localStorage.getItem("acce_"));
  }, []);

  return (
    <>
      <div className="w-full m-0 mb-3 p-3 flex justiy-center border-b border-b-stone-700 shadow">
        <div className="flex">
          <Link
            className="rounded-md px-4 py-2 text-stone-700 hover:bg-stone-700 hover:text-white text-medium"
            to="/"
          >
            Home
          </Link>
          <Link
            className="rounded-md px-4 py-2 text-stone-700 hover:bg-stone-700 hover:text-white text-medium"
            to="/"
          >
            Favorites
          </Link>
        </div>
      </div>
    </>
  );
}

export default Layout;
