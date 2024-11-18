import React from "react";
import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="w-full text-center mx-auto">
        <div className="my-2 p-3 w-full bg-gradient-to-r from-cyan-700 to-blue-700  ">
          <h1 className="mb-2 ">
            <Link className="font-medium hover:text-blue-500 text-3xl text-white" to="/">
              Content with useContext
            </Link>
          </h1>
          {/* <Link
            className="rounded-md px-2 py-2 text-white  -700 hover:bg-lime-900 font-medium"
            to="/contents/create"
          >
            Create
          </Link> */}
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
}

export default Layout;
