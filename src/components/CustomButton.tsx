import React from "react";
import PropTypes from "prop-types";

const CustomButton = ({
  label,
  disabled,
  ariaLabel,
  buttonStyle,
  labelStyle,
  buttonColor,
}: {
  label: string;
  disabled: boolean;
  ariaLabel: string;
  buttonStyle?: string;
  labelStyle?: string;
  buttonColor?: string;
}) => {
  const handleButtonClick = () => {
  };

  return (
    <button
      onClick={handleButtonClick}
      disabled={disabled}
      className={`relative rounded-full p-1 bg-gradient-to-b from-[#9933CC] to-[#1140A4] cursor-pointer 
        overflow-hidden shadow-custom-purple ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${buttonStyle}`}
      aria-label={ariaLabel || label}
    >
      <div className={`bg-gray-950 px-6 py-3 rounded-[calc(3rem-1px)] relative z-10 flex justify-center items-center ${buttonColor}`}>
      <span className={`text-white ${labelStyle}`}>{label}</span>
      </div>
    </button>
  );
};

CustomButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  ariaLabel: PropTypes.string,
  buttonStyle: PropTypes.string,
  labelStyle: PropTypes.string,
  buttonColor: PropTypes.string,
};

CustomButton.defaultProps = {
  loading: false,
  disabled: false,
  ariaLabel: "",
  buttonStyle: "",
  labelStyle: "", // Allow passing custom label styles (like "font-bold")
  buttonColor: "",
};

export default CustomButton;
