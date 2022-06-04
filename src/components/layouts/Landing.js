import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="w-full h-[403px] bg-[#f9fafc] mt-[54px] px-[80px] pt-[75px] pb-[45px]">
      <div className="w-full h-full grid grid-cols-[234px_auto_234px]">
        <div className="pt-[30px]">
          <img src="/static/img/left-tree.svg" alt="" />
        </div>
        <div className="content-between items-center">
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
          <div className="w-full flex justify-center mb-[17px]">
            <Link to="/">
              <button className="transition bg-lightgreen hover:bg-darkgreen hover:ease-in rounded-[6px] text-white px-[12px] py-[6px] w-[185px] h-[40px]">
                Get Started
              </button>
            </Link>
          </div>
          <p className="w-full text-center text-lightblue text-[14px]">
            We don't charge a penny, it's free to use!
          </p>
        </div>
        <div className="pt-[30px]">
          <img src="/static/img/right-tree.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
