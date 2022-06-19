import BtnRefresh from "./BtnRefresh";
import DataWithLock from "./DataWithLock";

const Tracking = () => {
  return (
    <div className="text-gray-500 h-[170px]">
      <BtnRefresh title="Your Tracking" linkUrl="/" />
      <div className="mt-[10px] rounded-lg h-[120px] bg-white p-[20px]">
        <div className="grid grid-cols-[auto_auto_120px]">
          <div>
            <DataWithLock date="RECEIVED TODAY" status="2" />
            {/* <DataWithLock date="WED 06/10" status="0" /> */}
          </div>
          <div>
            <DataWithLock date="PENDING TODAY" status="2" />
          </div>
          <div className="text-[12px]">
            <select className="w-[120px] rounded-lg h-[30px] pt-[2px]  text-[12px] border-gray-200">
              <option value="meat">LIFETIME</option>
              <option value="fruit">THIS WEEK</option>
              <option value="vegetable">THIS MONTH</option>
              <option value="meat">THIS YEAR</option>
              <option value="meat">CUSTOM</option>
            </select>
            <p className="mt-[5px] text-[18px] leading-[18px] flex">--</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
