import React from "react";
import PropTypes from "prop-types";

const CustomInput = ({
  type,
  placeholder,
  value,
  onChange,
  disabled,
  ariaLabel,
  inputStyle,
  wrapperStyle,
}: {
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  ariaLabel?: string;
  inputStyle?: string;
  wrapperStyle?: string;
}) => {
  return (
    <div
      className={`p-[3px] rounded-full bg-gradient-to-r from-[#9933CC] to-[#1140A4] w-full ${wrapperStyle}`}
    >
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full py-3 px-6 rounded-full bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          ${inputStyle}`}
        aria-label={ariaLabel || placeholder}
      />
    </div>
  );
};

CustomInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  ariaLabel: PropTypes.string,
  inputStyle: PropTypes.string,
  wrapperStyle: PropTypes.string,
};

CustomInput.defaultProps = {
  disabled: false,
  ariaLabel: "",
  inputStyle: "",
  wrapperStyle: "",
};

export default CustomInput;
