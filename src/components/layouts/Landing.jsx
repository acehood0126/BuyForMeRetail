import { Link } from "react-router-dom";
import landingback from "../../assets/img/landingback.svg";
import coins from "../../assets/img/coins.png";

const Landing = () => {
  return (
    <div
      style={{ backgroundImage: `url('${landingback}')` }}
      className="w-full h-screen px-[80px] pt-[129px] bg-cover bg-center pb-[45px] overflow-hidden"
    >
      {/* <img src={macbook} alt="" /> */}
      <div className="w-full h-full grid grid-cols-5">
        <div className="col-span-2">
          <img src={coins} alt="" />
        </div>

        <div className="col-span-3 w-full flex items-center justify-center">
          <div className="grid grid-cols-1 justify-items-center">
            <div className="w-full text-[60px] font-bold">
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
              <Link to="/register" className="mb-[17px]">
                <button className="transition bg-lightgreen hover:bg-darkgreen ease-out hover:ease-in rounded-[6px] text-white px-[12px] py-[6px] w-[185px] h-[40px]">
                  Get Started
                </button>
              </Link>
              <p className="text-lightblue text-[14px]">
                We don't charge a penny, it's free to use!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
