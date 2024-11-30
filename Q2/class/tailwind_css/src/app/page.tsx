
import Card1 from '@/components/amazon/Card1'
import Card2 from '@/components/amazon/Card2'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
<Card1/>
 <Card2/>
 <Card2/>
<Card1/>
<Card1/>
 <Card2/>
 <Card2/>
<Card1/>



  </div>
    </>
  )
}

export default Home