import PropTypes from "prop-types";

const InputText = ({ id, label, placeholder }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-base font-medium" htmlFor={id}>
        {label}
      </label>
      <input
        className="border rounded-lg px-4 py-3 shadow-sm"
        id={id}
        placeholder={placeholder}
        type="text"
        name={id}
      />
    </div>
  );
};

InputText.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default InputText;
