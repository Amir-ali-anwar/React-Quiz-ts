  import React,{FC} from 'react'
  
  interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
    disabled?:boolean,
  }
  
  const Button:FC<ButtonProps> = ({disabled,className,children}) => {
    return (
     <button className={className} disabled={disabled}>{children}</button>
    )
  }

  export default Button;