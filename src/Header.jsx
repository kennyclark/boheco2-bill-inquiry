import { Link } from "@tanstack/react-router";
import logo from "./assets/images/boheco2.webp";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-500 from-0% via-yellow-300 via-50% to-yellow-500 to-100%">
      <div className="flex place-content-center">
        <div className="flex place-content-between px-8 py-5 w-lg">
          <a href="https://www.boheco2.com.ph/" target="_blank" rel="noopener noreferrer">
            <img src={logo} alt="BOHECO 2 Logo" className="w-16 h-16" />
          </a>
          <Link to="/">
            <div className="flex flex-col items-end">
              <span className="text-red-600 font-black text-3xl">BOHECO II</span>
              <span className="text-zinc-800 font-bold text-base">
                ONLINE BILL INQUIRY
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
