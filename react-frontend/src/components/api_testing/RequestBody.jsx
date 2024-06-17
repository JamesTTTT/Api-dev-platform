import React, { useState } from "react";
import { useRequest } from "../../contexts/RequestContext";
import { CodeEditor, RequestHeaders } from "..";

const Body = () => {
  const { getRequestData, setBody } = useRequest();

  const updateCode = React.useCallback((val, viewUpdate) => {
    console.log("val:", val);
    setBody(val);
  }, []);

  return <CodeEditor onChange={updateCode} value={getRequestData.Body} />;
};

const RequestBody = () => {
  const [selectedTab, setSelectedTab] = useState("parameters");

  const changeTab = (e) => {
    setSelectedTab(e.target.value);
  };

  const active = "tab tab-active";
  const notActive = "tab";

  const isActive = (tabName) => {
    if (tabName === selectedTab) {
      return active;
    } else {
      return notActive;
    }
  };

  const selectedComp = () => {
    switch (selectedTab) {
      case "parameters":
        return <div>Parameter component goes here</div>;
      case "body":
        return <Body />;
      case "header":
        return <RequestHeaders />;
    }
  };

  return (
    <div className="h-full">
      <div role="tablist" className="tabs tabs-bordered">
        <button
          role="tab"
          className={isActive("parameters")}
          onClick={changeTab}
          value={"parameters"}
        >
          Parameters
        </button>
        <button
          role="tab"
          className={isActive("body")}
          onClick={changeTab}
          value={"body"}
        >
          Body
        </button>
        <button
          role="tab"
          className={isActive("header")}
          onClick={changeTab}
          value={"header"}
        >
          Headers
        </button>
      </div>
      <section className="h-full">{selectedComp()}</section>
    </div>
  );
};

export default RequestBody;
