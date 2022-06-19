import Payment from "./Payment";
import Tracking from "./Tracking";
import TopDeals from "./TopDeals";
const Dashboard = (userName) => {
  var data = {
    userName: "Arata Suzuki",
  };
  return (
    <div className="w-full min-h-screen bg-specwhite p-[20px]">
      <div className="flex w-full items-center">
        <p>Welcome,</p>
        <p className="ml-[5px] text-[22px] text-green-500">{data.userName}</p>
      </div>
      <div className="mt-[10px] h-full grid md:grid-cols-2 gap-x-[30px] gap-y-0">
        <Payment />
        <Tracking />
      </div>
      <div className="mt-[20px] w-full text-gray-500">
        <TopDeals />
      </div>
    </div>
  );
};

export default Dashboard;
