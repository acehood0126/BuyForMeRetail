import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

const FilterSelect = () => {
  const options = [
    { label: "Accessories", value: "Accessories" },
    { label: "Cameras", value: "Cameras" },
    { label: "Headphones", value: "Headphones" },
    { label: "Laptops", value: "Laptops" },
    { label: "Smart Home", value: "Smart Home" },
    { label: "Tablets", value: "Tablets" },
    { label: "Video Games", value: "Video Games" },
    { label: "Watch", value: "Watch" },
  ];
  const [selected, setSelected] = useState([]);
  return (
    <div className=" text-[14px] rounded-lg mr-[10px]">
      
      <MultiSelect
        className=""
        showArrow
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Category"
      />
      <div className="flex mt-[10px]">
        {selected.map((item) => (
          <p>{item.value}, </p>
        ))}
      </div>
    </div>
  );
};

export default FilterSelect;
