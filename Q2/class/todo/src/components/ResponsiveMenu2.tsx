import React from 'react'
import './res.css'
const ResponsiveMenu2 = () => {
    const [menuOpen, setMenuOpen] = React.useState(false)
  return (
    <div>
      <button onClick={()=>setMenuOpen(!menuOpen )}>sow</button>
        <div className={`menu ${menuOpen ? 'active' : ''}`}>
            <ul>
                <li>home</li>
                <li>home</li>
                <li>home</li>
                <li>home</li>
            </ul>
        </div>
    </div>
  )
}

export default ResponsiveMenu2