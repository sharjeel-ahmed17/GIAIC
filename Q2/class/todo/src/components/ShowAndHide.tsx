import { Eye, EyeClosed } from 'lucide-react';
import React, { useState } from 'react'

const ShowAndHide = () => {
    const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
        <input type={showPassword ? "text" : 'password'} className='border border-gray-700'/>
        <button onClick={()=>setShowPassword(!showPassword)}>{showPassword ? <EyeClosed /> : <Eye />}</button>
    </div>
  )
}

export default ShowAndHide