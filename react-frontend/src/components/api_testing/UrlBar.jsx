import React from "react";
import { useRequest } from "../../contexts/RequestContext";

const UrlBar = () => {
  const { getRequestData, setURL } = useRequest();

  return (
    <div className="w-full">
      <input
        value={getRequestData.url}
        onChange={(e) => {
          setURL(e.target.value);
        }}
        className="px-2 py-[10px] w-full outline-none border-y text-xs bg-transparent"
        placeholder="Enter URL"
      />
    </div>
  );
};

export default UrlBar;
