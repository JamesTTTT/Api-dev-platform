import React from "react";
import {
  UrlBar,
  SendRequestButton,
  MethodSelector,
  RequestBody,
  ResponseDisplay,
} from "../components";

const ApiTestWrapper = () => {
  return (
    <div className="bg-base-100">
      <main className="max-h-screen w-screen flex felx-col justify-between">
        <div className="w-1/2 h-screen max-h-screen overflow-hidden">
          <div className="flex w-full flex-row border-b">
            <MethodSelector />
            <UrlBar />
            <SendRequestButton />
          </div>
          <RequestBody />
        </div>
        <div className="w-1/2 h-screen bg-neutral overflow-y-scroll">
          <ResponseDisplay />
        </div>
      </main>
    </div>
  );
};

export default ApiTestWrapper;
