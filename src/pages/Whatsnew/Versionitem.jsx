import { AiOutlineStar } from "react-icons/ai";

const Versionitem = () => {
  return (
    <div className="w-full p-[20px] bg-white border-[2px] border-opacity-70 border-gray-200 rounded-[8px] relative my-[20px]">
      <h1 className="text-darkblue text-[16px] font-medium mb-[15px]">
        NEW EMAIL ADDRESS FOR SUPPORT AND NOTIFICATIONS
      </h1>
      <div className="w-full mb-[15px] text-[12px] text-center flex">
        <div className="p-[5px] bg-[#3da0fd]/20 rounded-[6px] text-[#3da0fd] mr-[10px]">
          Update
        </div>
        <div className="p-[5px] bg-[#3da0fd]/20 rounded-[6px] text-[#3da0fd] mr-[10px]">
          New feature
        </div>
        <div className="p-[5px] bg-[#3da0fd]/20 rounded-[6px] text-[#3da0fd] mr-[10px]">
          Enhancements
        </div>
      </div>
      <p className="text-lightblue text-[14px] mb-[15px]">
        We've made a change to our support email address! Instead of
        deals@buyformeretail.com, we are using support@buyformeretail.com for
        all support-related questions.
        <br />
        <br /> New deal updates and other essential information will be sent
        from donotreply@buyformeretail.com.
        <br />
        <br />
        If you have any questions about this change or need any assistance,
        please don't hesitate to reach out at our new email!
      </p>
      <div className="w-full flex text-[12px] text-[#6e84a3]">
        <p className="italic mr-[30px]">5 minutes ago</p>
        <button className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 13 13"
            fill="none"
          >
            <path
              d="M9 4C9.82843 4 10.5 3.32843 10.5 2.5C10.5 1.67157 9.82843 1 9 1C8.17157 1 7.5 1.67157 7.5 2.5C7.5 3.32843 8.17157 4 9 4Z"
              stroke="#6E84A3"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M3 7.5C3.82843 7.5 4.5 6.82843 4.5 6C4.5 5.17157 3.82843 4.5 3 4.5C2.17157 4.5 1.5 5.17157 1.5 6C1.5 6.82843 2.17157 7.5 3 7.5Z"
              stroke="#6E84A3"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M9 11C9.82843 11 10.5 10.3284 10.5 9.5C10.5 8.67157 9.82843 8 9 8C8.17157 8 7.5 8.67157 7.5 9.5C7.5 10.3284 8.17157 11 9 11Z"
              stroke="#6E84A3"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M4.29492 6.75391L7.70992 8.74391"
              stroke="#6E84A3"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M7.70492 3.25391L4.29492 5.24391"
              stroke="#6E84A3"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <p className="ml-[5px] pt-[2px]">Share</p>
        </button>
      </div>
      <div className="absolute right-[20px] top-[20px] text-[12px] text-lightblue">
        <div className="flex items-center justify-center mb-[3px]">
          <p className="mr-[2px] underline">4.5</p>

          <AiOutlineStar className="w-[25px] h-[25px] text-yellow-300" />
        </div>
        <p>4 ratings</p>
      </div>
    </div>
  );
};

export default Versionitem;
