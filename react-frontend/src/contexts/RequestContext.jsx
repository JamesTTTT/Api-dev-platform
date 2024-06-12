import React, { createContext, useState, useContext } from "react";

const RequestContext = createContext();

export const RequestProvider = ({ children }) => {
  const [method, setMethod] = useState("GET");
  const [URL, setURL] = useState("");
  const [headers, setHeaders] = useState({});
  const [body, setBody] = useState({});

  const getRequestData = {
    method: method,
    url: URL,
    headers: headers,
    body: body,
  };

  const contextValue = {
    setMethod,
    setURL,
    setHeaders,
    setBody,
    getRequestData,
  };

  return (
    <RequestContext.Provider value={contextValue}>
      {children}
    </RequestContext.Provider>
  );
};

export const useRequest = () => {
  const context = useContext(RequestContext);
  if (context === undefined) {
    throw new Error("useRequest must be used within an RequestProvider");
  }
  return context;
};
