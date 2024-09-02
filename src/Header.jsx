import logo from "./assets/images/boheco2.png";

const Header = () => {
  return (
    <div className="bg-b2-gradient">
      <div className="flex justify-between px-8 py-5">
        <img src={logo} alt="BOHECO 2 Logo" className="w-auto h-16" />
        <div className="flex flex-col items-end">
          <span className="text-red-600 font-black text-3xl">BOHECO II</span>
          <span className="text-gray-800 font-bold italic text-base">
            ONLINE BILL INQUIRY
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
