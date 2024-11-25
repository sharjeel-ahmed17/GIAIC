'use client';

import { useState } from "react";

const Number = () => {

    const [count , setCount] = useState(10);
    const decrement = ()=>{
        if(count > 0){

            setCount(count -1)
        }
    }
  return (

    <div className='max-w-[800px] mx-auto my-8'>
        <p className='text-center mb-5'>{count}</p>
        <div className='flex gap-4 justify-center'>

        <button className='px-6 py-2 bg-red-700 border-none rounded-full text-white' onClick={()=>setCount(count + 1)}>add</button>
        <button className='px-6 py-2 bg-red-700 border-none rounded-full text-white' onClick={decrement}>del</button>
        
        </div>
    </div>
  )
}

export default Number