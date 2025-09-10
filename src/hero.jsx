import React from 'react'
import Play from './assets/googleplay.svg' 
import Apple from './assets/apple.svg'
import Back from './assets/bg.svg'
import Woman from './assets/woman.png'
import Plane from './assets/plane.svg'

function Hero() {
  return (
    <>
    <div className='flex pb-[121px]'>

     <div className='container ml-[100px] w-[48%] justify-start'>
      <h1 className='text-[56px] font-bold text-[#333333] mt-[121px] '>Start your journey
       by one click, explore beautiful world!</h1>
       <p className='text-xl text-[#333333] mt-[16px] '>Plan and book your perfect trip with expert advice, travel tips, destination information and inspiration from us!</p>
       <div className=' flex gap-[24px] mt-[32px]'>
        <button className='text-[10px] bg-gray-950 text-gray-100 w-[136] h-[40px] flex items-start rounded'> <img className='w-[24px] h-[25px] my-[7px] ml-[10px]' src ={Play}/><p className='ml-[7px] mx-[4px]'>GET IT ON<br/> <b className='text-[16px]'>Google play</b></p></button>
        <button className='text-[10px] bg-gray-950 text-gray-100 w-[136] h-[40px] flex items-start rounded'> <img className='w-[24px] h-[25px] my-[7px] ml-[10px]' src={Apple}/><p className='ml-[7px] mx-[4px]'>Downlod on the <br/> <b className='text-[16px]'>App Store</b></p></button>
       </div>
     </div>


      <div className='container flex w-[50%] justify-end relative'>
        <div className='flex absolute'>
        <img className='mt-[29px] mr-[93px] ' src={Back}/>
        </div>
        <div className='flex absolute mr-[100px] overflow-hidden h-[527px] rounded-b-full mt-8'>
            <img className='mt-[29px]  w-[516px]  h-[529px] rounded-b-full object-cover ' src={Woman}/>
        </div>
        <div className='flex absolute mr-[87px] '>
            <img className=' mt-[90px]' src={Plane}/>
        </div>

       </div>

    </div>
    </>
  )
}

export default Hero