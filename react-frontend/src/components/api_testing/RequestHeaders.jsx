import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";

const RequestHeaders = () => {
  const [headers, setHeaders] = useState([{ header: "", value: "" }]);

  const inputCss =
    "border-b bg-transparent text-sm outline-none mx-2 my-3  w-1/2";

  const editHeader = (headerIndex, newValue) => {
    setHeaders(
      headers.map((item, index) =>
        index === headerIndex ? { ...item, header: newValue } : item
      )
    );
  };

  const editHeaderValue = (headerIndex, newValue) => {
    setHeaders(
      headers.map((item, index) =>
        index === headerIndex ? { ...item, value: newValue } : item
      )
    );
  };

  const addHeader = () => {
    setHeaders([...headers, { header: "", value: "" }]);
  };

  const clearHeaders = () => {
    setHeaders([{ header: "", value: "" }]);
  };

  const mapHeaders = () => {
    return headers.map((item, index) => {
      return (
        <div className="flex flex-row justify-center">
          <input
            className={inputCss}
            placeholder="header"
            value={item.header}
            onChange={(e) => editHeader(index, e.target.value)}
          />
          <input
            className={inputCss}
            placeholder="value"
            value={item.value}
            onChange={(e) => editHeaderValue(index, e.target.value)}
          />
        </div>
      );
    });
  };

  return (
    <div>
      <div className=" w-full bg-neutral flex flex-row">
        <button
          onClick={addHeader}
          className="bg-primary px-4 text-neutral font-bold"
        >
          <IoMdAdd />
        </button>
        <button onClick={clearHeaders} className="bg-error px-2 text-neutral">
          Remove All
        </button>
        {/* <button onClick={clearHeaders} className="bg-accent px-2 text-neutral">
          Show description
        </button> */}
      </div>
      <div>{mapHeaders()}</div>
    </div>
  );
};

export default RequestHeaders;
