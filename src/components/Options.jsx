import React from 'react'
import explorerIcon from "../assets/explorer.svg"
function Options() {
  return (
    <div className='basis-2/15 bg-vs-sid flex flex-col'>
      <div className="w-10 flex justify-center align-middle p-2 hover:cursor-pointer border-l-2">
        <img src={explorerIcon} alt="Explore" className='w-7' />
      </div>
    </div>
  )
}

export default Options