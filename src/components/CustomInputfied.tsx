import React from "react";
import PropTypes from "prop-types";
import { FieldProps } from "formik";

const CustomInput = ({
  type,
  placeholder,
  field,
  meta,
  disabled,
  ariaLabel,
  inputStyle,
  wrapperStyle,
}: FieldProps & {
  type: string;
  placeholder: string;
  disabled?: boolean;
  ariaLabel?: string;
  inputStyle?: string;
  wrapperStyle?: string;
}) => {
  const { error, touched } = meta;

  return (
    <div
      className={`p-[3px] rounded-full bg-gradient-to-r from-[#9933CC] to-[#1140A4] w-full ${wrapperStyle}`}
    >
      <input
        {...field}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full py-3 px-6 rounded-full bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          ${error && touched ? "ring-red-500" : ""}
          ${inputStyle}`}
        aria-label={ariaLabel || placeholder}
      />
    </div>
  );
};

CustomInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
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
