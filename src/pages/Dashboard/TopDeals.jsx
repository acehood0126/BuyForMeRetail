import { Link } from "react-router-dom";
import BtnRefresh from "./BtnRefresh";
import ProdItem from "./ProdItem";
import SortBtn from "./SortBtn";

const TopDeals = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <BtnRefresh title="Top Deals" linkUrl="/" />
        <Link to="/deals" className="hover:text-blue-700 text-blue-400">
          <h2>View all Deals</h2>
        </Link>
      </div>
      <div className="w-full ">
        <div className="mt-[10px] bg-specwhite drop-shadow-threeDboxmiddle rounded-[8px] mb-[20px] ">
          <div className="text-lightblue border-b-[1px] ">
            <div className="flex justify-between">
              <div className="rounded-lg w-full h-[50px] ">
                <div className="h-full w-full p-[15px] grid grid-cols-8">
                  <div className="flex col-span-3 ">
                    <div className="ml-[10px] flex items-center mr-[50px]">
                      <SortBtn />
                    </div>
                    <SortBtn className="ml-[50px] " title="ITEM" state="0" />
                  </div>
                  <div className="flex justify-center">
                    <SortBtn className="" title="WHAT WE PAY"  state="1"/>
                  </div>
                  <div className="flex justify-center" >
                    <SortBtn title="RETAILERS" state="2"/>
                  </div>
                  <div className="flex justify-center">
                    <SortBtn title="RETAIL TYPE" />
                  </div>
                  <p></p>
                  <p></p>
                </div>
              </div>
              <div className="w-60px flex items-center mr-[25px]">
                <SortBtn />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProdItem title="Apple Watch" content="this is apple watch" />
      <ProdItem title="Apple Watch" content="this is apple watch" />
    </div>
  );
};

export default TopDeals;
