import PropTypes from "prop-types";

const Button = ({ children, ...props }) => {
  return (
    <button {...props} className="bg-amber-400 text-zinc-900 px-6 py-3 rounded-lg font-semibold text-2xl">
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
