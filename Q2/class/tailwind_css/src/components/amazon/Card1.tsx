import Image from 'next/image'
import React from 'react'

const Card1 = () => {
  return (
    <div className='p-4 bg-white flex flex-col justify-between'>
      <h2 className='text-xl font-bold mb-2'>Toys under $25</h2>
      <Image 
      className='w-full'
      width={200}
      height={200}
      alt=''
      src={`https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg`}
      />
      <p className='mt-5 text-[12px] text-[rgb(0,113,133)]'>Shop now</p>
    </div>
  )
}

export default Card1