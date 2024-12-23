import React from 'react'
import vsCodeSvg from "../assets/vscode.svg"
function Nav() {
  return (
    <div className="bg-vs-nav basis-2/15 flex flex-row gap-2 p-1">
      <div className="p-0.5">
        <img src={vsCodeSvg} alt="" srcSet="" className="w-5" />
      </div>
      <div className="hover:bg-vs-nav-hover py-0.5 px-2 rounded hover:cursor-pointer">
        File
      </div>
      <div className="hover:bg-vs-nav-hover py-0.5 px-2 rounded hover:cursor-pointer">
        Edit
      </div>
      <div className="hover:bg-vs-nav-hover py-0.5 px-2 rounded hover:cursor-pointer">
        Selection
      </div>
      <div className="hover:bg-vs-nav-hover py-0.5 px-2 rounded hover:cursor-pointer">
        Terminal
      </div>
    </div>
  );
}

export default Nav
