import React from 'react'
import PlayButton from "../../../public/assets/about-us/icons/seeMore.svg"
import Image from 'next/image'
import DotIndicator from '../component/DotIndicator';
import VoyageInternational from '../component/VoyageInternational';
import BeginJourney from '../component/BeginJourney';
import WeOffer from '../component/WeOffer';



const About = () => {
  return (
    <div className="relative max-w-[1846px] mx-auto my-[121px] px-[38px]">
      {/* Top PlayButton */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
        <Image
          src={PlayButton}
          alt="Play Button"
          width={48}
          height={48}
          className="bg-white rounded-full"
        />
      </div>

      <section
        className="relative border border-[#FEFEFE]  bg-[#FEFEFE] rounded-[58px] shadow py-32"
        style={{
          filter: 'drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.1))'
        }}
      >

        <VoyageInternational />
        <DotIndicator />
        <WeOffer />
        <BeginJourney />
      </section>

      {/* Bottom PlayButton */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <Image
          src={PlayButton}
          alt="Play Button"
          width={48}
          height={48}
          className="bg-white rounded-full"
        />
      </div>
    </div>
  );
}

export default About
