import React from 'react'
import './Input.scss'

function Input ({
  className,
  title,
  type,
  placeHolder
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
      />
    </label>
  )
}

export { Input }
