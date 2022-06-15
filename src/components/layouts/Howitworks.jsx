import buyandship from "../../assets/img/buy-and-ship.svg";
import buyandshiparrow from "../../assets/img/buy-and-ship-arrow.svg";
import getpaid from "../../assets/img/get-paid.svg";
import getpaidarrow from "../../assets/img/get-paid-arrow.svg";
import earnreward from "../../assets/img/earn-reward.svg";

const Howitworks = () => {
  return (
    <div
      id="HowItWorksSection"
      className="w-full md:px-[60px] px-[20px] py-[45px] flex justify-center"
    >
      <div className="max-w-[1140px] px-[15px]">
        {/* Header */}
        <div className="w-full mb-[30px]">
          <p className="text-center uppercase text-[12px] text-lightgreen font-bold mb-[15px]">
            How it works
          </p>
          <h1 className="text-center text-[34px] text-lightblue font-bold mb-[8px]">
            It's Easy
          </h1>
        </div>
        {/* Work Steps */}
        <div className="w-full">
          <div className="mx-[-15px] grid md:grid-cols-12 grid-cols-1 md:mb-[116px] mb-[30px]">
            <div className="w-full md:col-span-7 flex md:justify-end md:mb-0 my-[15px] justify-center items-end px-[15px]">
              <div className="w-full transition ease-linear drop-shadow-threeDbox hover:drop-shadow-none sm:max-w-[539px] sm:min-h-[132px] bg-specwhite rounded-full sm:px-[34px] sm:py-[16px] px-[10px] py-[10px] flex items-center">
                <div className="sm:w-[50px] sm:h-[50px] w-[30px] h-[30px] sm:min-w-[50px] min-w-[30px] rounded-full border-dashed border-lightgreen border-[1px] flex justify-center items-center text-lightgreen font-bold sm:text-[24px] text-[14px]">
                  1
                </div>
                <div className="sm:ml-[20px] ml-[10px]">
                  <h1 className="font-bold sm:text-[24px] text-[16px] text-lightgreen mb-8px">
                    Buy & Ship
                  </h1>
                  <p className="text-lightblue sm:text-[16px] text-[12px]">
                    Purchase items from retailer links we share and use our
                    ship-to-address.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 flex md:justify-end justify-center sm:px-[15px]">
              <img src={buyandship} alt="" />
            </div>
            <img
              src={buyandshiparrow}
              className="absolute mt-[191px] ml-[300px] lg:block hidden"
              alt=""
            />
          </div>
          <div className="mx-[-15px] grid md:grid-cols-12 grid-cols-1 md:mb-[116px] mb-[30px]">
            <div className="w-full sm:order-last md:col-span-7 flex md:justify-end md:mb-0 my-[15px] justify-center items-end px-[15px]">
              <div className="w-full transition ease-linear drop-shadow-threeDbox hover:drop-shadow-none sm:max-w-[539px] sm:min-h-[132px] bg-specwhite rounded-full sm:px-[34px] sm:py-[16px] px-[10px] py-[10px] flex items-center">
                <div className="sm:w-[50px] sm:h-[50px] w-[30px] h-[30px] sm:min-w-[50px] min-w-[30px] rounded-full border-dashed border-lightgreen border-[1px] flex justify-center items-center text-lightgreen font-bold sm:text-[24px] text-[14px]">
                  2
                </div>
                <div className="sm:ml-[20px] ml-[10px]">
                  <h1 className="font-bold sm:text-[24px] text-[16px] text-lightgreen mb-8px">
                    Get Paid
                  </h1>
                  <p className="text-lightblue sm:text-[16px] text-[12px]">
                    We receive your packages and pay you the same day.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 flex md:justify-end justify-center sm:px-[15px]">
              <img src={getpaid} alt="" />
            </div>
            <img
              src={getpaidarrow}
              className="absolute mt-[191px] ml-[300px] rotate-[-2deg] lg:block hidden"
              alt=""
            />
          </div>
          <div className="mx-[-15px] grid md:grid-cols-12 grid-cols-1 md:mb-[116px] mb-[30px]">
            <div className="w-full md:col-span-7 flex md:justify-end md:mb-0 my-[15px] justify-center items-end px-[15px]">
              <div className="w-full transition ease-linear drop-shadow-threeDbox hover:drop-shadow-none sm:max-w-[539px] sm:min-h-[132px] bg-specwhite rounded-full sm:px-[34px] sm:py-[16px] px-[10px] py-[10px] flex items-center">
                <div className="sm:w-[50px] sm:h-[50px] w-[30px] h-[30px] sm:min-w-[50px] min-w-[30px] rounded-full border-dashed border-lightgreen border-[1px] flex justify-center items-center text-lightgreen font-bold sm:text-[24px] text-[14px]">
                  3
                </div>
                <div className="sm:ml-[20px] ml-[10px]">
                  <h1 className="font-bold sm:text-[24px] text-[16px] text-lightgreen mb-8px">
                    Earn Rewards
                  </h1>
                  <p className="text-lightblue sm:text-[16px] text-[12px]">
                    Accumulate rewards, airmiles, cashback and much more!
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 flex md:justify-end justify-center sm:px-[15px]">
              <img src={earnreward} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howitworks;
