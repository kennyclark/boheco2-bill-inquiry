import PropTypes from "prop-types";

const InputText = ({ id, label, placeholder, register, required }) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        className="text-base text-zinc-700 font-semibold uppercase"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="border border-amber-400 rounded-lg px-4 py-3 shadow-sm"
        id={id}
        placeholder={placeholder}
        type="text"
        name={id}
        {...register(id, { required })}
      />
    </div>
  );
};

InputText.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  register: PropTypes.func,
  required: PropTypes.bool,
};

export default InputText;
