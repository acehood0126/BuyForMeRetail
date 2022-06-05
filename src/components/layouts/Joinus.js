const Joinus = () => {
  return (
    <div className="w-full h-[70px] border-[1px] border-[#3bbd96] border-opacity-30 bg-[#3bbd96] bg-opacity-10">
      <div className="h-full mx-[220px] px-[15px]">
        <div className="h-full py-[15px] flex justify-center items-center">
          <p className="text-[14px] text-[#3b516c] pr-[25px]">
            Join our email list to stay up to date on our latest deals
          </p>
          <input
            type="email"
            className="w-[254px] text-[14px] h-full px-[12px] py-[6px] border-[1px] rounded-l-[4px] focus:outline-none focus:border-[1px] focus:drop-shadow-[0px_0px_2px_rgb(0,123,255)] transition ease-out focus:ease-in text-lightblue"
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
