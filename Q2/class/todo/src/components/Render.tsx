import React, { useState } from 'react'

const Render = () => {
    const [status , setStatus] = useState(false);
  return (
    <div>
        <div>
            <button onClick={()=>setStatus(!status)}>{status ? 'hide' : 'show'}</button>
            {
                status ? <><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, ipsum!</p></> : ""
            }
        </div>
    </div>
  )
}

export default Render