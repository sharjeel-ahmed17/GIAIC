import React from 'react'

const FlexBox = () => {
  return (
    <div className='flex flex-col md:flex-row md:flex-wrap gap-2'>
<div className='p-5 bg-red-600 basis-1/2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, corrupti.</div>
<div className='p-5 bg-red-600  basis-1/2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, corrupti.</div>
<div className='p-5 bg-red-600 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, corrupti.</div>
<div className='p-5 bg-red-600 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, corrupti.</div>

    </div>
  )
}

export default FlexBox