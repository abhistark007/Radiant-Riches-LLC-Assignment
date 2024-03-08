import React from 'react'
import SearchIcon from '../assets/navbarassets/searchIcon.png'

function Navbar() {
  return (
    <div className='bg-[#212731] w-full h-[64px] font-["Inter"] flex text-[#D1D6DA] items-center justify-center gap-10'>
        <div className='max-sm:hidden relative'>
            <img src={SearchIcon} alt="icon" className='absolute left-1 top-[6px] bottom-0  flex justify-center items-center '/>
            <input type=" text" className='w-[258px] h-[37px] border-[1px] rounded-[8px] pl-9 text-black' />
        </div>

        <div className='cursor-pointer'>Categories</div>

        <div  className='cursor-pointer'>Website Builders</div>

        <div  className='cursor-pointer max-[300px]:hidden'>Today's deals</div>

    </div>
  )
}

export default Navbar