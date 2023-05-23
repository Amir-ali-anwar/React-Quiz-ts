import React from "react";

type Props = {
  key: React.Key;
  type: 'submit' | 'reset';
  className: string;
  disabled:boolean,
  handleChange:(e:React.MouseEvent<HTMLButtonElement>) => void
};

const Button = ({key,type,className,handleChange,disabled}: Props) => {
  return (
    <button
      key={key}
      type={type}
      className={className}
      onClick={handleChange}
      disabled={disabled}
    ></button>
  );
};

export default Button;
