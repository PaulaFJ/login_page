import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode,
  classes: String,
  disabled?: boolean,
  onClick?: () => void,
}

function Button({onClick, children, classes, disabled}: ButtonProps) {
  return (
    <div 
      className={`
        rounded-full flex text-base text-brand-brown-100 justify-center items-center px-4 ${classes}
        ${ disabled ? 'bg-brand-white-200 text-brand-brown-100' : 'bg-brand-brown-100 text-white'} 
      `}>
      {children}  
    </div>
  )
}

export default Button