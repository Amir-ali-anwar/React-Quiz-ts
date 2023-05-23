import React, { HTMLInputTypeAttribute } from 'react'

type Props = {
    type?:HTMLInputTypeAttribute,
    className?:string,
    labelText:string ,
    name?:string,
    labelClass?:string
    value?:string | number,
    handleChange:(e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormRow = ({
    type='text',
    className,
    handleChange,
    labelText,
    labelClass,
    value,
    name}: Props) => {
  return (
    <div className="form-row">
    <label htmlFor={labelText} className={labelClass}>
      {labelText}
    </label>
    <input
      type={type}
      className={className}
      onChange={handleChange}
      value={value}
      name={name}
    />
  </div>
  )
}
export default FormRow