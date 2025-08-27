import React from 'react';
import Image from 'next/image';
import s1 from '../../../public/s1.svg';
import s2 from '../../../public/s2.svg';
import s3 from '../../../public/s3.svg';
import s4 from '../../../public/s4.svg';
import s5 from '../../../public/s5.svg';
import s6 from '../../../public/s6.svg';
import s7 from '../../../public/s7.svg';
import s8 from '../../../public/s8.svg';
import s9 from '../../../public/s9.svg';
import s11 from '../../../public/s11.png';
import s12 from '../../../public/s22.png';
import s13 from '../../../public/s33.png';
import s14 from '../../../public/s55.png';
import s15 from '../../../public/s10.png';
import s16 from '../../../public/s66.png';
import s17 from '../../../public/s77.png';
import s18 from '../../../public/s88.png';
import s19 from '../../../public/s99.png';
import arrowRight from '../../../public/arrowright.svg';
import arrowleft from '../../../public/arrowleft.svg';
import arrRightBig from '../../../public/arrRightBig.png';
import arrowleftBig from '../../../public/arrowleftBig.svg';

const stepsData = [
    { id: 1, defaultImage: s1, hoverImage: s11, text: 'Make an  </br> enquiry' },
    { id: 2, defaultImage: s2, hoverImage: s12, text: 'Receive expert </br> Counselling' },
    { id: 3, defaultImage: s3, hoverImage: s13, text: 'Submit your </br> application' },
    { id: 4, defaultImage: s4, hoverImage: s14, text: 'Apply for </br> your Visa' },
    { id: 5, defaultImage: s5, hoverImage: s15, text: 'Document </br> Finalization' },
    { id: 6, defaultImage: s6, hoverImage: s16, text: 'Receive your </br> admission offer' },
    { id: 7, defaultImage: s7, hoverImage: s17, text: 'Attend Pre-departure </br> briefing ' },
    { id: 8, defaultImage: s8, hoverImage: s18, text: 'Plan your </br> travel' },
    { id: 9, defaultImage: s9, hoverImage: s19, text: 'Achieve your </br> dreams' },
];

const StudyAbroad = () => {
    return (
        <div className=' mx-[77px]'>
            <h2 className='uppercase text-[#2C2C2C] text-center text-[36px] lg:text-[64px] font-[900] leading-normal mb-7 mt-[110px]'>
                STEPS TO STUDY ABROAD WITH VIE
            </h2>
            <div className='py-[70px] px-[280px] bg-[#F5F5F5] rounded-[105px] ' style={{ boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.14)' }}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-[90px] gap-8 justify-center items-center">
                    {stepsData.map((step) => (
                        <div key={step.id} className=' '>
                            <div className="group flex flex-col  items-center">
                                <div className="w-[183px] h-[192px]">
                                    <Image
                                        className="w-[183px] h-[192px] object-contain group-hover:hidden transition-all duration-300"
                                        src={step.defaultImage}
                                        alt={`Step ${step.id} default`}
                                    />
                                    <Image
                                        className="w-[183px] h-[192px] object-contain hidden group-hover:block transition-all duration-300"
                                        src={step.hoverImage}
                                        alt={`Step ${step.id} hover`}
                                    />
                                </div>
                                <p className="text-[36px]  text-[#2C2C2C] font-bold capitalize text-center mt-2"
                                    dangerouslySetInnerHTML={{ __html: step.text }} />

                            </div>
                            {/* {step.id === 3 || step.id === 6 || step.id === 9 ? "" : (
                                <div className="mt-[87px]">
                                    <Image
                                        className=""
                                        src={arrowRight}
                                        alt={`Arrow to Step ${step.id + 1}`}
                                    />
                                </div>
                            )} */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StudyAbroad;