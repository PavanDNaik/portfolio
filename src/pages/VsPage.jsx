import React, { useState } from "react";
import Options from "../components/Options";
import Explorer from "../components/Explorer";
import Files from "../components/Files";
import MyTerminal from "../components/MyTerminal";
import Status from "../components/Status";
import Nav from "../components/Nav";
import { defaultFiles } from "../constant";

function VsPage() {
    const [pageFiles, setPageFiles] = useState(defaultFiles);
    const [currentFile, setCurrentFile] = useState(defaultFiles[0]);
    function setCurrent(i){
      if(i<pageFiles.length){
        setCurrentFile(pageFiles[i]);
      }
    }
  return (
    <div className="flex flex-col h-screen text-text-gray">
      <Nav />
      <div className="basis-full flex flex-row">
        <Options />
        <Explorer
          pageFiles={pageFiles}
          setCurrent={setCurrent}
          currentFile={currentFile}
        />
        <div className="basis-full bg-vs-main-terminal flex flex-col">
          <div className="h-full">
            <Files
              pageFiles={pageFiles}
              currentFile={currentFile}
              setCurrent={setCurrent}
            />
          </div>
          {/* <MyTerminal /> */}
        </div>
      </div>
      <Status />
    </div>
  );
}

export default VsPage;
