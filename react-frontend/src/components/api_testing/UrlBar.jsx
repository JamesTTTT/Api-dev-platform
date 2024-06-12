import React from "react";

const UrlBar = () => {
  return (
    <div className="w-full">
      <input
        className="px-2 py-[10px] w-full outline-none border-y text-xs bg-transparent"
        placeholder="Enter URL"
      />
    </div>
  );
};

export default UrlBar;
