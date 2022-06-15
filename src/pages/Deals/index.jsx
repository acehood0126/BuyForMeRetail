import ProdItem from "../Dashboard/ProdItem";
import SortBtn from "../Dashboard/SortBtn";
// import DealsTable from "./DealsTable";
import FilterBtn from "./FilterBtn";
import FilterSelect from "./FilterSelect";
import RoundBtn from "./RoundBtn";

const Deals = (userName) => {
  var data = {
    userName: "Arata Suzuki",
  };
  var filterConditions = [
    {
      count: 13,
      condition: "All",
      state: 1,
    },
    {
      count: 1,
      condition: "New",
      state: 0,
    },
    {
      count: 3,
      condition: "Favorite",
      state: 0,
    },
    {
      count: 10,
      condition: "Not Favorited",
      state: 0,
    },
    {
      count: 5,
      condition: "Still On Sale",
      state: 0,
    },
    {
      count: 6,
      condition: "Closed",
      state: 0,
    },
    {
      count: 7,
      condition: "Deal Updates",
      state: 0,
    },
  ];
  return (
    <div className="w-full min-h-screen bg-gray-200 p-[20px] ">
      <div className="border-2 ">
        <div className="flex w-full items-center justify-between text-[14px]">
          <p>Live Deals</p>
          <p className="ml-[5px] text-[22px] text-green-500">{data.userName}</p>
        </div>
        <div className="flex mt-[10px]">
          {filterConditions.map((item) => (
            <FilterBtn
              count={item["count"]}
              condition={item["condition"]}
              state={item["state"]}
            />
          ))}
        </div>
        <div className="mt-[20px] grid grid-cols-7">
          <FilterSelect />
          <FilterSelect />
          <FilterSelect />
          <FilterSelect />
          <FilterSelect />
          <div className="col-span-2 flex justify-end">
            <RoundBtn title="Filter" linkUrl="/" state={0} />
            <RoundBtn title="Clear Filter" linkUrl="/" state={1} />
          </div>
        </div>
        <div className=""></div>
      </div>
      <div className="w-full text-[11px] ">
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
                    <SortBtn className="" title="WHAT WE PAY" state="1" />
                  </div>
                  <div className="flex justify-center">
                    <SortBtn title="RETAILERS" state="2" />
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
      <ProdItem title="Apple Watch" content="this is apple watch" />
    </div>
  );
};

export default Deals;
