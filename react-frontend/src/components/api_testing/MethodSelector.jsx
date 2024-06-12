import React from "react";
import { useRequest } from "../../contexts/RequestContext";

const MethodSelector = () => {
  const { setMethod, getRequestData } = useRequest();

  const setValueOfMethod = (e) => {
    setMethod(e.target.value);
  };

  return (
    <select
      value={getRequestData.method}
      onChange={setValueOfMethod}
      className="bg-neutral w-full max-w-20 px-2 hover:bg-opacity-50 border border-r-0 text-xs"
    >
      <option value="GET">GET</option>
      <option value="POST">POST</option>
      <option value="PUT">PUT</option>
      <option value="DELETE">DELETE</option>
      <option value="PATCH">PATCH</option>
      <option value="HEAD">HEAD</option>
      <option value="OPTIONS">OPTIONS</option>
    </select>
  );
};

export default MethodSelector;
