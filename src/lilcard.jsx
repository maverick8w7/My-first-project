import React from 'react'

import Location from './assets/Location.svg'
import { Link } from "react-router-dom"

  function Card({ children }) {
        return (
            <div className="w-[296px] h-[332px] bg-[#dee6e6] rounded-3xl relative overflow-hidden">
                {children}
            </div>
        )
    }

const Lilcard = ({
    img, loc, place, day, cost
}) => {

    return (
        <>

            <div className=' mt-[43px] relative'>
                <Card>
                    <div >
                        <img className='pt-[10px] rounded-3xl ' src={img} alt="Destination" />
                        <div className='ml-[16px]'>
                            <div className='flex '>
                                <img className='w-4 ' src={Location} />
                                <p className='  flex justify-end text-[12px] text-[#8F8F8F] '>{loc}</p>
                            </div>
                            <p className=' text-[#333333] text-[18px] font-medium '>{place}</p>
                            <p className=' text-gray-600 '>{day}</p>
                            <Link className='text-blue-500 font-sans font-medium' to="/">{cost}</Link>

                        </div>
                    </div>
                </Card>
            </div>

        </>
    )
}

export default Lilcard