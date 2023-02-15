import React from 'react'
import Button from './Button'
import Input from './Input'

function Login() {
  return (
    <div className="pt-12 md:w-[450px] w-full">
      <p className="text-start">Lorem Ipsum is simply dummyh text of the printing and typesetting industry.</p>

      <form>
        <div className="flex flex-col gap-2 text-start mt-8">
          <label htmlFor="username" className="text-sm font-bold p-0">Username:</label>
          <Input id="username" type="text" placeholder="Enter your username" />          
        </div>

        <div className="flex flex-col gap-2 text-start mt-8">
          <label htmlFor="password" className="text-sm font-bold">Password:</label>
          <Input id="password" type="password" placeholder="Enter your password" />
        </div>

        <div className="flex justify-between mt-5 text-sm mt-">
          <div className="flex gap-2 items-center">
            <input type="checkbox" name="remember" id="remember" className="w-4 h-4" />
            <label htmlFor="remember">Remember me</label>
          </div>

          <a href="#">Forgot password?</a>
        </div>

        <Button classes="w-[232px] h-[49px] ml-auto mt-14">Login</Button>
      </form>
    </div>
  )
}

export default Login