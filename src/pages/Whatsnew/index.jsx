import Versionitem from "./Versionitem";

const Whatsnew = () => {
  return (
    <div className="w-full min-h-screen bg-specwhite p-[20px]">
      <p className="mb-[20px] text-[14px] text-lightblue">
        Stay informed on the latest updates, features, and bug fixes.
      </p>
      <div className="w-full">
        <Versionitem />
      </div>
    </div>
  );
};

export default Whatsnew;
