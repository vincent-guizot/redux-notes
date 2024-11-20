import React, { useEffect } from "react";

import { Link, Outlet, useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/login");
    } else {
    }
  }, []);

  return (
    <>
      <div className="w-full m-0 mb-3 p-3 flex justiy-center border-b border-b-stone-100 shadow">
        {/* <div className="flex flex-1"> */}
        {/* <Link to="/">Redux</Link> */}
        {/* </div> */}
        <div className="flex flex-[0.3] gap-3">
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

      <div className="p-3">
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default Layout;
