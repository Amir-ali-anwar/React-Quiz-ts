  import React,{FC} from 'react'
  
  interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
    disabled?:boolean,
    handleChange?:(e:React.MouseEvent<HTMLButtonElement>) => void

  }
  
  const Button:FC<ButtonProps> = ({disabled,className,children,handleChange}) => {
    return (
     <button className={className} disabled={disabled} onClick={handleChange}>{children}</button>
    )
  }

  export default Button;