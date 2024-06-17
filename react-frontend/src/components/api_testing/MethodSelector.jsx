import React from "react";
import { useRequest } from "../../contexts/RequestContext";

const MethodSelector = () => {
  const { setMethod, getRequestData } = useRequest();

  return (
    <div className="dropdown dropdown-hover">
      <div
        tabindex="0"
        role="button"
        className="btn m-0 w-20 rounded-none text-sm p-0 py-1"
      >
        {getRequestData.method || "Select Method"}
      </div>
      <ul
        tabindex="0"
        className="dropdown-content z-[1] menu p-2 shadow bg-neutral rounded-box "
      >
        <li>
          <a onClick={() => setMethod("GET")}>GET</a>
        </li>
        <li>
          <a onClick={() => setMethod("POST")}>POST</a>
        </li>
        <li>
          <a onClick={() => setMethod("PUT")}>PUT</a>
        </li>
        <li>
          <a onClick={() => setMethod("DELETE")}>DELETE</a>
        </li>
        <li>
          <a onClick={() => setMethod("PATCH")}>PATCH</a>
        </li>
        <li>
          <a onClick={() => setMethod("HEAD")}>HEAD</a>
        </li>
        <li>
          <a onClick={() => setMethod("OPTIONS")}>OPTIONS</a>
        </li>
      </ul>
    </div>
  );
};

export default MethodSelector;
