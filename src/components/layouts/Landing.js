import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="w-full bg-specwhite mt-[54px] px-[80px] pt-[75px] pb-[45px]">
      <div className="w-full h-full grid grid-cols-[234px_auto_234px]">
        <div className="pt-[30px]">
          <img src="/static/img/left-tree.svg" alt="" />
        </div>
        <div className="content-between grid grid-cols-1 justify-items-center">
          <div className="w-full text-[48px] font-bold">
            <h1 className="w-full text-center text-darkblue">
              A Smarter Way to Earn
            </h1>
            <h1 className="w-full text-center text-lightgreen mb-[25px]">
              Credit Card Rewards
            </h1>
          </div>
          <p className="w-full text-center text-lightblue text-[16px] mb-[25px]">
            Join a growing community of people earning more by doing less
          </p>
          <div className="w-[290px] grid grid-cols-1 justify-items-center">
            <Link to="/">
              <button className="transition bg-lightgreen hover:bg-darkgreen ease-out hover:ease-in rounded-[6px] text-white px-[12px] py-[6px] w-[185px] h-[40px] mb-[17px]">
                Get Started
              </button>
            </Link>
            <p className="text-lightblue text-[14px]">
              We don't charge a penny, it's free to use!
            </p>
            <img
              src="/static/img/get-started-arrow.svg"
              className="absolute ml-[106px] mt-[17px]"
              alt=""
            />
          </div>
        </div>
        <div className="pt-[30px]">
          <img src="/static/img/right-tree.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
