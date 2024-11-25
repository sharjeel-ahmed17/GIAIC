// import React, { useState } from 'react'

// const Modal = () => {
//     const [modalStatus , setModalStatus] = useState(true);
//   return (

//     <div>
//         <button className='bg-red-600 fixed right-3 rotate-90 top-6 p-5'>exquiry</button>

//         <div className={`w-full h-full bg-[rgba(0,0,0,0.5)] fixed hidden ${modalStatus ? 'block' : ''}`}></div>
     
//         <div className={`w-[320px] h-[320px] bg-white z-10 fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] transition-all`}><h1>exquiry form</h1></div>
//     </div>
//   )
// }

// export default Modal



import React, { useState } from 'react'
import './modal.css'
const Modal = () => {
    const [showModal , setShowModal ] = useState(false);
  return (
    <div>
        <button onClick={()=>setShowModal(true)} className='fixed right-5 top-2'>exquiry</button>
        <div onClick={()=>setShowModal(false)} className={`modalOvarlay ${showModal ?  'showOvraly' : ''}`} ></div>
        

        <div className={`modalDiv ${showModal ?  'showModal' : ''}`}> <h3>exquiry form
            <span onClick={()=>setShowModal(false)} className='ml-4 cursor-pointer'>&times;</span></h3></div>
    </div>
  )
}

export default Modal


