import { FaLock, FaLockOpen } from "react-icons/fa";
const DataWithLock = ({ date, status }) => {
  var lockImg;
  if (status === "1") {
    lockImg = <FaLock className="ml-[10px] h-[12px] w-[12px]" />;
  } else if (status === "0") {
    lockImg = <FaLockOpen className="ml-[10px] h-[14px] w-[14px]" />;
  }

  return (
    <div className="h-[40px] w-[60px]">
      <p className="text-[10px]">{date}</p>
      <p className="mt-[5px] text-[18px] leading-[14px] flex">
        --
        {lockImg}
      </p>
    </div>
  );
};

export default DataWithLock;
