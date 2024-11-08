import Image from 'next/image'
import React from 'react'

const Bio = () => {
  return (
    <div>
      <div><Image width={200} height={200} alt='logo is goes here' src='/logo.png'/></div>
      <div><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, delectus iste sunt tenetur odio, voluptatibus officiis neque excepturi aliquid, at autem sed unde quibusdam ullam pariatur. Architecto neque aliquid quos.</p></div>
    </div>
  )
}

export default Bio;
