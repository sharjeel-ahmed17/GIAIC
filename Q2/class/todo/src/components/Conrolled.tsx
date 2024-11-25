import React, { useState } from 'react'
import { Button } from './ui/button';

const Conrolled = () => {
    const [uname , setUname] = useState('');
    const [pass , setPass] = useState('');
    const handleSubmit = (e : any) => {
        e.preventDefault();
        console.log(uname, pass);
    }
  return (
    <form className='max-w-[1280px] mx-auto mt-12' onSubmit={handleSubmit}>

        <div className='mb-3 w-[200px]'>
            <label htmlFor="">username</label>
            <input type="text" className='border border-red-300 w-full rounded-md px-2 py-2' value={uname} onChange={(e)=>setUname(e.target.value)}/>

        </div>
        <div className='mb-3 w-[200px]'>
            <label htmlFor="">password</label>
            <input type="text" className='border border-red-300 w-full rounded-md px-2 py-2' value={pass} onChange={(e)=>setPass(e.target.value)}/>

        </div>
        {/* <button className='bg-blue'>submit</button> */}
        <Button className='bg-red-500 w-[200px]'>submit</Button>

    </form>
  )
}

export default Conrolled