import {  filContent } from "../constant";
import Editor from "./Code/Editor"
import React  from 'react'
import PageHeader from "./Code/PageHeader";

function Files({ pageFiles, currentFile, setCurrent }) {
  return (
    <div className="h-full">
      <div className="flex bg-vs-sid">
        {pageFiles.map((pageFile,i) => (
          <div onClick={()=>{setCurrent(i)}}>
            <PageHeader
              title={pageFile.title}
              type={pageFile.type}
              isCurrent={pageFile == currentFile}
            />
          </div>
        ))}
      </div>
      <Editor code={filContent[currentFile.type]} lang={currentFile.lang} />
    </div>
  );
}

export default Files