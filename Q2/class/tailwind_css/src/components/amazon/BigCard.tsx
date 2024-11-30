import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BigCard = () => {
  return (
    <div className="p-4 bg-white mt-5">
        <div className="flex gap-3 items-center">
          <h2 className="text-xl font-bold">Here come Holiday Specials</h2>
          <Link href="\" className="text-[12px] text-[rgb(0,113,133)]">explore now</Link>
        </div>
          <ul className="flex md:flex-row flex-col ">
          <ChildCard/>
          <ChildCard/>
          <ChildCard/>
          <ChildCard/>
          <ChildCard/>
          <ChildCard/>
          <ChildCard/>
          
          </ul>
      </div>
  )
}

export default BigCard

function ChildCard(){
  return (
    <li className="basis-[15%] p-1">
              <Image
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/Holiday_Shovler/Fuji_HolidayGG_Shoveler_Holiday_deals_1X_EN._CB541659723_.jpg"
                alt="Image 1"
                width={400}
                height={200}
              />
            </li>
  )
}