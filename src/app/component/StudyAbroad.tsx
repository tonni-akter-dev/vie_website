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
import arrRightBig from '../../../public/arrRightBig.png';
import arrowleftBig from '../../../public/arrowleftBig.svg';

const StudyAbroad = () => {
    return (
        <div className='mx-5 lg:mx-[77px]'>
            <h2 className='uppercase text-[#2C2C2C] text-center text-[36px] lg:text-[64px] font-[900] leading-normal mb-7 mt-[110px]'>
                STEPS TO STUDY ABROAD WITH VIE
            </h2>
            <div className='pt-[115px] pb-[70px] 2xl:px-[280px] bg-[#F5F5F5] rounded-[105px] lg:h-[1256px] relative ' style={{ boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.14)' }}>

                <div>
                    <Image className='hidden xl:block absolute right-[12%] top-[17%]' src={arrRightBig} alt="" />
                </div>
                <div>
                    <Image className='hidden xl:blockabsolute left-[12%] bottom-[28%]' src={arrowleftBig} alt="" />
                </div>
                <div className="flex flex-wrap lg:gap-y-[90px] gap-10 2xl:gap-[125px] justify-center items-center">
                    {/* Step 1 */}
                    <div className="group">
                        <div className="flex items-center gap-5 md:gap-10 2xl:gap-[94px] ">
                            <div className="w-[183px] h-[192px]">
                                <Image
                                    className="size-20 xl:w-[183px] xl:h-[192px] object-contain group-hover:hidden transition-all duration-300"
                                    src={s1}
                                    alt="Step 1 default"
                                />
                                <Image
                                    className="size-20 xl:w-[183px] xl:h-[192px] object-contain hidden group-hover:block transition-all duration-300"
                                    src={s11}
                                    alt="Step 1 hover"
                                />
                                <p
                                    className="text-base xl:text-[36px] text-[#2C2C2C] font-bold capitalize text-center mt-2"
                                    dangerouslySetInnerHTML={{ __html: 'Make an </br> enquiry' }}
                                />
                            </div>
                            <Image src={arrowRight} alt="Arrow to Step 2" />
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="group">
                        <div className="flex items-center gap-10 2xl:gap-[94px]">
                            <div className="w-[183px] h-[192px] flex items-center flex-col">
                                <Image
                                    className="size-20 xl:w-[183px] xl:h-[192px] object-contain group-hover:hidden transition-all duration-300"
                                    src={s2}
                                    alt="Step 2 default"
                                />
                                <Image
                                    className="size-20 xl:w-[183px] xl:h-[192px] object-contain hidden group-hover:block transition-all duration-300"
                                    src={s12}
                                    alt="Step 2 hover"
                                />
                                <p
                                    className="text-base xl:text-[36px] text-[#2C2C2C] whitespace-nowrap text-center somatic font-bold capitalize mt-2"
                                    dangerouslySetInnerHTML={{ __html: 'Receive expert </br> Counselling' }}
                                />
                            </div>
                            <Image src={arrowRight} alt="Arrow to Step 3" />
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="group">
                        <div className="flex items-center gap-10 2xl:gap-[94px]">
                            <div className="w-[183px] h-[192px] flex items-center flex-col">
                                <Image
                                    className="size-20 xl:w-[183px] xl:h-[192px] object-contain group-hover:hidden transition-all duration-300"
                                    src={s3}
                                    alt="Step 3 default"
                                />
                                <Image
                                    className="size-20 xl:w-[183px] xl:h-[192px] object-contain hidden group-hover:block transition-all duration-300"
                                    src={s13}
                                    alt="Step 3 hover"
                                />
                                <p
                                    className="text-base xl:text-[36px] whitespace-nowrap text-[#2C2C2C] font-bold capitalize text-center mt-2"
                                    dangerouslySetInnerHTML={{ __html: 'Submit your </br> application' }}
                                />
                            </div>

                        </div>
                    </div>

                </div>
                <div className="flex flex-wrap lg:gap-y-[90px] gap-10 2xl:gap-[125px] justify-center items-center mt-20 lg:mt-[180px]">
                    {/* Step 1 */}
                    <div className="group">
                        <div className="flex items-center gap-5 md:gap-10 2xl:gap-[94px] ">
                            <div className="w-[183px] h-[192px]">
                                <Image
                                    className="size-20 xl:w-[183px] xl:h-[192px] object-contain group-hover:hidden transition-all duration-300"
                                    src={s4}
                                    alt="Step 1 default"
                                />
                                <Image
                                    className="size-20 xl:w-[183px] xl:h-[192px] object-contain hidden group-hover:block transition-all duration-300"
                                    src={s14}
                                    alt="Step 1 hover"
                                />
                                <p
                                    className="text-base xl:text-[36px] text-[#2C2C2C] font-bold capitalize text-center mt-2"
                                    dangerouslySetInnerHTML={{ __html: 'Apply for </br> your Visa' }}
                                />
                            </div>
                            <Image src={arrowRight} alt="Arrow to Step 2" />
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="group">
                        <div className="flex items-center gap-10 2xl:gap-[94px]">
                            <div className="w-[183px] h-[192px] flex items-center flex-col">
                                <Image
                                    className="size-20 xl:w-[183px] xl:h-[192px] object-contain group-hover:hidden transition-all duration-300"
                                    src={s5}
                                    alt="Step 2 default"
                                />
                                <Image
                                    className="size-20 xl:w-[183px] xl:h-[192px] object-contain hidden group-hover:block transition-all duration-300"
                                    src={s15}
                                    alt="Step 2 hover"
                                />
                                <p
                                    className="text-base xl:text-[36px] text-[#2C2C2C] whitespace-nowrap text-center somatic font-bold capitalize mt-2"
                                    dangerouslySetInnerHTML={{ __html: 'Document </br> Finalization' }}
                                />
                            </div>
                            <Image src={arrowRight} alt="Arrow to Step 3" />
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="group">
                        <div className="flex items-center gap-10 2xl:gap-[94px]">
                            <div className="w-[183px] h-[192px] flex items-center flex-col">
                                <Image
                                    className="size-20 xl:w-[183px] xl:h-[192px] object-contain group-hover:hidden transition-all duration-300"
                                    src={s6}
                                    alt="Step 3 default"
                                />
                                <Image
                                    className="size-20 xl:w-[183px] xl:h-[192px] object-contain hidden group-hover:block transition-all duration-300"
                                    src={s16}
                                    alt="Step 3 hover"
                                />
                                <p
                                    className="text-base xl:text-[36px] whitespace-nowrap text-[#2C2C2C] font-bold capitalize text-center mt-2"
                                    dangerouslySetInnerHTML={{ __html: 'Receive your  </br> admission offer' }}
                                />
                            </div>

                        </div>
                    </div>

                </div>
                <div className="flex flex-wrap  lg:gap-y-[90px] gap-10 2xl:gap-[125px] justify-center items-center mt-20 lg:mt-[180px]">
                    {/* Step 1 */}
                    <div className="group">
                        <div className="flex items-center gap-10 2xl:gap-[94px] ">
                            <div className="w-[183px] h-[192px] flex items-center flex-col">
                                <Image
                                    className="size-20 xl:w-[183px] xl:h-[192px] object-contain group-hover:hidden transition-all duration-300"
                                    src={s7}
                                    alt="Step 1 default"
                                />
                                <Image
                                    className="size-20 xl:w-[183px] xl:h-[192px] object-contain hidden group-hover:block transition-all duration-300"
                                    src={s17}
                                    alt="Step 1 hover"
                                />
                                <p
                                    className="text-base xl:text-[36px] whitespace-nowrap text-[#2C2C2C] font-bold capitalize text-center mt-2"
                                    dangerouslySetInnerHTML={{ __html: 'Attend Pre-departure </br> briefing' }}
                                />
                            </div>
                            <Image src={arrowRight} alt="Arrow to Step 2" />
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="group">
                        <div className="flex items-center gap-10 2xl:gap-[94px]">
                            <div className="w-[183px] h-[192px] flex items-center flex-col">
                                <Image
                                    className="size-20 xl:w-[183px] xl:h-[192px] object-contain group-hover:hidden transition-all duration-300"
                                    src={s8}
                                    alt="Step 2 default"
                                />
                                <Image
                                    className="size-20 xl:w-[183px] xl:h-[192px] object-contain hidden group-hover:block transition-all duration-300"
                                    src={s18}
                                    alt="Step 2 hover"
                                />
                                <p
                                    className="text-base xl:text-[36px] text-[#2C2C2C] whitespace-nowrap text-center somatic font-bold capitalize mt-2"
                                    dangerouslySetInnerHTML={{ __html: 'Plan your </br> travel' }}
                                />
                            </div>
                            <Image src={arrowRight} alt="Arrow to Step 3" />
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="group">
                        <div className="flex items-center gap-10  2xl:gap-[94px]">
                            <div className="w-[183px] h-[192px] flex items-center flex-col">
                                <Image
                                    className="size-20 xl:w-[183px] xl:h-[192px] object-contain group-hover:hidden transition-all duration-300"
                                    src={s9}
                                    alt="Step 3 default"
                                />
                                <Image
                                    className="w-[183px] h-[192px] object-contain hidden group-hover:block transition-all duration-300"
                                    src={s19}
                                    alt="Step 3 hover"
                                />
                                <p
                                    className="text-base xl:text-[36px] whitespace-nowrap text-[#2C2C2C] font-bold capitalize text-center mt-2"
                                    dangerouslySetInnerHTML={{ __html: 'Achieve your </br> dreams' }}
                                />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default StudyAbroad;