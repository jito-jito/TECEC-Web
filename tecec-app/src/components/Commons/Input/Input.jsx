import React from 'react'
import './Input.scss'

function Input ({
  className,
  title,
  type,
  placeHolder,
  onChange,
  id,
  value
}) {
  return (
    <label
      className={`${className} input`}
      htmlFor=''
    >
      <h4>{title}</h4>
      <input
        type={type}
        placeholder={placeHolder}
        onChange={onChange}
        value={value}
        id={id}
      />
    </label>
  )
}

export { Input }
