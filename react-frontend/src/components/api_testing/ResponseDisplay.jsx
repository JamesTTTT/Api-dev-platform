import React from "react";
import { useRequest } from "../../contexts/RequestContext";
import { CodeEditor } from "..";

const identifyOutput = (output) => {
  if (output.error) {
    return output.error;
  } else {
    return output.responseDetails;
  }
};

const PrettyJsonComponent = ({ jsonString }) => {
  let prettyJson;

  try {
    prettyJson = JSON.stringify(jsonString, null, 2);
  } catch (error) {
    prettyJson = "Invalid JSON";
  }

  return (
    <CodeEditor
      // className="p-4 hitespace-pre-wrap break-words"
      value={prettyJson}
      readOnly={true}
    />
  );
};

const colourCode = (errCode) => {
  errCode = errCode.toString();
  if (errCode.includes("2")) {
    return "bg-success text-neutral";
  } else if (errCode.includes("4")) {
    return "bg-warning text-neutral";
  } else if (errCode.includes("5")) {
    return "bg-error text-neutral";
  } else {
    return "bg-neutral";
  }
};

const ResponseDisplay = () => {
  const { output } = useRequest();

  const outputRes = identifyOutput(output);

  if (!outputRes) {
    return <></>;
  }

  return (
    <div>
      <div
        className={
          "px-2 w-full py-[10px] text-xs font-bold border-b " +
          colourCode(outputRes.status)
        }
      >
        {outputRes.status} {outputRes.statusText}
      </div>
      <PrettyJsonComponent jsonString={outputRes.data} />
    </div>
  );
};

export default ResponseDisplay;
