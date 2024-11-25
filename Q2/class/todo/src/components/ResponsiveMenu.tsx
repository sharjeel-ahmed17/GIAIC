import { BookX, Menu } from 'lucide-react'
import React from 'react'

const ResponsiveMenu = () => {
  const [showMenu, setShowMenu] = React.useState(true)
  return (
    <div>
      {
        showMenu ? <div className='w-[500px] absolute h-screen bg-yellow-500'></div> : ""
      }
      
      <button className='absolute right-3' onClick={()=>setShowMenu(!showMenu)}>{showMenu ? <BookX /> : <Menu />}</button>
    </div>
  )
}

export default ResponsiveMenu