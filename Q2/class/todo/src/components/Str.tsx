
import React, { useState } from 'react'

const Str = () => {
    const [name , setName ] = useState('bari');
  return (
    <div>
        <p>{name}</p>
        <br />
        <button onClick={()=>setName('sharjeel')}>update name</button>

    </div>
  )
}

export default Str