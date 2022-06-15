import React, { useState, useRef, useEffect } from "react";
import watchImg from "../../assets/prodImg/AppleWatch.png";
import { FaHeart, FaRegHeart, FaChevronDown } from "react-icons/fa";
import LinkSite from "./LinkSite";
const ProdItem = ({ title, content }) => {
  const [itemHeight, setItemHeight] = useState(0);
  const refItem = useRef(null);

  useEffect(() => {
    setItemHeight(refItem.current.clientHeight);
  });

  const [isOpened, setOpened] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentElement = useRef(null);

  var data = {
    prodImg: watchImg,
    prodName: "Apple Watch Series 7-41mm-Starlight",
    prodProp: "starlight only",
    prodPrice: "316.00",
    prodRetailer: "Amazon, Best Buy",
    retailerCount: "3",
    retailPrice: "3.95%",
    retailType: "Below Retail",
    prodState: "1",
    prodFavorite: "1",
  };

  var itemLink = [
    {
      siteName: "Amazon",
      address: "#B09HF6H3X3",
      prodName: "Apple Watch Series 7 - 41mm - Starlight - GPS - MKMY3LL/A",
    },
    {
      siteName: "Walmart",
      address: "#461941365",
      prodName: "Apple Watch Series 7 - 41mm - Starlight - GPS - MKMY3LL/A",
    },
    {
      siteName: "Target",
      address: "#77640162",
      prodName: "Apple Watch Series 7 - 41mm - Starlight - GPS - MKMY3LL/A",
    },
    {
      siteName: "Costco",
      address: "#1601131",
      prodName: "Apple Watch Series 7 - 41mm - Starlight - GPS - MKMY3LL/A",
    },
    {
      siteName: "Best Buy",
      address: "#6215933",
      prodName: "Apple Watch Series 7 - 41mm - Starlight - GPS - MKMY3LL/A",
    },
  ];

  const HandleOpening = () => {
    setOpened(!isOpened);
    setHeight(
      isOpened === false ? `${contentElement.current.scrollHeight}px` : "0px"
    );
  };
  return (
    <div className="mt-[10px] rounded-lg bg-specwhite w-full ">
      <div className="bg-specwhite drop-shadow-threeDboxmiddle rounded-[8px] mb-[20px] hover:drop-shadow-threeDbox transition ease-linear ">
        <div
          ref={refItem}
          className="pl-[0px] pb-[20px] text-lightblue rounded-[8px] border-b-[1px] lg:h-[135px] h-[255px]"
        >
          <div className="flex justify-between">
            <div className="h-full w-full p-[15px] grid lg:grid-cols-8 grid-cols-2 lg:gap-[0px] gap-[10px]">
              <div className="cursor-pointer lg:col-span-3 col-span-2 order-1">
                <div className="flex">
                  <div className="prodImg mr-[10px] ">
                    <div className="text-white rounded px-[5px] text-[10px] mb-[10px] bg-blue-400 flex justify-center">
                      New
                    </div>
                    <img
                      className="h-[50px] min-w-[50px]"
                      src={data.prodImg}
                      alt=""
                    />
                    <div
                      className={`itemState text-white rounded px-[5px] text-[10px] mt-[10px] ${
                        data.prodState === "0"
                          ? "bg-blue-400"
                          : data.prodState === "1"
                          ? "bg-red-400"
                          : ""
                      }`}
                    >
                      {data.prodState === "0"
                        ? "ON SALE"
                        : data.prodState === "1"
                        ? "CLOSED"
                        : ""}
                    </div>
                  </div>
                  <div className="nameAndProp ml-[10px] flex items-center">
                    <div>
                      <div className="prodName text-[15px]">
                        {data.prodName}
                      </div>
                      <div className="prodProp text-[12px] mt-[10px]">
                        {data.prodProp}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="prodPrice text-[20px] lg:pr-[30px] flex justify-end items-center lg:order-2 order-3 ">
                <p>$</p>
                <div>{data.prodPrice}</div>
              </div>
              <div className="prodRetailer text-[14px] items-center flex justify-start lg:justify-center order-2 lg:order-3 ">
                <div>
                  <div>{data.prodRetailer}</div>
                  <div>
                    <p>+{data.retailerCount} more</p>
                  </div>
                </div>
              </div>
              <div className="prodRetailType flex  justify-start lg:justify-center  items-center text-[12px] order-4">
                <div className="bg-yellow-200 text-center rounded p-[5px] flex justify-center items-center">
                  {data.retailPrice}
                  {data.retailType}
                </div>
              </div>

              <div
                className="prodDetail cursor-pointer text-[13px] flex justify-end lg:justify-center  items-center order-5"
                onClick={HandleOpening}
              >
                <p className="text-center">Items Links</p>
                <div
                  className={`ml-[5px] arrow  transform inline-flex ${
                    isOpened ? "rotate-180" : ""
                  }`}
                >
                  <FaChevronDown className=" text-center text-[15px]" />
                </div>
              </div>
              <div className="submitTracking text-[14px] flex justify-center col-span-2 lg:col-span-1 items-center order-6 lg:ml-[0px] ml-[-15px] lg:mr-[0px] mr-[-55px] ">
                <div className="text-center cursor-pointer lg:bg-specwhite bg-lightgreen lg:text-darkgreen border-[1px] border-darkgreen py-[10px] px-[5px] lg:rounded-[6px] rounded-b-[6px] text-white hover:text-white hover:bg-darkgreen lg:w-auto w-full flex justify-center ">
                  Submit Tracking
                </div>
              </div>
              <div className="order-7"></div>
              <div className="order-8"></div>
            </div>
            <div className="mr-[25px] cursor-pointer prodHeart flex justify-center mt-[20px] lg:mt-[0px] lg:items-center text-red-500 hover:text-red-600">
              {data.prodFavorite === "1" ? (
                <FaHeart className="text-[15px]" />
              ) : (
                <FaRegHeart className="text-[15px]" />
              )}
            </div>
          </div>
        </div>

        <div
          ref={contentElement}
          style={{ height: height }}
          className="overflow-hidden transition-all duration-200 rounded-b-[8px] px-[20px] "
        >
          <div className="text-[14px] w-full h-full px-[18px] py-[30px] ">
            <div className="m-10px grid grid-cols-[auto_170px] h-[200px]">
              <div className="linkSite grid grid-cols-3">
                {itemLink.map((item) => (
                  <LinkSite
                    linkSite={item["siteName"]}
                    linkAddress={item["address"]}
                    prodName={item["prodName"]}
                  />
                ))}
              </div>
              <div className="dealDetailBtn text-[12px] flex justify-center items-center ">
                <div className="cursor-pointer text-darkgreen border-[1px] border-darkblue px-[15px] py-[5px] rounded-md hover:text-white hover:bg-darkgreen">
                  Deal Details
                </div>
              </div>
              <div className="mx-[30px] my-[20px] h-[32px] w-[110px] rounded-lg "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdItem;
