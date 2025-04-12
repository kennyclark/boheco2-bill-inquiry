import { Link } from "@tanstack/react-router";

const Footer = () => {
  return (
    <div className="flex place-content-center">
      <div className="flex flex-col gap-1 text-center text-xs text-gray-800 py-2 w-md">
        <span>BOHOL II ELECTRIC COOPERATIVE, INC.</span>
        <div>
          <span className="">DEVELOPED BY: </span>
          <span className="font-bold">
            <a href="https://knydev.uk" target="_blank" rel="noopener noreferrer">KNYDEV</a>
          </span>
        </div>
        <hr className="border-gray-300/80 my-1" />
        <div className="flex flex-row gap-4 place-content-center text-sm font-semibold mb-8 text-amber-600">
          <Link to="/">Home</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-service">Terms of Service</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
