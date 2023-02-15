import { useState} from 'react'
import Button from './Button'
import Login from './Login';
import Register from './Register';

function PageTabs() {
  const [isActive, setIsActive] = useState(0)

  return (
    <>
      <div className="flex items-center  px-1 py-2 h-12 rounded-full bg-brand-white-200 mt-6">
        
        <a 
          onClick={() => setIsActive(0)} 
          className={isActive === 0 ? "hover:cursor-default" : "hover:cursor-pointer"}>
          <Button classes="w-32 h-10" disabled={isActive === 0 ? false : true}>
            Login
          </Button>
        </a>

        <a 
          onClick={() => setIsActive(1)} 
          className={isActive !== 0 ? "hover:cursor-default" : "hover:cursor-pointer"}>
          <Button classes="w-32 h-10" disabled={isActive !== 0 ? false : true} >
            Register
          </Button>
        </a>
      </div>
        

      <div className="flex justify-center items-center w-full">
        { isActive === 0 ? <Login /> : <Register /> }
      </div>
    </>
  )
}

export default PageTabs