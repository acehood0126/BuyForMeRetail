import airmile from "../../assets/img/air-mile.svg";
import cashback from "../../assets/img/cash-back.svg";
import cashbonus from "../../assets/img/cash-bonus.svg";
import cardspend from "../../assets/img/card-spend.svg";
import workremotely from "../../assets/img/work-remotely.svg";
import retailerreward from "../../assets/img/retailer-reward.svg";

const Profitrewards = () => {
  return (
    <div className="w-full px-[60px] py-[45px]">
      <div className="mx-[161px] px-[15px]">
        <div className="w-full mb-[30px]">
          <p className="text-center uppercase text-[12px] text-lightgreen font-bold mb-[15px]">
            what are the benefits
          </p>
          <h1 className="text-center text-[34px] text-lightblue font-bold mb-[8px]">
            Profit in Rewards
          </h1>
        </div>
        <div className="w-full grid grid-cols-3 justify-items-center text-lightblue">
          <div className="w-[350px] mb-[20px] px-[20px] py-[12px] border-[1px] rounded-[6px] flex items-start">
            <img src={airmile} className="mr-[18px]" alt="" />
            <div>
              <h3 className="font-bold text-[16px] mb-[5px]">Airmiles</h3>
              <p className="text-[14px]">
                Accumulate airmiles to book trips with your family and friends.
              </p>
            </div>
          </div>
          <div className="w-[350px] mb-[20px] px-[20px] py-[12px] border-[1px] rounded-[6px] flex items-start">
            <img src={cashback} className="mr-[18px]" alt="" />
            <div>
              <h3 className="font-bold text-[16px] mb-[5px]">Cash Back</h3>
              <p className="text-[14px]">Earn cash back on your spend.</p>
            </div>
          </div>
          <div className="w-[350px] mb-[20px] px-[20px] py-[12px] border-[1px] rounded-[6px] flex items-start">
            <img src={cashbonus} className="mr-[18px]" alt="" />
            <div>
              <h3 className="font-bold text-[16px] mb-[5px]">
                Commission Cash Bonuses
              </h3>
              <p className="text-[14px]">
                We pay above retail (your cost) on select deals, you pocket the
                cash.
              </p>
            </div>
          </div>
          <div className="w-[350px] mb-[20px] px-[20px] py-[12px] border-[1px] rounded-[6px] flex items-start">
            <img src={cardspend} className="mr-[18px]" alt="" />
            <div>
              <h3 className="font-bold text-[16px] mb-[5px]">
                Minimum Card Spend
              </h3>
              <p className="text-[14px]">
                Meet minimum and initial spend goals on credit cards.
              </p>
            </div>
          </div>
          <div className="w-[350px] mb-[20px] px-[20px] py-[12px] border-[1px] rounded-[6px] flex items-start">
            <img src={workremotely} className="mr-[18px]" alt="" />
            <div>
              <h3 className="font-bold text-[16px] mb-[5px]">Work Remotely</h3>
              <p className="text-[14px]">
                Rack up rewards from the comfort of your own home or on the go.
              </p>
            </div>
          </div>
          <div className="w-[350px] mb-[20px] px-[20px] py-[12px] border-[1px] rounded-[6px] flex items-start">
            <img src={retailerreward} className="mr-[18px]" alt="" />
            <div>
              <h3 className="font-bold text-[16px] mb-[5px]">
                Retailer Rewards
              </h3>
              <p className="text-[14px]">
                Bank retail rewards like My Best Buy Rewards, Rakuten and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profitrewards;
