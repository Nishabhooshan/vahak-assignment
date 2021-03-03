import React from "react";

const TextField = props => {
  const { placeHolder, name, type, className, value, onInputChange} = props;

  return (
    <input
      placeholder={placeHolder}
      name={name}
      type={type}
      className={className}
      value={value}
      onChange={e => onInputChange(e)}
    />
  );
};

export default TextField;
