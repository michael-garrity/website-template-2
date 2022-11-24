import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-montserrat font-medium text-[18px] text-secondary bg-black opacity-80 ${styles} hover:opacity-100`}>
    Get Started
  </button>
);

export default Button;