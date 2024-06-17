import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { createTheme } from "@uiw/codemirror-themes";
import { tags as t } from "@lezer/highlight";

import { json } from "@codemirror/lang-json";

const CodeMirrorEditor = ({ value, onChange, readOnly = false }) => {
  const myAppTheme = createTheme({
    dark: "dark",
    settings: {
      background: "#1c212b", // base-100
      backgroundImage: "",
      foreground: "#B2CCD6",
      caret: "#9FE88D", // primary
      selection: "#FF7D5C", // accent
      selectionMatch: "#FF7D5C", // accent
      gutterBackground: "#2A303C", // neutral
      gutterForeground: "#B2CCD6", // base-content
      gutterBorder: "#1c212b", // neutral
      gutterActiveForeground: "#9FE88D", // primary
      lineHighlight: "#1c212b", // neutral
    },
    styles: [
      { tag: t.comment, color: "#1c212b" }, // neutral
      { tag: t.definition(t.typeName), color: "#FF7D5C" }, // secondary
      { tag: t.typeName, color: "#FF7D5C" }, // secondary
      { tag: t.tagName, color: "#9FE88D" }, // primary
      { tag: t.variableName, color: "#FF7D5C" }, // accent
    ],
  });

  return (
    <CodeMirror
      value={value}
      height="100%"
      extensions={[json()]}
      theme={myAppTheme}
      onChange={onChange}
      readOnly={readOnly}
    />
  );
};

export default CodeMirrorEditor;
