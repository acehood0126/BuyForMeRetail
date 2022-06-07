import { Link } from "react-router-dom";
import lefttree from "../../assets/img/left-tree.svg";
import getstartedarrow from "../../assets/img/get-started-arrow.svg";
import righttree from "../../assets/img/right-tree.svg";
import macbook from "../../assets/img/macbook.png";

const Landing = () => {
  return (
    <div className="relative w-full bg-specwhite mt-[54px] px-[80px] pt-[75px] pb-[45px]">
      <div className="absolute flex justify-center">
        <img src={macbook} alt="" />
      </div>
      <div className="w-full h-full grid grid-cols-[234px_auto_234px]">
        <div className="pt-[30px]">
          <img src={lefttree} alt="" />
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
            <Link to="/register">
              <button className="transition bg-lightgreen hover:bg-darkgreen ease-out hover:ease-in rounded-[6px] text-white px-[12px] py-[6px] w-[185px] h-[40px] mb-[17px]">
                Get Started
              </button>
            </Link>
            <p className="text-lightblue text-[14px]">
              We don't charge a penny, it's free to use!
            </p>
            <img
              src={getstartedarrow}
              className="absolute ml-[106px] mt-[17px]"
              alt=""
            />
          </div>
        </div>
        <div className="pt-[30px]">
          <img src={righttree} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
