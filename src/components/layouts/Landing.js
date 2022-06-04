import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="w-full h-[403px] bg-white mt-[54px] px-[80px] pt-[75px] pb-[45px]">
      <div className="w-full h-full grid grid-cols-[234px_auto_234px]">
        <div className="pt-[30px]">
          <img src="/static/img/left-tree.svg" alt="" />
        </div>
        <div className="justify-center content-between">
          <div className="w-full text-[48px] font-extrabold font-Avenir">
            <h1 className="w-full text-center text-[#122844]">
              A Smarter Way to Earn
            </h1>
            <h1 className="w-full text-center text-[#3bbd96] mb-[25px]">
              Credit Card Rewards
            </h1>
          </div>
          <p className="w-full text-center text-[#212529] text-[16px]">
            Join a growing community of people earning more by doing less
          </p>
          <div>
            <Link to="/">
              <button className="bg-[#3bbd96] hover:bg-[#2aac8a] rounded-[6px] text-white px-[12px] py-[6px] w-[185px] h-[40px]">
                Get Started
              </button>
            </Link>
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
