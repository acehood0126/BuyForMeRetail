const Joinus = () => {
  return (
    <div className="w-full h-[70px] mt-[50px] bg-[#ecf0f3]">
      <div className="h-full mx-[220px] px-[15px] bg-[#ecf0f3] rounded-full drop-shadow-threeDbox">
        <div className="h-full py-[15px] flex justify-center items-center">
          <p className="text-[14px] text-[#3b516c] pr-[25px]">
            Join our email list to stay up to date on our latest deals
          </p>
          <input
            className="w-[254px] text-[14px] h-full px-[12px] py-[6px] border-[1px] border-lightblue border-opacity-20 rounded-l-[4px] focus:outline-none focus:drop-shadow-blue transition ease-out focus:ease-in text-lightblue"
            placeholder="Enter Email"
          />
          <button className="transition bg-[#3bbd96] hover:bg-[#2aac8a] ease-out hover:ease-in w-[70px] h-full text-white text-[14px] rounded-r-[5px]">
            Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default Joinus;
