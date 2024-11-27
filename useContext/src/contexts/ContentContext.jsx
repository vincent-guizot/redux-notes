import React, { createContext, useState } from "react";

const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [contents, setContents] = useState([]);
  const value = {
    contents,
    setContents,
  };

  return (
    <>
      <ContentContext.Provider value={value}>{children}  </ContentContext.Provider>
    </>
  );
};

export default ContentContext;
