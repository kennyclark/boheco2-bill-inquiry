import PropTypes from "prop-types";

const Button = ({ children }) => {
  return (
    <button className="bg-b2-orange text-white px-6 py-3 rounded-lg font-medium text-2xl">
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
