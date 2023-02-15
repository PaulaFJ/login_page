import React from 'react'

interface InputProps {
  placeholder: string,
  id: string,
  type: string
}

function Input({placeholder, id, type}: InputProps) {
  return (
    <input 
      id={id}
      type={type}
      className="rounded-full border-1 border-brand-brown-100 text-brand-brown-100 text-sm font-normal w-[450px] placeholder:text-brand-brown-100"
      placeholder={placeholder}
    />
  )
}

export default Input