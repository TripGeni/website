import React from "react";
import PropTypes from "prop-types";
import { MoonLoader } from "react-spinners";

const CustomButton = ({
  label,
  disabled,
  ariaLabel,
  buttonStyle,
  labelStyle,
  buttonColor,
  onClick,
  loading,
}: {
  label: string;
  disabled: boolean;
  ariaLabel: string;
  buttonStyle?: string;
  labelStyle?: string;
  buttonColor?: string;
  onClick?: () => void;
  loading?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`relative rounded-full p-1 bg-gradient-to-b from-[#9933CC] to-[#1140A4] cursor-pointer 
        overflow-hidden shadow-custom-purple ${
          disabled || loading ? "opacity-50 cursor-not-allowed" : ""
        } ${buttonStyle}`}
      aria-label={ariaLabel || label}
    >
      <div
        className={`px-6 py-3 rounded-[calc(3rem-1px)] relative z-10 flex justify-center items-center transition-colors ${
          loading ? "bg-white" : "bg-gray-950"
        } ${buttonColor}`}
      >
        <span className={`${labelStyle} ${loading ? "opacity-0" : ""}`}>
          {label}
        </span>
        {loading && (
          <div className="absolute inset-0 flex justify-center items-center">
            <MoonLoader size={16} color="#6B7280" />{" "}
          </div>
        )}
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
  labelStyle: "text-gray-950 !important",
  buttonColor: "",
};

export default CustomButton;
