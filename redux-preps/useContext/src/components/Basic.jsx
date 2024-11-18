import React, { useContext } from "react";
import { BasicContextProvider } from "../contexts/BasicContext";
import BasicComponent from "./BasicComponent";

export default function Basic() {
  return (
    <>
      <BasicContextProvider>
        <BasicComponent></BasicComponent>
      </BasicContextProvider>
    </>
  );
}
