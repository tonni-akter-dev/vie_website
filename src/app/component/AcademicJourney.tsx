// 'use client'
// import { motion } from 'framer-motion';

// export default function AcademicJourney() {
//     return (
//         <div className="px-[87px]">

//             <h1 className='text-[#533115] text-[64px] mb-[50px] font-[900] leading-normal text-center'>Lets Begin Your Academic Journey</h1>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-[110px]  w-full">

//                 <motion.div
//                     className="bg-[#C2C4AC] p-6 h-[250px] lg:h-[365px] rounded-lg shadow-md flex justify-center items-center relative"
//                     initial={{ opacity: 1 }}
//                     whileHover={{ opacity: 0.9 }}
//                     transition={{ duration: 0.5, ease: "easeInOut" }}>
//                     <p className="text-3xl lg:text-[40px] text-[#533115] leading-normal uppercase  font-bold text-center">
//                         Expert
//                         Counselling
//                     </p>
//                     <motion.div
//                         className="absolute top-0 left-0 w-full h-full bg-[#A5AC8A] pt-10 p-6 rounded-lg shadow-md z-10"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 0 }}
//                         whileHover={{ opacity: 1 }}
//                         transition={{ duration: 0.5, ease: "easeInOut" }}
//                     >
//                         <p className="text-black text-lg font-medium ">
//                             Our Counselling Sessions Immensely benefit in making best academic decisions suited to career choices.
//                         </p>
//                         <ul className="list-disc list-inside mt-5 text-black font-bold">
//                             <li>Career oriented counseling</li>
//                             <li>Emphasis on futuristic Courses</li>
//                             <li>Interactive Sessions with uni delegates</li>
//                         </ul>
//                     </motion.div>
//                 </motion.div>

//                 <motion.div
//                     className="bg-[#A5AC8A] p-6 h-[250px] lg:h-[365px] rounded-lg shadow-md flex justify-center items-center relative"
//                     initial={{ opacity: 1 }}
//                     whileHover={{ opacity: 0.9 }}
//                     transition={{ duration: 0.5, ease: "easeInOut" }}>
//                     <p className="text-3xl lg:text-[40px] text-[#533115] leading-normal uppercase  font-bold text-center">
//                         Choose your <br />
//                         desired country <br />
//                         & university
//                     </p>
//                     <motion.div
//                         className="absolute top-0 left-0 w-full h-full bg-[#A5AC8A] pt-10 p-6 rounded-lg shadow-md z-10"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 0 }}
//                         whileHover={{ opacity: 1 }}
//                         transition={{ duration: 0.5, ease: "easeInOut" }}
//                     >
//                         <p className="text-black text-lg font-medium ">
//                             Our Counselling Sessions Immensely benefit in making best academic decisions suited to career choices.
//                         </p>
//                         <ul className="list-disc list-inside mt-5 text-black font-bold">
//                             <li>Career oriented counseling</li>
//                             <li>Emphasis on futuristic Courses</li>
//                             <li>Interactive Sessions with uni delegates</li>
//                         </ul>
//                     </motion.div>
//                 </motion.div>

//                 <motion.div
//                     className="bg-[#C2C4AC] p-6 h-[250px] lg:h-[365px] rounded-lg shadow-md flex justify-center items-center relative"
//                     initial={{ opacity: 1 }}
//                     whileHover={{ opacity: 0.9 }}
//                     transition={{ duration: 0.5, ease: "easeInOut" }}>
//                     <p className="text-3xl lg:text-[40px] text-[#533115] leading-normal uppercase  font-bold text-center">
//                         Application
//                         Enrollment
//                     </p>
//                     <motion.div
//                         className="absolute top-0 left-0 w-full h-full bg-[#A5AC8A] pt-10 p-6 rounded-lg shadow-md z-10"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 0 }}
//                         whileHover={{ opacity: 1 }}
//                         transition={{ duration: 0.5, ease: "easeInOut" }}
//                     >
//                         <p className="text-black text-lg font-medium ">
//                             Our Counselling Sessions Immensely benefit in making best academic decisions suited to career choices.
//                         </p>
//                         <ul className="list-disc list-inside mt-5 text-black font-bold">
//                             <li>Career oriented counseling</li>
//                             <li>Emphasis on futuristic Courses</li>
//                             <li>Interactive Sessions with uni delegates</li>
//                         </ul>
//                     </motion.div>
//                 </motion.div>
//             </div>
//             <div className="flex gap-[110px] justify-center items-center mt-[60px]  w-full">


//                 <motion.div
//                     className="bg-[#A5AC8A] p-6 h-[250px] lg:h-[365px] w-[508px] cursor-pointer  rounded-lg shadow-md flex justify-center items-center relative"
//                     initial={{ opacity: 1 }}
//                     whileHover={{ opacity: 0.9 }}
//                     transition={{ duration: 0.5, ease: "easeInOut" }}>
//                     <p className="text-3xl lg:text-[40px] text-[#533115] leading-normal uppercase  font-bold text-center">
//                         Allied <br />
//                         Services
//                     </p>
//                     <motion.div
//                         className="absolute top-0 left-0 w-full h-full bg-[#A5AC8A] pt-10 p-6 rounded-lg shadow-md z-10"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 0 }}
//                         whileHover={{ opacity: 1 }}
//                         transition={{ duration: 0.5, ease: "easeInOut" }}
//                     >
//                         <p className="text-black text-lg font-medium ">
//                             Our Counselling Sessions Immensely benefit in making best academic decisions suited to career choices.
//                         </p>
//                         <ul className="list-disc list-inside mt-5 text-black font-bold">
//                             <li>Career oriented counseling</li>
//                             <li>Emphasis on futuristic Courses</li>
//                             <li>Interactive Sessions with uni delegates</li>
//                         </ul>
//                     </motion.div>
//                 </motion.div>
//                 <motion.div
//                     className="bg-[#A5AC8A] p-6 h-[250px] lg:h-[365px]  w-[508px] cursor-pointer rounded-lg shadow-md flex justify-center items-center relative"
//                     initial={{ opacity: 1 }}
//                     whileHover={{ opacity: 0.9 }}
//                     transition={{ duration: 0.5, ease: "easeInOut" }}>
//                     <p className="text-3xl lg:text-[40px] text-[#533115] leading-normal uppercase  font-bold text-center">
//                         Visa <br />
//                         Processing
//                     </p>
//                     <motion.div
//                         className="absolute top-0 left-0 w-full h-full bg-[#A5AC8A] pt-10 p-6 rounded-lg shadow-md z-10"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 0 }}
//                         whileHover={{ opacity: 1 }}
//                         transition={{ duration: 0.5, ease: "easeInOut" }}
//                     >
//                         <p className="text-black text-lg font-medium ">
//                             Our Counselling Sessions Immensely benefit in making best academic decisions suited to career choices.
//                         </p>
//                         <ul className="list-disc list-inside mt-5 text-black font-bold">
//                             <li>Career oriented counseling</li>
//                             <li>Emphasis on futuristic Courses</li>
//                             <li>Interactive Sessions with uni delegates</li>
//                         </ul>
//                     </motion.div>
//                 </motion.div>


//             </div>
//         </div>
//     );
// }
'use client';
import { motion, easeOut, Easing } from 'framer-motion';

// Animation variants for the container (staggered effect for children)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger each card by 0.1 seconds
      delayChildren: 0.1, // Initial delay before animation starts
    },
  },
};

// Animation variants for individual cards
const cardVariants = {
  hidden: { opacity: 0, y: 20 }, // Start slightly below and transparent
  visible: {
    opacity: 1,
    y: 0, // Move to original position
    transition: {
      duration: 0.5, // Match duration from WhyChooseUs
      ease: easeOut, // Use easeOut for smooth deceleration
    },
  },
};

// Animation variants for overlay content (for hover effect)
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut' as Easing, // Explicitly type as Easing
    },
  },
};

export default function AcademicJourney() {
  return (
    <div className="px-5 lg:px-[87px]">
      <motion.h1
        className="text-[#533115] text-[30px] lg:text-[64px] mb-[50px] font-[900] leading-normal text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: easeOut }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Lets Begin Your Academic Journey
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-3 gap-[110px] w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="bg-[#C2C4AC] p-6 h-[250px] lg:h-[365px] cursor-pointer w-full rounded-lg shadow-md flex justify-center items-center relative"
          variants={cardVariants}
          whileHover={{ opacity: 0.9 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <p className="text-3xl lg:text-[40px] text-[#533115] leading-normal uppercase font-bold text-center">
            Expert Counselling
          </p>
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-[#A5AC8A] pt-10 p-6 rounded-lg shadow-md z-10"
            variants={overlayVariants}
            initial="hidden"
            animate="hidden"
            whileHover="visible"
          >
            <p className="text-black text-lg font-medium">
              Our Counselling Sessions Immensely benefit in making best academic decisions suited to career choices.
            </p>
            <ul className="list-disc list-inside mt-5 text-black font-bold">
              <li>Career oriented counseling</li>
              <li>Emphasis on futuristic Courses</li>
              <li>Interactive Sessions with uni delegates</li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-[#A5AC8A] p-6 h-[250px] lg:h-[365px] cursor-pointer w-full rounded-lg shadow-md flex justify-center items-center relative"
          variants={cardVariants}
          whileHover={{ opacity: 0.9 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <p className="text-3xl lg:text-[40px] text-[#533115] leading-normal uppercase font-bold text-center">
            Choose your <br />
            desired country <br />
            & university
          </p>
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-[#A5AC8A] pt-10 p-6 rounded-lg shadow-md z-10"
            variants={overlayVariants}
            initial="hidden"
            animate="hidden"
            whileHover="visible"
          >
            <p className="text-black text-lg font-medium">
              Our Counselling Sessions Immensely benefit in making best academic decisions suited to career choices.
            </p>
            <ul className="list-disc list-inside mt-5 text-black font-bold">
              <li>Career oriented counseling</li>
              <li>Emphasis on futuristic Courses</li>
              <li>Interactive Sessions with uni delegates</li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-[#C2C4AC] p-6 h-[250px] lg:h-[365px] cursor-pointer w-full rounded-lg shadow-md flex justify-center items-center relative"
          variants={cardVariants}
          whileHover={{ opacity: 0.9 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <p className="text-3xl lg:text-[40px] text-[#533115] leading-normal uppercase font-bold text-center">
            Application Enrollment
          </p>
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-[#A5AC8A] pt-10 p-6 rounded-lg shadow-md z-10"
            variants={overlayVariants}
            initial="hidden"
            animate="hidden"
            whileHover="visible"
          >
            <p className="text-black text-lg font-medium">
              Our Counselling Sessions Immensely benefit in making best academic decisions suited to career choices.
            </p>
            <ul className="list-disc list-inside mt-5 text-black font-bold">
              <li>Career oriented counseling</li>
              <li>Emphasis on futuristic Courses</li>
              <li>Interactive Sessions with uni delegates</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex lg:flex-row flex-col gap-[110px] justify-center items-center mt-[60px] w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="bg-[#A5AC8A] p-6 h-[250px] lg:h-[365px] w-full lg:w-[508px] cursor-pointer rounded-lg shadow-md flex justify-center items-center relative"
          variants={cardVariants}
          whileHover={{ opacity: 0.9 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <p className="text-3xl lg:text-[40px] text-[#533115] leading-normal uppercase font-bold text-center">
            Allied <br />
            Services
          </p>
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-[#A5AC8A] pt-10 p-6 rounded-lg shadow-md z-10"
            variants={overlayVariants}
            initial="hidden"
            animate="hidden"
            whileHover="visible"
          >
            <p className="text-black text-lg font-medium">
              Our Counselling Sessions Immensely benefit in making best academic decisions suited to career choices.
            </p>
            <ul className="list-disc list-inside mt-5 text-black font-bold">
              <li>Career oriented counseling</li>
              <li>Emphasis on futuristic Courses</li>
              <li>Interactive Sessions with uni delegates</li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-[#A5AC8A] p-6 h-[250px] lg:h-[365px] w-full lg:w-[508px] cursor-pointer rounded-lg shadow-md flex justify-center items-center relative"
          variants={cardVariants}
          whileHover={{ opacity: 0.9 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <p className="text-3xl lg:text-[40px] text-[#533115] leading-normal uppercase font-bold text-center">
            Visa <br />
            Processing
          </p>
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-[#A5AC8A] pt-10 p-6 rounded-lg shadow-md z-10"
            variants={overlayVariants}
            initial="hidden"
            animate="hidden"
            whileHover="visible"
          >
            <p className="text-black text-lg font-medium">
              Our Counselling Sessions Immensely benefit in making best academic decisions suited to career choices.
            </p>
            <ul className="list-disc list-inside mt-5 text-black font-bold">
              <li>Career oriented counseling</li>
              <li>Emphasis on futuristic Courses</li>
              <li>Interactive Sessions with uni delegates</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}