import React from "react";
import { useRequest } from "../../contexts/RequestContext";

const PrettyJsonComponent = ({ jsonString }) => {
  const prettyJson = JSON.stringify(JSON.parse(jsonString), null, 2);

  return <pre className="p-4 hitespace-pre-wrap break-words">{prettyJson}</pre>;
};

const ResponseDisplay = () => {
  const { output } = useRequest();
  return (
    <div>
      <PrettyJsonComponent jsonString={output.body} />
    </div>
  );
};

export default ResponseDisplay;
