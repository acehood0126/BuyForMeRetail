const Compoundinput = ({ icon, placeholder }) => {
  return (
    <div className="w-full h-[45px] relative">
      <span className="absolute inset-y-0 left-0 flex items-center pl-[10px] z-10">
        <img src={icon} className="w-[15px] h-[15px]" alt="" />
      </span>
      <input
        className="w-full border-[1px] h-[45px] px-[30px] rounded-[4px] border-lightblue border-opacity-20 focus:outline-none focus:drop-shadow-blue transition ease-out focus:ease-in text-lightblue"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Compoundinput;
