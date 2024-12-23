import React from 'react'
import error from "../assets/error.svg";
import warning from "../assets/warning.svg";
import remote from "../assets/remote.svg";
import port from "../assets/port.svg"
import liveServer from "../assets/liveserver.svg"
import notification from "../assets/notification.svg"


function Status() {
  return (
    <div className="basis-1/15 bg-vs-status flex flex-row justify-between">
      <div className="flex">
        <div className="bg-vs-remote-green flex justify-center w-8 mr-2">
          <img src={remote} alt="" srcset="" className="w-4" />
        </div>
        <div className="flex justify-center gap-1 font-medium mr-1 text-sm">
          <img src={error} alt="error" className="w-4" />0
        </div>
        <div className="flex justify-center gap-1 font-medium mr-3 text-sm">
          <img src={warning} alt="error" className="w-4" />0
        </div>
        <div className="flex justify-center gap-1 font-medium text-sm">
          <img src={port} alt="error" className="w-4" />0
        </div>
      </div>
      <div className='flex'>
        <div className="flex justify-center gap-1 font-medium text-sm mr-2">
          <img src={liveServer} alt="error" className="w-4" />Go Live
        </div>
        <div className="flex justify-center gap-1 font-medium text-sm mr-2">
          <img src={notification} alt="error" className="w-4" />
        </div>
      </div>
    </div>
  );
}

export default Status