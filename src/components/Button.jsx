import PropTypes from "prop-types";

const Button = ({ children, ...props }) => {
  return (
    <button {...props} className="bg-b2-orange text-white px-6 py-3 rounded-lg font-medium text-2xl">
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(["submit", "button", "reset"]),
  disabled: PropTypes.bool,
};

export default Button;
