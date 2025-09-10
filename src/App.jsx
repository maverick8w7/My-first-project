import { Route, Routes } from 'react-router-dom'
import Hero from './hero'
import Place from './place'
import Plan from './plan'


function App() {

  return (
    <>
    <div className=' bg-gradient-to-b from-[#a9deed] to-white '>

      <div className="container mx-auto pb-[21px] pt-[41px] ">
        <nav className=" flex  mt-[41px] gap-[300px]  ">
          <h2 className="text-[#42A7C3] text-[36px] font-medium font-sans"> TRAVELING! </h2>
          <ul className="flex gap-[80px] text-base align-middle">
            <li>Product</li>
            <li>Contact us</li>
            <li>About us </li>
          </ul>
          <button className="bg-[#FA8443] text-white py-[12px] px-[32px] rounded-2xl">Sign up</button>
        </nav>
      </div>
      <Routes>
        <Route path='/' element={<Hero />} />
      </Routes>
          <Place/>
           
          <Plan/>
           
    </div>

    </>
  )
}

export default App
