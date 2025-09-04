import React from 'react'
import offer1 from "../../../public/offer1.png"
import offer2 from "../../../public/offer2.png"
import offer3 from "../../../public/offer3.png"
import offer4 from "../../../public/offer4.png"
import offer5 from "../../../public/offer5.png"
import hover1 from "../../../public/hover1.png"
import hover2 from "../../../public/hover2.png"
import hover3 from "../../../public/hover3.png"
import hover4 from "../../../public/hover4.png"
import hover5 from "../../../public/hover5.png"
import Image from 'next/image'

const WeOffer = () => {
    const offers = [
        {
            pic: offer1,
            hoverPic: hover1,
            title: "University & Course Selection",
            desc: "Tailored guidance based on your academic background, career goals, and interests."
        },
        {
            pic: offer2,
            hoverPic: hover2,
            title: "Application Assistance",
            desc: "Complete support in preparing and submitting applications to universities."
        },
        {
            pic: offer3,
            hoverPic: hover3,
            title: "Visa Processing",
            desc: "Expert help with student visa documentation, submissions, and follow-ups."
        },
        {
            pic: offer4,
            hoverPic: hover4,
            title: "Scholarship Advice & Financial Planning",
            desc: "Information on available scholarships and budgeting for study abroad."
        },
        {
            pic: offer5,
            hoverPic: hover5,
            title: "Pre-Departure Support",
            desc: "Guidance on travel, cultural adaptation, and settling into student life in Australia."
        },
    ]

    return (
        <div className='max-w-[1740px] px-5 py-[120px] mx-auto'>
            <div className='text-center'>
                <p className='text-[#2C2C2C] text-[64px] font-extrabold mb-5'>What We Offer?</p>
                <p className='text-[#2C2C2C] text-[32px] mb-[100px]'>
                    We provide a full range of services designed to make your study abroad process simple,
                    efficient, and stress-free:
                </p>
            </div>

            <div className='flex flex-wrap justify-center gap-[50px]'>
                {offers.map((offer, index) => (
                    <div
                        key={index}
                        className={`group max-w-[525px] px-10 py-[53px]  transition-all duration-300 ease-in ${index % 2 === 0 ? "bg-[#C2C4AC] shadow-[0_1px_0_0_rgba(0,0,0,0.25)]" : "bg-[#A5AC8A] shadow-[0_1px_0_0_rgba(0,0,0,0.25)]"
                            }`}
                    >

                        <div className="relative w-[65px] h-[70px] mb-2.5">
                            <Image
                                src={offer.pic.src}
                                alt={offer.title}
                                fill
                                className="object-contain group-hover:hidden"
                            />
                            <Image
                                src={offer.hoverPic.src}
                                alt={`${offer.title} hover`}
                                fill
                                className="object-contain hidden group-hover:block"
                            />
                        </div>


                        <p className='text-[#1F2519] text-[25px] font-bold uppercase mb-2.5'>
                            {offer.title}
                        </p>
                        <p className='text-[#1F2519] text-[22px]'>{offer.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WeOffer
