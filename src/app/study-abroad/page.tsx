import React from 'react';
import playbtn from '../../../public/playbutton.svg';
import Image from 'next/image';
import DotCompo from '../component/DotCompo';
import UniversityCard from './component/UniversityCard';
import { universityData } from '../utils/data';


const StudyAbroad = () => {
  return (
    <div className='mx-[38px]  my-[120px]'>
      <div className='mx-auto flex justify-center  mb-[-20px]'>
        <button><Image src={playbtn} alt="" /></button>
      </div>
      <div className='pt-[153px] px-[64px] bg-[#FEFEFE]  rounded-[58px] ' style={{ boxShadow: '0 0 4.6px 0 rgba(0, 0, 0, 0.25)' }}>
        <div>
          <h2 className='text-[#2C2C2C] text-[60px] text-center font-[900] mb-[26px]'>Best Universities Around the World for Overseas Education</h2>
          <p className='text-[32px] text-[#918F8F] mb-[62px] text-center'>Choose a university that fuels your passion & purpose and that quenches your academic & career pursuits</p>
          <DotCompo />
        </div>
        {/* select */}
        {/* select */}

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          {
            universityData.map(uni => (
              <div key={uni.id}>
                <UniversityCard
                  datas={uni}
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default StudyAbroad