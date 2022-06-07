import airmile from "../../assets/img/air-mile.svg";
import cashback from "../../assets/img/cash-back.svg";
import cashbonus from "../../assets/img/cash-bonus.svg";
import cardspend from "../../assets/img/card-spend.svg";
import workremotely from "../../assets/img/work-remotely.svg";
import retailerreward from "../../assets/img/retailer-reward.svg";

import Profitbox from "../Profitbox";

const Profitrewards = () => {
  return (
    <div className="w-full px-[60px] py-[45px] bg-specwhite">
      <div className="mx-[161px] px-[15px]">
        <div className="w-full mb-[30px]">
          <p className="text-center uppercase text-[12px] text-lightgreen font-bold mb-[15px]">
            what are the benefits
          </p>
          <h1 className="text-center text-[34px] text-lightblue font-bold mb-[8px]">
            Profit in Rewards
          </h1>
        </div>
        <div className="w-full grid grid-cols-3 gap-[40px] justify-items-center text-lightblue">
          <Profitbox
            pic={airmile}
            heading="Airmiles"
            txt="Accumulate airmiles to book trips with your family and friends."
          />
          <Profitbox
            pic={cashback}
            heading="Cash Back"
            txt="Earn cash back on your spend."
          />
          <Profitbox
            pic={cashbonus}
            heading="Commission Cash Bonuses"
            txt="We pay above retail (your cost) on select deals, you pocket the
                cash."
          />
          <Profitbox
            pic={cardspend}
            heading="Minimum Card Spend"
            txt="Meet minimum and initial spend goals on credit cards."
          />
          <Profitbox
            pic={workremotely}
            heading="Work Remotely"
            txt="Rack up rewards from the comfort of your own home or on the go."
          />
          <Profitbox
            pic={retailerreward}
            heading="Retailer Rewards"
            txt="Bank retail rewards like My Best Buy Rewards, Rakuten and more."
          />
        </div>
      </div>
    </div>
  );
};

export default Profitrewards;
