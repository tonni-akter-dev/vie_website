'use client';
import { useState } from 'react';
import { coreValues } from '../utils/data';

export default function OurCoreValues() {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[96px] py-8 md:py-12 lg:py-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-extrabold mb-4 md:mb-6 lg:mb-8 text-[#2C2C2C] uppercase text-center lg:text-left">
        Our Core Values
      </h2>
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px] text-[#2C2C2C] mb-6 md:mb-8 text-center lg:text-left">We are guided by principles that define our approach and commitment to students:</p>
      {/* Mobile and Tablet View */}
      <div className="block lg:hidden">
        <div className="space-y-4">
          {coreValues.map((value) => (
            <div
              key={value.id}
              className={`
                bg-[#FFF2DE] rounded-2xl p-4 sm:p-6 cursor-pointer transition-all duration-300 ease-in-out
                ${hoveredValue === value.id ? 'bg-opacity-90 shadow-lg' : 'hover:bg-opacity-80'}
              `}
              onMouseEnter={() => setHoveredValue(value.id)}
              onMouseLeave={() => setHoveredValue(null)}
              onClick={() => setHoveredValue(hoveredValue === value.id ? null : value.id)}>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-[#2C2C2C] text-white rounded-full flex items-center justify-center text-sm sm:text-base font-bold">
                  {value.id}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#2C2C2C] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-[#2C2C2C] ">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block">
        <div className="relative">
          <svg
            viewBox="0 0 1500 836"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto transition-all duration-500 ease-in-out"
            preserveAspectRatio="xMidYMid meet"
          >
            <circle cx="45" cy="94" r="45" fill="#FFF2DE" />
            <circle cx="79" cy="224" r="45" fill="#EEDEC7" />
            <circle cx="103" cy="354" r="45" fill="#A5AC8A" />
            <circle cx="128" cy="484" r="45" fill="#C2C4AC" />
            <circle cx="103" cy="614" r="45" fill="#FFF2DE" />
            <circle cx="79" cy="744" r="45" fill="#D4C2A8" />
            <path
              d="M191.5 1C275 291.5 348 434 237 835.5"
              stroke="#2C2C2C"
              stroke-width="3"
            />
            <path d="M124 92H170" stroke="#2C2C2C" stroke-width="3" />
            <path d="M158 224H204" stroke="#2C2C2C" stroke-width="3" />
            <path d="M183 358H229" stroke="#2C2C2C" stroke-width="3" />
            <path d="M201 490H247" stroke="#2C2C2C" stroke-width="3" />
            <path d="M183 622H229" stroke="#2C2C2C" stroke-width="3" />
            <path d="M162 755H208" stroke="#2C2C2C" stroke-width="3" />
            <path d="M267 92H303" stroke="#2C2C2C" stroke-width="3" />
            <path d="M301 224H341" stroke="#2C2C2C" stroke-width="3" />
            <path d="M324 358H366" stroke="#2C2C2C" stroke-width="3" />
            <path d="M335 490H377" stroke="#2C2C2C" stroke-width="3" />
            <path d="M317 622H368" stroke="#2C2C2C" stroke-width="3" />
            <path d="M296 755H347" stroke="#2C2C2C" stroke-width="3" />
            <circle cx="218.5" cy="92.5" r="22" fill="white" stroke="#FFF2DE" />
            <circle
              cx="255.5"
              cy="224.5"
              r="22"
              fill="white"
              stroke="#EEDEC7"
            />
            <circle
              cx="280.5"
              cy="358.5"
              r="22"
              fill="white"
              stroke="#A5AC8A"
            />
            <circle
              cx="292.5"
              cy="490.5"
              r="22"
              fill="white"
              stroke="#C2C4AC"
            />
            <circle
              cx="282.5"
              cy="622.5"
              r="22"
              fill="white"
              stroke="#FFF2DE"
            />
            <circle
              cx="257.5"
              cy="754.5"
              r="22"
              fill="white"
              stroke="#D4C2A8"
            />
            <circle cx="218.5" cy="92.5" r="18.5" fill="#FFF2DE" />
            <circle cx="255.5" cy="224.5" r="18.5" fill="#EEDEC7" />
            <circle cx="280.5" cy="358.5" r="18.5" fill="#A5AC8A" />
            <circle cx="292.5" cy="490.5" r="18.5" fill="#C2C4AC" />
            <circle cx="282.5" cy="622.5" r="18.5" fill="#FFF2DE" />
            <circle cx="257.5" cy="754.5" r="18.5" fill="#D4C2A8" />
            <path
              d="M38.76 108.4C30.64 108.4 27.08 102.84 27.08 93.76C27.08 84.68 30.64 79.12 38.76 79.12C46.88 79.12 50.48 84.68 50.48 93.76C50.48 102.84 46.88 108.4 38.76 108.4ZM38.76 104.2C43 104.2 45.32 101.08 45.32 93.76C45.32 86.48 43 83.32 38.76 83.32C34.52 83.32 32.24 86.48 32.24 93.76C32.24 101.08 34.52 104.2 38.76 104.2ZM64.4269 108H59.2669V87.56C58.1869 88.52 55.2669 88.96 53.7869 88.96H52.6269V85.16C56.9069 84.92 59.2669 83.2 60.3069 79.52H64.4269V108Z"
              fill="#2C2C2C"
            />
            <path
              d="M67.76 238.4C59.64 238.4 56.08 232.84 56.08 223.76C56.08 214.68 59.64 209.12 67.76 209.12C75.88 209.12 79.48 214.68 79.48 223.76C79.48 232.84 75.88 238.4 67.76 238.4ZM67.76 234.2C72 234.2 74.32 231.08 74.32 223.76C74.32 216.48 72 213.32 67.76 213.32C63.52 213.32 61.24 216.48 61.24 223.76C61.24 231.08 63.52 234.2 67.76 234.2ZM102.627 238H81.6269V235.64C81.6269 229.56 83.7869 226.48 89.3869 224.44L93.3869 223C96.3469 221.88 97.4669 220.24 97.4669 217.92C97.4669 215 95.4269 213.32 92.4669 213.32C89.1469 213.32 87.4269 215.16 87.0269 219.08H82.2669C82.2669 212.72 85.7469 209.12 92.4269 209.12C98.9869 209.12 102.627 212.72 102.627 218.04C102.627 222.16 100.187 224.88 95.7069 226.48L91.4269 228.04C88.3869 229.16 86.9469 230.92 86.7869 233.8H102.627V238Z"
              fill="#2C2C2C"
            />
            <path
              d="M90.76 368.4C82.64 368.4 79.08 362.84 79.08 353.76C79.08 344.68 82.64 339.12 90.76 339.12C98.88 339.12 102.48 344.68 102.48 353.76C102.48 362.84 98.88 368.4 90.76 368.4ZM90.76 364.2C95 364.2 97.32 361.08 97.32 353.76C97.32 346.48 95 343.32 90.76 343.32C86.52 343.32 84.24 346.48 84.24 353.76C84.24 361.08 86.52 364.2 90.76 364.2ZM115.587 368.4C108.907 368.4 104.627 365.6 104.627 358.44H109.387C109.827 362.6 111.987 364.2 115.627 364.2C119.387 364.2 121.427 362.32 121.427 359.56C121.427 356.8 119.587 355.44 116.267 355.44H112.867V351.52H115.867C118.987 351.52 121.027 350.4 121.027 347.72C121.027 345.08 118.827 343.32 115.587 343.32C112.107 343.32 110.147 345 109.787 348.28H105.027C105.027 342.72 108.747 339.12 115.587 339.12C122.027 339.12 126.187 342.48 126.187 347.24C126.187 350.84 124.267 352.72 121.427 353.36C124.587 354.16 126.587 356.12 126.587 360.32C126.587 365.12 122.267 368.4 115.587 368.4Z"
              fill="#2C2C2C"
            />
            <path
              d="M115.76 498.4C107.64 498.4 104.08 492.84 104.08 483.76C104.08 474.68 107.64 469.12 115.76 469.12C123.88 469.12 127.48 474.68 127.48 483.76C127.48 492.84 123.88 498.4 115.76 498.4ZM115.76 494.2C120 494.2 122.32 491.08 122.32 483.76C122.32 476.48 120 473.32 115.76 473.32C111.52 473.32 109.24 476.48 109.24 483.76C109.24 491.08 111.52 494.2 115.76 494.2ZM148.427 498H143.387V490.96H129.627V486.08L142.307 469.52H148.427V486.8H152.227V490.96H148.427V498ZM143.387 486.8V474.68L134.187 486.8H143.387Z"
              fill="#2C2C2C"
            />
            <path
              d="M90.76 628.4C82.64 628.4 79.08 622.84 79.08 613.76C79.08 604.68 82.64 599.12 90.76 599.12C98.88 599.12 102.48 604.68 102.48 613.76C102.48 622.84 98.88 628.4 90.76 628.4ZM90.76 624.2C95 624.2 97.32 621.08 97.32 613.76C97.32 606.48 95 603.32 90.76 603.32C86.52 603.32 84.24 606.48 84.24 613.76C84.24 621.08 86.52 624.2 90.76 624.2ZM115.427 628.4C108.387 628.4 105.027 624.4 105.027 620.44H110.067C110.427 622.32 111.907 624.48 115.427 624.48C118.747 624.48 120.947 622.4 120.947 618.8C120.947 615.24 118.747 613.08 115.427 613.08C112.227 613.08 110.707 614.96 110.187 616.8H105.187L107.587 599.52H124.507V603.72H111.787L110.707 611.32C111.987 609.96 113.987 609.44 116.107 609.44C122.267 609.44 126.107 612.76 126.107 618.64C126.107 624.52 122.227 628.4 115.427 628.4Z"
              fill="#2C2C2C"
            />
            <path
              d="M66.76 758.4C58.64 758.4 55.08 752.84 55.08 743.76C55.08 734.68 58.64 729.12 66.76 729.12C74.88 729.12 78.48 734.68 78.48 743.76C78.48 752.84 74.88 758.4 66.76 758.4ZM66.76 754.2C71 754.2 73.32 751.08 73.32 743.76C73.32 736.48 71 733.32 66.76 733.32C62.52 733.32 60.24 736.48 60.24 743.76C60.24 751.08 62.52 754.2 66.76 754.2ZM91.9069 758.4C84.7469 758.4 80.6269 754.32 80.6269 745.68C80.6269 734.8 84.6669 729.12 91.9469 729.12C97.5069 729.12 101.107 731.52 101.827 736.8H97.0669C96.7469 734.68 95.2269 733.04 92.1869 733.04C88.3069 733.04 86.2269 736.24 85.7869 742.88C87.2669 740.52 89.5869 739.44 92.6669 739.44C98.8269 739.44 102.667 742.76 102.667 748.64C102.667 754.44 98.7869 758.4 91.9069 758.4ZM91.7469 754.48C95.1469 754.48 97.5069 752.36 97.5069 748.8C97.5069 745.2 95.1469 743.08 91.7469 743.08C88.3069 743.08 85.9869 745.2 85.9869 748.8C85.9869 752.36 88.3069 754.48 91.7469 754.48Z"
              fill="#2C2C2C"
            />
            <rect
              x="384"
              y="717"
              width={hoveredValue === 6 ? "1040" : "608"}
              height="74"
              rx="17"
              fill="#D4C2A8"
              className="cursor-pointer transition-all duration-100 ease-in-out hover:fill-opacity-80"
              onMouseEnter={() => setHoveredValue(6)}
              onMouseLeave={() => setHoveredValue(null)}
            />
            <foreignObject
              x="394"
              y="727"
              width={hoveredValue === 6 ? "1040" : "608"}
              height="54"
              className="pointer-events-none"
            >
              <div className="h-full flex items-center">
                <p className={`whitespace-nowrap ${hoveredValue === 6 ? "text-lg xl:text-xl 2xl:text-[25px]" : "text-xl xl:text-2xl 2xl:text-[35px]"} px-5 font-medium`}>
                  {hoveredValue === 6 ? coreValues[5].description : coreValues[5].title}
                </p>
              </div>
            </foreignObject>
            <rect
              x="413"
              y="585"
              width={hoveredValue === 5 ? "893" : "608"}
              height="74"
              rx="17"
              fill="#FFF2DE"
              className="cursor-pointer transition-all duration-100 ease-in-out hover:fill-opacity-80"
              onMouseEnter={() => setHoveredValue(5)}
              onMouseLeave={() => setHoveredValue(null)}
            />
            <foreignObject
              x="423"
              y="595"
              width={hoveredValue === 5 ? "893" : "608"}
              height="54"
              className="pointer-events-none"
            >
              <div className="h-full flex items-center">
                <p className={`whitespace-nowrap ${hoveredValue === 5 ? "text-lg xl:text-xl 2xl:text-[25px]" : "text-xl xl:text-2xl 2xl:text-[35px]"} px-5 font-medium`}>
                  {hoveredValue === 5 ? coreValues[4].description : coreValues[4].title}
                </p>
              </div>
            </foreignObject>
            <rect
              x="443"
              y="453"
              width={hoveredValue === 4 ? "732" : "608"}
              height="74"
              rx="17"
              fill="#C2C4AC"
              className="cursor-pointer transition-all duration-100 ease-in-out hover:fill-opacity-80"
              onMouseEnter={() => setHoveredValue(4)}
              onMouseLeave={() => setHoveredValue(null)}
            />
            <foreignObject
              x="453"
              y="463"
              width={hoveredValue === 4 ? "732" : "608"}
              height="54"
              className="pointer-events-none"
            >
              <div className="h-full flex items-center">
                <p className={`whitespace-nowrap ${hoveredValue === 4 ? "text-lg xl:text-xl 2xl:text-[25px]" : "text-xl xl:text-2xl 2xl:text-[35px]"} px-5 font-medium`}>
                  {hoveredValue === 4 ? coreValues[3].description : coreValues[3].title}
                </p>
              </div>
            </foreignObject>
            <rect
              x="413"
              y="321"
              width={hoveredValue === 3 ? "910" : "608"}
              height="74"
              rx="17"
              fill="#A5AC8A"
              className="cursor-pointer transition-all duration-100 ease-in-out hover:fill-opacity-80"
              onMouseEnter={() => setHoveredValue(3)}
              onMouseLeave={() => setHoveredValue(null)}
            />
            <foreignObject
              x="423"
              y="331"
              width={hoveredValue === 3 ? "899" : "608"}
              height="54"
              className="pointer-events-none"
            >
              <div className="h-full flex items-center">
                <p className={`whitespace-nowrap ${hoveredValue === 3 ? "text-lg xl:text-xl 2xl:text-[25px]" : "text-xl xl:text-2xl 2xl:text-[35px]"} px-5 font-medium`}>
                  {hoveredValue === 3 ? coreValues[2].description : coreValues[2].title}
                </p>
              </div>
            </foreignObject>
            <rect
              x="384"
              y="187"
              width={hoveredValue === 2 ? "961" : "608"}
              height="74"
              rx="17"
              fill="#EEDEC7"
              className="cursor-pointer transition-all duration-100 ease-in-out hover:fill-opacity-80"
              onMouseEnter={() => setHoveredValue(2)}
              onMouseLeave={() => setHoveredValue(null)}
            />
            <foreignObject
              x="394"
              y="197"
              width={hoveredValue === 2 ? "961" : "608"}
              height="54"
              className="pointer-events-none"
            >
              <div className="h-full flex items-center">
                <p className={`whitespace-nowrap ${hoveredValue === 2 ? "text-lg xl:text-xl 2xl:text-[25px]" : "text-xl xl:text-2xl 2xl:text-[35px]"} px-5 font-medium`}>
                  {hoveredValue === 2 ? coreValues[1].description : coreValues[1].title}
                </p>
              </div>
            </foreignObject>
            <rect
              x="340"   
              y="55"
              width={hoveredValue === 1 ? "1150" : "608"}
              height="74"
              rx="17"
              fill="#FFF2DE"
              className="cursor-pointer transition-all duration-100 ease-in-out hover:fill-opacity-80"
              onMouseEnter={() => setHoveredValue(1)}
              onMouseLeave={() => setHoveredValue(null)}
            />
            <foreignObject
              x="350"
              y="65"
              width={hoveredValue === 1 ? "1106" : "608"}
              height="54"
              className="pointer-events-none"
            >
              <div className="h-full flex items-center">
                <p className={`whitespace-nowrap ${hoveredValue === 1 ? "text-lg xl:text-xl 2xl:text-[25px]" : "text-xl xl:text-2xl 2xl:text-[35px]"} px-5 font-medium`}>
                  {hoveredValue === 1 ? coreValues[0].description : coreValues[0].title}
                </p>
              </div>
            </foreignObject>
          </svg>
        </div>
      </div>
    </section>
  );
}