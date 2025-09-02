// import Image from 'next/image'
// import React from 'react'
// import dot from '/public/dot.png'

// const ContactForm = () => {
//     return (
//         <div className='contact_bg lg:px-[90px] px-8'>
//             <svg xmlns="http://www.w3.org/2000/svg" width="1170" height="713" viewBox="0 0 1170 713" fill="none">
//                 <foreignObject x="-18" y="-18" width="1206" height="749"><div xmlns="http://www.w3.org/1999/xhtml" style="backdrop-filter:blur(9px);clip-path:url(#bgblur_0_1_730_clip_path);height:100%;width:100%"></div></foreignObject><path data-figma-bg-blur-radius="18" d="M1170 713V0H702L585 89.125H0V713H1170Z" fill="white" fill-opacity="0.01" />
//                 <defs>
//                     <clipPath id="bgblur_0_1_730_clip_path" transform="translate(18 18)"><path d="M1170 713V0H702L585 89.125H0V713H1170Z" />
//                     </clipPath></defs>
//             </svg>
//             <div className='inner_contact max-w-[1170px] mx-auto h-[713px]'>
//                 <h2>LET our experts reach out to you</h2>
//                 <div className='grid grid-cols-3 mb-[62px]'>
//                     <input type="text" placeholder='First Name' className='text-[#077155] text-lg text-center bg-white rounded-[14px] ' />
//                     <input type="text" placeholder='Middle Name' className='text-[#077155] text-lg text-center bg-white rounded-[14px] ' />
//                     <input type="text" placeholder='Last Name' className='text-[#077155] text-lg text-center bg-white rounded-[14px] ' />
//                 </div>
//                 <div className='flex justify-center gap-3.5 mb-[62px]'>
//                     <input type="text" placeholder='First Name' className='text-[#077155] text-lg text-center bg-white rounded-[14px] ' />
//                     <input type="email" placeholder='Primary Email Address' className='text-[#077155] text-lg text-center bg-white rounded-[14px] ' />
//                 </div>
//                 <div className='flex justify-center mb-10'>
//                     <svg xmlns="http://www.w3.org/2000/svg" width="355" height="4" viewBox="0 0 355 4" fill="none">
//                         <path d="M0.666667 2C0.666667 2.73638 1.26362 3.33333 2 3.33333C2.73638 3.33333 3.33333 2.73638 3.33333 2C3.33333 1.26362 2.73638 0.666667 2 0.666667C1.26362 0.666667 0.666667 1.26362 0.666667 2ZM351.667 2C351.667 2.73638 352.264 3.33333 353 3.33333C353.736 3.33333 354.333 2.73638 354.333 2C354.333 1.26362 353.736 0.666667 353 0.666667C352.264 0.666667 351.667 1.26362 351.667 2ZM2 2V2.25H353V2V1.75H2V2Z" fill="white" />
//                     </svg>
//                 </div>
//                 <div className='flex justify-center gap-3.5 mb-4'>
//                     <input type="text" placeholder='Preferred Country' className='text-[#077155] text-lg text-center bg-white rounded-[14px] ' />
//                     <input type="text" placeholder='Preferred University' className='text-[#077155] text-lg text-center bg-white rounded-[14px] ' />
//                 </div>
//                 <div className='flex justify-center gap-3.5 mb-[68px]'>
//                     <input type="text" placeholder='Course' className='text-[#077155] text-lg text-center bg-white rounded-[14px] ' />
//                     <input type="text" placeholder='Preferred Year' className='text-[#077155] text-lg text-center bg-white rounded-[14px] ' />
//                 </div>
//                 <div className='flex gap-4 items-center'>
//                     <Image src={dot} alt="" />
//                     <p>I consent to receiving calls, WhatsApp, email form VIE Service  with the enquiry </p>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default ContactForm

// Tooni Code

// import Image from 'next/image';
// import React from 'react';
// import dot from '/public/dot.png';

// // const BlurBackground = () => (
// //     <svg xmlns="http://www.w3.org/2000/svg" width="1170" height="713" viewBox="0 0 1170 713" fill="none">
// //         <foreignObject x="-18" y="-18" width="1206" height="749">
// //             <div xmlns="http://www.w3.org/1999/xhtml"
// //             style={{ backdropFilter: 'blur(9px)', clipPath: 'url(#bgblur_0_1_730_clip_path)', height: '100%', width: '100%' }}></div></foreignObject><path data-figma-bg-blur-radius="18" d="M1170 713V0H702L585 89.125H0V713H1170Z" fill="white" fill-opacity="0.01" />
// //         <defs>
// //             <clipPath id="bgblur_0_1_730_clip_path" transform="translate(18 18)"><path d="M1170 713V0H702L585 89.125H0V713H1170Z" />
// //             </clipPath></defs>
// //     </svg>
// // );


// const ContactForm = () => {
//     return (
//         <div className="contact_bg lg:mx-[90px] px-8 relative overflow-hidden pt-[100px]">
//             {/* Blur Background */}
//             <div
//                 className="absolute inset-0 z-0 ms-[230px] mt-[50px]"      >
//                 {/* <BlurBackground className="w-full h-full mx-auto" /> */}
//             </div>
//             <div className="inner_contact max-w-[1170px] mx-auto h-[713px] relative z-10">
//                 <h2>LET our experts reach out to you</h2>
//                 <div className="grid grid-cols-3 mb-[62px]">
//                     <input
//                         type="text"
//                         placeholder="First Name"
//                         className="text-[#077155] text-lg text-center bg-white rounded-[14px] p-2"
//                     />
//                     <input
//                         type="text"
//                         placeholder="Middle Name"
//                         className="text-[#077155] text-lg text-center bg-white rounded-[14px] p-2"
//                     />
//                     <input
//                         type="text"
//                         placeholder="Last Name"
//                         className="text-[#077155] text-lg text-center bg-white rounded-[14px] p-2"
//                     />
//                 </div>
//                 <div className="flex justify-center gap-3.5 mb-[62px]">
//                     <input
//                         type="text"
//                         placeholder="First Name"
//                         className="text-[#077155] text-lg text-center bg-white rounded-[14px] p-2"
//                     />
//                     <input
//                         type="email"
//                         placeholder="Primary Email Address"
//                         className="text-[#077155] text-lg text-center bg-white rounded-[14px] p-2"
//                     />
//                 </div>
//                 <div className="flex justify-center mb-10">
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="355"
//                         height="4"
//                         viewBox="0 0 355 4"
//                         fill="none"
//                     >
//                         <path
//                             d="M0.666667 2C0.666667 2.73638 1.26362 3.33333 2 3.33333C2.73638 3.33333 3.33333 2.73638 3.33333 2C3.33333 1.26362 2.73638 0.666667 2 0.666667C1.26362 0.666667 0.666667 1.26362 0.666667 2ZM351.667 2C351.667 2.73638 352.264 3.33333 353 3.33333C353.736 3.33333 354.333 2.73638 354.333 2C354.333 1.26362 353.736 0.666667 353 0.666667C352.264 0.666667 351.667 1.26362 351.667 2ZM2 2V2.25H353V2V1.75H2V2Z"
//                             fill="white"
//                         />
//                     </svg>
//                 </div>
//                 <div className="flex justify-center gap-3.5 mb-4">
//                     <input
//                         type="text"
//                         placeholder="Preferred Country"
//                         className="text-[#077155] text-lg text-center bg-white rounded-[14px] p-2"
//                     />
//                     <input
//                         type="text"
//                         placeholder="Preferred University"
//                         className="text-[#077155] text-lg text-center bg-white rounded-[14px] p-2"
//                     />
//                 </div>
//                 <div className="flex justify-center gap-3.5 mb-[68px]">
//                     <input
//                         type="text"
//                         placeholder="Course"
//                         className="text-[#077155] text-lg text-center bg-white rounded-[14px] p-2"
//                     />
//                     <input
//                         type="text"
//                         placeholder="Preferred Year"
//                         className="text-[#077155] text-lg text-center bg-white rounded-[14px] p-2"
//                     />
//                 </div>
//                 <div className="flex gap-4 items-center">
//                     <Image src={dot} alt="" />
//                     <p>I consent to receiving calls, WhatsApp, email form VIE Service with the enquiry </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ContactForm;





// Junaead Code


import Image from 'next/image';
import React from 'react';
import dot from '/public/dot.png';

const ContactForm = () => {
    return (
        <div className="contact_bg lg:mx-[90px] px-4 sm:px-6 md:px-8 relative overflow-hidden pt-[60px] sm:pt-[80px] md:pt-[100px]">
            {/* Blur Background */}
            <div
                className="absolute inset-0 z-0 ms-[230px] mt-[50px]"      >
                {/* <BlurBackground className="w-full h-full mx-auto" /> */}
            </div>
            <div
                className="inner_contact w-[1170px] h-[713px] flex-shrink-0 max-w-full mx-auto relative z-10 bg-[rgba(255,255,255,0.01)] backdrop-blur-[9px] p-4 rounded-[20px] mb-4 overflow-y-auto" // UPDATED: Added overflow-y-auto to make form scrollable
            >
                <h2 className="text-xl md:text-3xl font-semibold text-center mb-6">
                    LET our experts reach out to you
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-[62px]">
                    <input
                        type="text"
                        placeholder="First Name"
                        className="text-[#077155] text-base sm:text-lg text-center bg-white rounded-[14px] p-2"
                    />
                    <input
                        type="text"
                        placeholder="Middle Name"
                        className="text-[#077155] text-base sm:text-lg text-center bg-white rounded-[14px] p-2"
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="text-[#077155] text-base sm:text-lg text-center bg-white rounded-[14px] p-2"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-[62px] max-w-[750px] mx-auto">
                    <input
                        type="text"
                        placeholder="First Name"
                        className="text-[#077155] text-base sm:text-lg text-center bg-white rounded-[14px] p-2"
                    />
                    <input
                        type="email"
                        placeholder="Primary Email Address"
                        className="text-[#077155] text-base sm:text-lg text-center bg-white rounded-[14px] p-2"
                    />
                </div>
                <div className="flex justify-center mb-10">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="355"
                        height="4"
                        viewBox="0 0 355 4"
                        fill="none"
                    >
                        <path
                            d="M0.666667 2C0.666667 2.73638 1.26362 3.33333 2 3.33333C2.73638 3.33333 3.33333 2.73638 3.33333 2C3.33333 1.26362 2.73638 0.666667 2 0.666667C1.26362 0.666667 0.666667 1.26362 0.666667 2ZM351.667 2C351.667 2.73638 352.264 3.33333 353 3.33333C353.736 3.33333 354.333 2.73638 354.333 2C354.333 1.26362 353.736 0.666667 353 0.666667C352.264 0.666667 351.667 1.26362 351.667 2ZM2 2V2.25H353V2V1.75H2V2Z"
                            fill="white"
                        />
                    </svg>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 max-w-[750px] mx-auto">
                    <input
                        type="text"
                        placeholder="Preferred Country"
                        className="text-[#077155] text-base sm:text-lg text-center bg-white rounded-[14px] p-2"
                    />
                    <input
                        type="text"
                        placeholder="Preferred University"
                        className="text-[#077155] text-base sm:text-lg text-center bg-white rounded-[14px] p-2"
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-[68px] max-w-[750px] mx-auto">
                    <input
                        type="text"
                        placeholder="Course"
                        className="text-[#077155] text-base sm:text-lg text-center bg-white rounded-[14px] p-2"
                    />
                    <input
                        type="text"
                        placeholder="Preferred Year"
                        className="text-[#077155] text-base sm:text-lg text-center bg-white rounded-[14px] p-2"
                    />
                </div>
                <div className="flex flex-col sm:flex-row gap-4 items-center text-center sm:text-left">
                    <Image src={dot} alt="" />
                    <p>I consent to receiving calls, WhatsApp, email form VIE Service with the enquiry </p>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
