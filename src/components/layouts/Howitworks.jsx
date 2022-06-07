import buyandship from "../../assets/img/buy-and-ship.svg";
import buyandshiparrow from "../../assets/img/buy-and-ship-arrow.svg";
import getpaid from "../../assets/img/get-paid.svg";
import getpaidarrow from "../../assets/img/get-paid-arrow.svg";
import earnreward from "../../assets/img/earn-reward.svg";
import { forwardRef } from "react";

const Howitworks = forwardRef(({ onhiwClick }, ref) => {
  return (
    <div ref={ref} className="w-full px-[60px] py-[45px] flex justify-center">
      <div className="w-[1140px] px-[15px]">
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
          <div className="mx-[-15px] grid grid-cols-12 mb-[116px]">
            <div className="col-span-7 flex justify-end items-end px-[15px]">
              <div className="transition ease-linear drop-shadow-threeDbox hover:drop-shadow-none w-[539px] h-[132px] bg-specwhite rounded-full px-[34px] py-[16px] flex items-center">
                <div className="w-[50px] h-[50px] min-w-[50px] rounded-full border-dashed border-lightgreen border-[1px] flex justify-center items-center text-lightgreen font-bold text-[24px]">
                  1
                </div>
                <div className="ml-[20px]">
                  <h1 className="font-bold text-[24px] text-lightgreen mb-8px">
                    Buy & Ship
                  </h1>
                  <p className="text-lightblue text-[16px]">
                    Purchase items from retailer links we share and use our
                    ship-to-address.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-5 flex justify-end px-[15px]">
              <img src={buyandship} alt="" />
            </div>
            <img
              src={buyandshiparrow}
              className="absolute mt-[191px] ml-[300px]"
              alt=""
            />
          </div>
          <div className="mx-[-15px] grid grid-cols-12 mb-[116px]">
            <div className="col-span-5 flex justify-center">
              <img src={getpaid} alt="" />
            </div>
            <div className="col-span-7 flex justify-end items-end">
              <div className="transition ease-linear drop-shadow-threeDbox hover:drop-shadow-none bg-specwhite w-[539px] h-[132px] rounded-full px-[34px] py-[16px] flex items-center">
                <div className="w-[50px] h-[50px] min-w-[50px] rounded-full border-dashed border-lightgreen border-[1px] flex justify-center items-center text-lightgreen font-bold text-[24px]">
                  2
                </div>
                <div className="ml-[20px]">
                  <h1 className="font-bold text-[24px] text-lightgreen mb-8px">
                    Get Paid
                  </h1>
                  <p className="text-lightblue text-[16px]">
                    We receive your packages and pay you the same day.
                  </p>
                </div>
              </div>
            </div>
            <img
              src={getpaidarrow}
              className="absolute mt-[191px] ml-[300px] rotate-[-2deg]"
              alt=""
            />
          </div>
          <div className="mx-[-15px] grid grid-cols-12">
            <div className="col-span-7 flex justify-end items-end">
              <div className="transition ease-linear drop-shadow-threeDbox hover:drop-shadow-none bg-specwhite w-[539px] h-[132px] rounded-full px-[34px] py-[16px] flex items-center">
                <div className="w-[50px] h-[50px] min-w-[50px] rounded-full border-dashed border-lightgreen border-[1px] flex justify-center items-center text-lightgreen font-bold text-[24px]">
                  3
                </div>
                <div className="ml-[20px]">
                  <h1 className="font-bold text-[24px] text-lightgreen mb-8px">
                    Earn Rewards
                  </h1>
                  <p className="text-lightblue text-[16px]">
                    Accumulate rewards, airmiles, cashback and much more!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-5 flex justify-center">
              <img src={earnreward} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Howitworks;
