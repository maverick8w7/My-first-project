import React from 'react'
import Mycard from './lilcard'
import img1 from './assets/img1.svg'
import img2 from './assets/img2.svg'
import img3 from './assets/img3.svg'
import img4 from './assets/img4.svg'





const Place = () => {
  return (
    <>
      <div className='container mt-[43px]'>

        <div className='ml-[100px]'>
          <h2 className='text-3xl '><b>Popular Destinations</b></h2>
          <p className='text-[#333333] text-xl '>Vacations to make your experience enjoyable in Indonesia!</p>
        </div>

        <div className=' container flex ml-[100px] mr-[81px] justify-around gap-[43px] '>
          <Mycard 
          img={img1} 
          loc='Manggarai Barat'
           place="Flores Road Trip "
            day='3 Days'
           cost="Rp 6.705.000 /orang"
          />

          <Mycard 
          img={img2} 
          loc='Bogor'
           place="Forrester Glamping Co Bogor "
            day='1 Day'
           cost="Rp 1.205.000 /malam"
          />

          <Mycard 
          img={img3} 
          loc='Jakarta'
           place="Paket Tiket Pesawat Jakarta Bali "
            day='3 Days'
           cost="Rp 605.000 /person"
          />

          <Mycard 
          img={img4} 
          loc='Kota Semarang'
           place="Desa Wisata Kandri "
            day='14 Days'
           cost="Rp 1.400.000 /person"
          />
          
        </div>


      </div>
    </>
  )
}

export default Place