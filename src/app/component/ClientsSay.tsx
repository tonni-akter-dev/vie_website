import React from "react";
import DotIndicator from "./DotIndicator";

const ClientsSay = () => {
  return (
    <div className='mt-[120px] mb-[300px] lg:mx-[130px] '>
      <div className='px-5 lg:px-[72px] rounded-4xl lg:rounded-[112px] xl:h-[548px] pt-12 pb-12 xl:pb-0 bg-[#FEFEFE] ' style={{ boxShadow: '0 0 4.6px 0 rgba(0, 0, 0, 0.25)' }}>
        <h2 className='uppercase text-[#2C2C2C] text-center text-[36px] lg:text-[64px] font-[900] leading-normal mb-3 '>What our clients say!</h2>
        <div className='flex justify-center'>  <svg xmlns="http://www.w3.org/2000/svg" width="421" height="3" viewBox="0 0 421 3" fill="none">
          <path d="M0 1.5H421" stroke="#353E2B" strokeWidth="2" />
        </svg></div>
        <div className="client_say grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6.5 pt-[103px]">
          <div className='bg-white rounded-[55px] border border-[#084F3D] py-[42px] px-[47px]' style={{ boxShadow: " 0 -1px 4px 0 rgba(0, 0, 0, 0.25) inset, 0 3px 4px 0 rgba(0, 0, 0, 0.25)" }}>
            <div className="flex justify-center mb-2 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
              >
                <circle cx="50" cy="50" r="50" fill="#084F3D" />
              </svg>
            </div>
            <div className=" mb-3">
              <DotIndicator
                width={5}
                spacing={5}
                height={5}
                bounceDistance={6}
                direction="horizontal"
              />
            </div>

            <h3 className="text-2xl text-[#353E2B] font-medium text-center mt-1.5 mb-3.5 uppercase">
              Kamal Hossain
            </h3>
            {/* star */}
            <div className="h-[176px] overflow-y-scroll">
              <div className="flex justify-center mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="120"
                  height="15"
                  viewBox="0 0 120 15"
                  fill="none"
                >
                  <path
                    d="M3.06 15L4.36 9.45395L0 5.72368L5.76 5.23026L8 0L10.24 5.23026L16 5.72368L11.64 9.45395L12.94 15L8 12.0592L3.06 15Z"
                    fill="#E6CA28"
                  />
                  <path
                    d="M29.06 15L30.36 9.45395L26 5.72368L31.76 5.23026L34 0L36.24 5.23026L42 5.72368L37.64 9.45395L38.94 15L34 12.0592L29.06 15Z"
                    fill="#E6CA28"
                  />
                  <path
                    d="M55.06 15L56.36 9.45395L52 5.72368L57.76 5.23026L60 0L62.24 5.23026L68 5.72368L63.64 9.45395L64.94 15L60 12.0592L55.06 15Z"
                    fill="#E6CA28"
                  />
                  <path
                    d="M81.06 15L82.36 9.45395L78 5.72368L83.76 5.23026L86 0L88.24 5.23026L94 5.72368L89.64 9.45395L90.94 15L86 12.0592L81.06 15Z"
                    fill="#E6CA28"
                  />
                  <path
                    d="M107.06 15L108.36 9.45395L104 5.72368L109.76 5.23026L112 0L114.24 5.23026L120 5.72368L115.64 9.45395L116.94 15L112 12.0592L107.06 15Z"
                    fill="#E6CA28"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium text-black">
                Bachelor of Information Technology My journey to study in Sydney
                wouldn’t have been possible without the support of VIE Services.
                From shortlisting the right course in IT to securing my offer
                letter, compiling visa documents, managing fund transfers, and
                even finding accommodation — they handled everything with care
                and professionalism. What impressed me most was their
                transparency and deep knowledge of the process. Their
                counselling felt genuine, and every step was clearly explained.
                Today, I’m working as a website developer in Sydney, and it all
                started with the right guidance from VIE Services. Highly
                recommended for anyone looking for a stress-free study abroad
                experience.
              </p>
            </div>
          </div>
          {/* second */}
          <div
            className="bg-white rounded-[55px] border border-[#084F3D] py-[42px] px-[47px]"
            style={{
              boxShadow:
                " 0 -1px 4px 0 rgba(0, 0, 0, 0.25) inset, 0 3px 4px 0 rgba(0, 0, 0, 0.25)",
            }}
          >
            <div className="flex justify-center mb-2 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
              >
                <circle cx="50" cy="50" r="50" fill="#084F3D" />
              </svg>
            </div>
            <div className=" mb-3">
              <DotIndicator
                width={5}
                spacing={5}
                height={5}
                bounceDistance={6}
                direction="horizontal"
              />
            </div>

            <h3 className="text-2xl text-[#353E2B] font-medium text-center mt-1.5 mb-3.5 uppercase">
              Kamal Hossain
            </h3>
            {/* star */}
            <div className="h-[176px] overflow-y-scroll">
              <div className="flex justify-center mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="120"
                  height="15"
                  viewBox="0 0 120 15"
                  fill="none"
                >
                  <path
                    d="M3.06 15L4.36 9.45395L0 5.72368L5.76 5.23026L8 0L10.24 5.23026L16 5.72368L11.64 9.45395L12.94 15L8 12.0592L3.06 15Z"
                    fill="#E6CA28"
                  />
                  <path
                    d="M29.06 15L30.36 9.45395L26 5.72368L31.76 5.23026L34 0L36.24 5.23026L42 5.72368L37.64 9.45395L38.94 15L34 12.0592L29.06 15Z"
                    fill="#E6CA28"
                  />
                  <path
                    d="M55.06 15L56.36 9.45395L52 5.72368L57.76 5.23026L60 0L62.24 5.23026L68 5.72368L63.64 9.45395L64.94 15L60 12.0592L55.06 15Z"
                    fill="#E6CA28"
                  />
                  <path
                    d="M81.06 15L82.36 9.45395L78 5.72368L83.76 5.23026L86 0L88.24 5.23026L94 5.72368L89.64 9.45395L90.94 15L86 12.0592L81.06 15Z"
                    fill="#E6CA28"
                  />
                  <path
                    d="M107.06 15L108.36 9.45395L104 5.72368L109.76 5.23026L112 0L114.24 5.23026L120 5.72368L115.64 9.45395L116.94 15L112 12.0592L107.06 15Z"
                    fill="#E6CA28"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium text-black">
                Bachelor of Information Technology My journey to study in Sydney
                wouldn’t have been possible without the support of VIE Services.
                From shortlisting the right course in IT to securing my offer
                letter, compiling visa documents, managing fund transfers, and
                even finding accommodation — they handled everything with care
                and professionalism. What impressed me most was their
                transparency and deep knowledge of the process. Their
                counselling felt genuine, and every step was clearly explained.
                Today, I’m working as a website developer in Sydney, and it all
                started with the right guidance from VIE Services. Highly
                recommended for anyone looking for a stress-free study abroad
                experience.
              </p>
            </div>
          </div>
          <div
            className="bg-white rounded-[55px] border border-[#084F3D] py-[42px] px-[47px]"
            style={{
              boxShadow:
                " 0 -1px 4px 0 rgba(0, 0, 0, 0.25) inset, 0 3px 4px 0 rgba(0, 0, 0, 0.25)",
            }}
          >
            <div className="flex justify-center mb-2 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
              >
                <circle cx="50" cy="50" r="50" fill="#084F3D" />
              </svg>
            </div>
            <div className=" mb-3">
              <DotIndicator
                width={5}
                spacing={5}
                height={5}
                bounceDistance={6}
                direction="horizontal"
              />
            </div>

            <h3 className="text-2xl text-[#353E2B] font-medium text-center mt-1.5 mb-3.5 uppercase">
              Kamal Hossain
            </h3>
            {/* star */}
            <div className="h-[176px] overflow-y-scroll">
              <div className="flex justify-center mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="120"
                  height="15"
                  viewBox="0 0 120 15"
                  fill="none"
                >
                  <path
                    d="M3.06 15L4.36 9.45395L0 5.72368L5.76 5.23026L8 0L10.24 5.23026L16 5.72368L11.64 9.45395L12.94 15L8 12.0592L3.06 15Z"
                    fill="#E6CA28"
                  />
                  <path
                    d="M29.06 15L30.36 9.45395L26 5.72368L31.76 5.23026L34 0L36.24 5.23026L42 5.72368L37.64 9.45395L38.94 15L34 12.0592L29.06 15Z"
                    fill="#E6CA28"
                  />
                  <path
                    d="M55.06 15L56.36 9.45395L52 5.72368L57.76 5.23026L60 0L62.24 5.23026L68 5.72368L63.64 9.45395L64.94 15L60 12.0592L55.06 15Z"
                    fill="#E6CA28"
                  />
                  <path
                    d="M81.06 15L82.36 9.45395L78 5.72368L83.76 5.23026L86 0L88.24 5.23026L94 5.72368L89.64 9.45395L90.94 15L86 12.0592L81.06 15Z"
                    fill="#E6CA28"
                  />
                  <path
                    d="M107.06 15L108.36 9.45395L104 5.72368L109.76 5.23026L112 0L114.24 5.23026L120 5.72368L115.64 9.45395L116.94 15L112 12.0592L107.06 15Z"
                    fill="#E6CA28"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium text-black">
                Bachelor of Information Technology My journey to study in Sydney
                wouldn’t have been possible without the support of VIE Services.
                From shortlisting the right course in IT to securing my offer
                letter, compiling visa documents, managing fund transfers, and
                even finding accommodation — they handled everything with care
                and professionalism. What impressed me most was their
                transparency and deep knowledge of the process. Their
                counselling felt genuine, and every step was clearly explained.
                Today, I’m working as a website developer in Sydney, and it all
                started with the right guidance from VIE Services. Highly
                recommended for anyone looking for a stress-free study abroad
                experience.
              </p>
            </div>
          </div>
          <div
            className="bg-white rounded-[55px] border border-[#084F3D] py-[42px] px-[47px]"
            style={{
              boxShadow:
                " 0 -1px 4px 0 rgba(0, 0, 0, 0.25) inset, 0 3px 4px 0 rgba(0, 0, 0, 0.25)",
            }}
          >
            <div className="flex justify-center mb-2 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
              >
                <circle cx="50" cy="50" r="50" fill="#084F3D" />
              </svg>
            </div>
            <div className=" mb-3">
              <DotIndicator
                width={5}
                spacing={5}
                height={5}
                bounceDistance={6}
                direction="horizontal"
              />
            </div>

            <h3 className="text-2xl text-[#353E2B] font-medium text-center mt-1.5 mb-3.5 uppercase">
              Kamal Hossain
            </h3>
            {/* star */}
            <div className="h-[176px] overflow-y-scroll">
              <div className="flex justify-center mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="120"
                  height="15"
                  viewBox="0 0 120 15"
                  fill="none"
                >
                  <path
                    d="M3.06 15L4.36 9.45395L0 5.72368L5.76 5.23026L8 0L10.24 5.23026L16 5.72368L11.64 9.45395L12.94 15L8 12.0592L3.06 15Z"
                    fill="#E6CA28"
                  />
                  <path
                    d="M29.06 15L30.36 9.45395L26 5.72368L31.76 5.23026L34 0L36.24 5.23026L42 5.72368L37.64 9.45395L38.94 15L34 12.0592L29.06 15Z"
                    fill="#E6CA28"
                  />
                  <path
                    d="M55.06 15L56.36 9.45395L52 5.72368L57.76 5.23026L60 0L62.24 5.23026L68 5.72368L63.64 9.45395L64.94 15L60 12.0592L55.06 15Z"
                    fill="#E6CA28"
                  />
                  <path
                    d="M81.06 15L82.36 9.45395L78 5.72368L83.76 5.23026L86 0L88.24 5.23026L94 5.72368L89.64 9.45395L90.94 15L86 12.0592L81.06 15Z"
                    fill="#E6CA28"
                  />
                  <path
                    d="M107.06 15L108.36 9.45395L104 5.72368L109.76 5.23026L112 0L114.24 5.23026L120 5.72368L115.64 9.45395L116.94 15L112 12.0592L107.06 15Z"
                    fill="#E6CA28"
                  />
                </svg>
              </div>
              <p className="text-sm font-medium text-black">
                Bachelor of Information Technology My journey to study in Sydney
                wouldn’t have been possible without the support of VIE Services.
                From shortlisting the right course in IT to securing my offer
                letter, compiling visa documents, managing fund transfers, and
                even finding accommodation — they handled everything with care
                and professionalism. What impressed me most was their
                transparency and deep knowledge of the process. Their
                counselling felt genuine, and every step was clearly explained.
                Today, I’m working as a website developer in Sydney, and it all
                started with the right guidance from VIE Services. Highly
                recommended for anyone looking for a stress-free study abroad
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsSay;
