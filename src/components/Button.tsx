import React from "react";

type ButtonProps = {
  key?: React.Key;
  type?: 'submit' | 'reset';
  className: string;
  disabled?:boolean,
  children:React.ReactNode,
  handleChange:(e:React.MouseEvent<HTMLButtonElement>) => void
};

const Button:React.FC<ButtonProps> = ({key,type='submit',className,handleChange,disabled,children}) => {
  return (
    <button
      key={key}
      type={type}
      className={className}
      onClick={handleChange}
      disabled={disabled}
    >{children}</button>
  );
};

export default Button;
