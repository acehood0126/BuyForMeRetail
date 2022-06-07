import { Link } from "react-router-dom";
import macbook from "../../assets/img/macbook.png";

const Whatsinside = () => {
  return (
    <div className="w-full px-[60px] py-[45px] grid grid-cols-1 justify-items-center">
      <div>
        <img src={macbook} alt="" />
      </div>
      <Link to="/register">
        <button className="transition bg-lightgreen hover:bg-darkgreen ease-out hover:ease-in rounded-[6px] text-white text-[14px] font-bold px-[12px] py-[6px] w-[170px] h-[40px]">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default Whatsinside;
