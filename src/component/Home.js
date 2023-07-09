import React from 'react'
import Hero from './Hero'
import Services from './Services'

export default function Home() {
  return (
    <div className='home'>
      <Hero
       name={"Purohit Store"}
       description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui culpa tempora illum labore explicabo architecto harum debitis odit. Harum animi reprehenderit, perferendis consectetur vitae assumenda aliquid fugiat sed nesciunt sapiente vel esse mollitia quo, dicta labore! Maiores repudiandae ipsam consequatur."} 
      />
      <Services />
    </div>
  )
}
