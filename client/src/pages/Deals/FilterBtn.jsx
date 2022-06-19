
const FilterBtn = ({count, condition, state})=>{
return (
  <div className={`text-[14px] rounded-full mx-[3px] flex justify-center items-center px-[10px] py-[2px] border-[1px] border-darkblue
  ${state===1?"bg-darkblue text-white": "bg-specwhite text-darkblue"}`}>
    <p className="mr-[5px]">{count}</p>  
    <p className="">{condition}</p>  
  </div>
);
};

export default FilterBtn;