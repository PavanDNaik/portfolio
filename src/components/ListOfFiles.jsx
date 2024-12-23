import React from 'react'
import FileHeader from './FileHeader'
function ListOfFiles({ pageFiles, setCurrent,currentFile }) {
  return (
    <div>
      {pageFiles.map((file, i) => {
        return (
          <div
            onClick={() => {
              setCurrent(i);
            }}
          >
            <FileHeader title={file.title} type={file.type} isCurrent={currentFile==file} />
          </div>
        );
      })}
    </div>
  );
}

export default ListOfFiles