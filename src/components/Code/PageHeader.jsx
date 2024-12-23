import React from 'react'
import { getImg } from '../../script/fileParse'

function PageHeader({type,title,isCurrent}) {
  return (
    <div className={"px-4 py-2 font-thin hover:cursor-pointer flex flex-row items-center justify-start gap-1"+(isCurrent?" bg-vs-main-terminal":"")}>
            <img src={getImg(type)} alt="" className="inline w-3 mr-1" />
          <div className='text-sm font-mono tracking-tighter'>{title + "." + type}</div>
    </div>
  )
}

export default PageHeader