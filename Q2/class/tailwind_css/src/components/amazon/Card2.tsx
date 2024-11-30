import Image from 'next/image'
import React from 'react'

const Card2 = () => {
  return (
    <div className='p-4 bg-white'>
      <h2 className='text-xl font-bold mb-2'>Toys under $25</h2>
      <div className='grid grid-cols-2 gap-2'>
       
<MiniCard />
<MiniCard />
<MiniCard />
<MiniCard />
      </div>
      <p className='mt-5 text-[12px] text-[rgb(0,113,133)]'>Shop now</p>
    </div>
  )
}

export default Card2


export function MiniCard(){
  return (
    <div>
    <Image 
  className='w-full'
  width={200}
  height={200}
  alt=''
  src={`https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg`}
  />
  <span className='text-[12px] -mt-1'>Dining</span>
    </div>
  )
}