import React, { useState } from 'react'
import threeDot from "../assets/3dot.svg"
import up from "../assets/up.svg";
import down from "../assets/down.svg";
import ListOfFiles from "./ListOfFiles";

function Explorer({ pageFiles, setCurrent,currentFile }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="basis-2/12 bg-vs-explore">
      <div className="flex justify-between px-4 py-1">
        <div className="font-thin">EXPLORER</div>
        <img src={threeDot} alt="" className="w-4" />
      </div>
      <div
        className="flex py-1 hover:cursor-pointer"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <img src={open ? down : up} alt="" className="w-4" />
        <div>PORTFOLIO</div>
      </div>
      {open && <ListOfFiles pageFiles={pageFiles} setCurrent={setCurrent} currentFile={currentFile} />}
    </div>
  );
}

export default Explorer