import React from 'react'
import StudyAbroad from './StudyAbroad'

const VoyageService = () => {
    return (
        <div>
            <h2 className='uppercase text-[#2C2C2C] text-center text-[36px] lg:text-[64px] font-[900] leading-normal mb-6 mt-[142px]'>voyage International Services </h2>
            <div className='flex justify-center items-center gap-1 mb-[46px]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 6 5" fill="none"> <ellipse cx="2.59434" cy="2.5" rx="2.59434" ry="2.5" fill="#A5AC8A" /> </svg> <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11 " viewBox="0 0 6 5" fill="none"> <ellipse cx="2.59434" cy="2.5" rx="2.59434" ry="2.5" fill="#A5AC8A" /> </svg> <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 6 5" fill="none"> <ellipse cx="3.40586" cy="2.5" rx="2.59434" ry="2.5" fill="#533115" /> </svg>
            </div>
            <p className='lg:px-[155px] text-[#2C2C2C] text-[42px] text-normal text-center'>If you’re looking to unlock the outstanding academic and personal growth opportunities <br /> that Australia offers, VIE Services is your trusted partner at every stage. Whether you’ve already chosen your path or are still exploring options, we provide expert guidance on course selection, application processes, visa requirements, and all the preparations <br /> needed  for your journey to Australia.
            </p>
            <StudyAbroad />
        </div>
    )
}

export default VoyageService