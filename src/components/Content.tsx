import React from 'react'
import PageTabs from './Tabs'

function Content() {
  return (
    <div className="flex-1">
      <p className="font-bold text-start md:text-end">Your Brand</p>

      <div className="flex flex-col text-center justify-center items-center mt-16">
        <p>Welcome to login page</p>

    	  <PageTabs />
      </div>
    </div>
  )
}

export default Content