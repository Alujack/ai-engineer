import React from "react";

export default function ReusableButton({ variant, size, children, onClick }) {
  // កំណត់ Base Style
  const buttonStyle = {
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "all 0.2s ease",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  };

  // កំណត់ពណ៌តាម Variant
  const variants = {
    primary: { backgroundColor: "#3498db", color: "white" },
    danger: { backgroundColor: "#e74c3c", color: "white" },
    success: { backgroundColor: "#2ecc71", color: "white" },
  };

  // កំណត់ទំហំតាម Size
  const sizes = {
    small: { padding: "6px 12px", fontSize: "12px" },
    large: { padding: "12px 24px", fontSize: "16px" },
  };

  const combinedStyle = {
    ...buttonStyle,
    ...(variants[variant] || variants.primary),
    ...(sizes[size] || sizes.small),
  };

  return (
    <button style={combinedStyle} onClick={onClick}>
      {children}
    </button>
  );
}

// កំណត់ Default Props
ReusableButton.defaultProps = {
  variant: "primary",
  size: "small",
};
