/* eslint-disable jsx-a11y/anchor-is-valid */
const Footer = () => {
  return (
    <div className="w-full px-[30px] h-[53px] flex justify-between items-center bg-darkblue text-white text-[14px]">
      <p>Copyright © 2022 BuyForMeRetail. All Rights Reserved.</p>
      <div>
        <a href="#" className="mr-[30px] hover:underline">
          Developer
        </a>
        <a href="#" className="mr-[30px] hover:underline">
          Privacy Policy
        </a>
        <a href="#" className="mr-[20px] hover:underline">
          Terms of Use
        </a>
      </div>
    </div>
  );
};

export default Footer;
