import { getImg } from "../script/fileParse";

function FileHeader({title,type,isCurrent}) {
  return (
    <div className={"px-4 font-thin hover:bg-vs-sid hover:cursor-pointer flex flex-row items-center justify-start gap-1"+((isCurrent)?" bg-vs-sid":"")}>
        <img src={getImg(type)} alt="" className="inline w-3 mr-1" />
      <div className='text-sm font-mono tracking-tighter'>{title + "." + type}</div>
    </div>
  );
}

export default FileHeader