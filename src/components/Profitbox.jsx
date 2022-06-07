const Profitbox = ({ pic, heading, txt }) => {
  return (
    <div className="bg-[#ecf0f3] drop-shadow-threeDbox hover:drop-shadow-none transition ease-linear w-[350px] mb-[20px] px-[20px] py-[20px] rounded-[6px] grid justify-items-center content-start">
      <img src={pic} className="mb-[18px]" alt="" />
      <div>
        <h3 className="font-bold text-[16px] mb-[5px] text-center">
          {heading}
        </h3>
        <p className="text-[14px] text-center">{txt}</p>
      </div>
    </div>
  );
};

export default Profitbox;
