import React, { useState } from "react";
import MonacoEditor from "@monaco-editor/react";
function Editor({ code, lang }) {

  return (
    <>
      <div className="">
        <MonacoEditor
          value={code}
          language={lang}
          theme="vs-dark"
          options={{
            minimap: {
              enabled: false,
            },
          }}
          height="50vh"
          onChange={()=>false}
        />
        </div>
    </>
  );
}

export default Editor;
