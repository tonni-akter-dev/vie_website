import React from 'react'
import es1 from '../../../public/es1.png'
import es2 from '../../../public/es2.png'
import es3 from '../../../public/es3.png'
import es4 from '../../../public/es4.png'
import es5 from '../../../public/es5.png'
import es6 from '../../../public/es6.png'
import es7 from '../../../public/es7.png'
import es8 from '../../../public/es8.png'
import es9 from '../../../public/es9.png'
import es10 from '../../../public/es10.png'
import es11 from '../../../public/es11.png'
import es12 from '../../../public/es12.png'
import Image from 'next/image'


const EstimatedUniversity = () => {
  return (
    <div className='lg:mx-[110px] mt-[180px] '>
      <h2 className='uppercase text-[#084F3D] text-center text-[36px] lg:text-[64px] font-[900] leading-normal mb-[70px]'>our esteemed university affiliates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 space-y-[35px] bg-[#FEFEFE] px-8 pt-[23px] pb-[50px] rounded-[58px]">
        <Image className='cursor-pointer w-full' src={es1} alt="" />
        <Image className='cursor-pointer w-full' src={es2} alt="" />
        <Image className='cursor-pointer w-full' src={es3} alt="" />
        <Image className='cursor-pointer w-full' src={es4} alt="" />
        <Image className='cursor-pointer w-full' src={es5} alt="" />
        <Image className='cursor-pointer w-full' src={es6} alt="" />
        <Image className='cursor-pointer w-full' src={es7} alt="" />
        <Image className='cursor-pointer w-full' src={es8} alt="" />
        <Image className='cursor-pointer w-full' src={es9} alt="" />
        <Image className='cursor-pointer w-full' src={es10} alt="" />
        <Image className='cursor-pointer w-full' src={es11} alt="" />
        <Image className='cursor-pointer w-full' src={es12} alt="" />
      </div>
      <button className='flex mx-auto cursor-pointer justify-center items-center mt-[-33px]'>
        <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 75 75" fill="none">
          <circle cx="37.5" cy="37.5" r="37.5" fill="#16AA83" />
          <circle cx="37.5" cy="37.5" r="32.5" fill="#CBF0E7" />
          <path d="M37 55L20 29H54L37 55Z" fill="#084F3D" />
        </svg>
      </button>
    </div>
  )
}

export default EstimatedUniversity