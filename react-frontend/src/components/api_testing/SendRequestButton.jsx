import React from "react";
import { useRequest } from "../../contexts/RequestContext";
import { requestHandler } from "../../models/requestHandler";

const SendRequestButton = () => {
  const { getRequestData, setOutput } = useRequest();

  return (
    <button
      className="px-3 bg-primary text-neutral text-xs py-[10px] 
    font-bold border border-l-0 hover:opacity-75"
      onClick={async () => {
        const res = await requestHandler.request(getRequestData);
        setOutput(res);
      }}
    >
      SEND
    </button>
  );
};

export default SendRequestButton;
