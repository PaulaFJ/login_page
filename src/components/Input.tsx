import React from 'react'

interface InputProps {
  placehold: string
}

function Input({placehold}: InputProps) {
  return (
    <input 
      type="text"
      className="rounded-full mt-8 border-1 border-brand-brown-100 text-brand-gray-100 text-sm font-light w-[435px]"
      placeholder={placehold}
    />
  )
}

export default Input