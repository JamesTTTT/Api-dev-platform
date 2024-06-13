import React from "react";
import {
  UrlBar,
  SendRequestButton,
  MethodSelector,
  RequestBody,
} from "../components";

const ApiTestWrapper = () => {
  return (
    <div className="bg-base-100">
      <main className="max-h-screen w-screen flex felx-col justify-between">
        <div className="w-1/2 h-screen overflow-scroll">
          <div className="flex w-full flex-row ">
            <MethodSelector />
            <UrlBar />
            <SendRequestButton />
          </div>
          <RequestBody />
        </div>
        <div className="w-1/2 h-screen bg-slate-400 overflow-scroll">
          I am the outut
        </div>
      </main>
    </div>
  );
};

export default ApiTestWrapper;