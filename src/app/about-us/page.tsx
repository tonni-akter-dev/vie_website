import React from 'react'
import PlayButton from "../../../public/assets/about-us/icons/seeMore.svg"
import Image from 'next/image'
import DotIndicator from '../component/DotIndicator';
import VoyageInternational from '../component/VoyageInternational';
import YourGetWay from '../component/YourGetWay';
import BeginJourney from '../component/BeginJourney';
import WeOffer from '../component/WeOffer';
import OurTeamOurPromise from '../component/OurTeamOurPromise';
import OurCoreValues from '../component/OurCoreValues';



const About = () => {
  return (
    <div className="relative lg:max-w-[1846px] mx-auto my-[121px] lg:px-[38px]">
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
        className="relative border border-[#FEFEFE]  bg-[#FEFEFE] rounded-[58px] shadow py-16 lg:py-32"
        style={{
          filter: 'drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.1))'
        }}
      >

        <VoyageInternational />
        <DotIndicator/>
        <YourGetWay/>
        <OurTeamOurPromise/>
        <OurCoreValues/>
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
