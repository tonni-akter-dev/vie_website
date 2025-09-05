"use client";
import { University, universityData } from "@/app/utils/data";
import React, { useState } from "react";

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUni, setSelectedUni] = useState<University | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    const uni = universityData.find((u: University) =>
      u.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSelectedUni(uni || null);
  };

  return (
    <div className="flex justify-center items-center h-full flex-col gap-1 lg:mx-0 mx-5">
      <div className="flex lg:flex-row flex-col items-start gap-3 lg:w-fit w-full ">
        <button onClick={handleSearchClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="57"
            height="57"
            viewBox="0 0 57 57"
            fill="none"
          >
            <g filter="url(#filter0_d_1_3528)">
              <circle cx="28.5" cy="27.5" r="25.5" fill="#084F3D" />
            </g>
            <path
              d="M35.1555 31.4969H33.7553L33.259 31.0183C35.0562 28.934 36.0438 26.273 36.0417 23.5209C36.0417 21.2423 35.3661 19.0148 34.1001 17.1202C32.8342 15.2256 31.0349 13.749 28.9297 12.877C26.8246 12.005 24.5081 11.7768 22.2733 12.2214C20.0384 12.6659 17.9856 13.7632 16.3744 15.3744C14.7632 16.9856 13.6659 19.0384 13.2214 21.2733C12.7768 23.5081 13.005 25.8246 13.877 27.9297C14.749 30.0349 16.2256 31.8342 18.1202 33.1001C20.0148 34.3661 22.2423 35.0417 24.5209 35.0417C27.3745 35.0417 29.9977 33.996 32.0183 32.259L32.4969 32.7553V34.1555L41.3591 43L44 40.3591L35.1555 31.4969ZM24.5209 31.4969C20.1075 31.4969 16.5449 27.9342 16.5449 23.5209C16.5449 19.1075 20.1075 15.5449 24.5209 15.5449C28.9342 15.5449 32.4969 19.1075 32.4969 23.5209C32.4969 27.9342 28.9342 31.4969 24.5209 31.4969Z"
              fill="white"
            />
            <defs>
              <filter
                id="filter0_d_1_3528"
                x="0"
                y="0"
                width="57"
                height="57"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feMorphology
                  radius="1"
                  operator="dilate"
                  in="SourceAlpha"
                  result="effect1_dropShadow_1_3528"
                />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="1" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1_3528"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_3528"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </button>
        <div className="flex flex-col w-full gap-1 items-center">
          <div className="relative rounded-xl bg-white w-full lg:w-[717px]">
            <input
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              className="bg-white focus-outline-0 p-4 w-full lg:w-[717px] border border-[#16AA83] 
      rounded-xl  h-[51px]"
              name=""
              id=""
            />
            <span className="absolute right-5 top-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="22"
                viewBox="0 0 17 22"
                fill="none"
              >
                <path
                  d="M12 4.5C12 2.567 10.433 1 8.5 1C6.567 1 5 2.567 5 4.5V11C5 12.933 6.567 14.5 8.5 14.5C10.433 14.5 12 12.933 12 11V4.5Z"
                  stroke="#084F3D"
                  stroke-width="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 10.5C1 14.642 4.358 18 8.5 18M8.5 18C12.642 18 16 14.642 16 10.5M8.5 18V21"
                  stroke="#084F3D"
                  stroke-width="2"
                  stroke-linecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="224"
            height="2"
            viewBox="0 0 224 2"
            fill="none"
          >
            <path d="M0 1H223.5" stroke="#084F3D" />
          </svg>

          {/* rankings */}

          <div
            className="grid grid-cols-2 border border-[#16AA83] 
      rounded-xl  h-[99px] ps-[38px] pt-[22px] pb-[28px] bg-white w-full"
          >
            <div className="flex items-start gap-2.5">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M40.1316 15.9043C40.1316 17.9929 39.7144 20.061 38.9038 21.9906C38.0931 23.9202 36.905 25.6735 35.4071 27.1503C33.9092 28.6272 32.131 29.7987 30.174 30.598C28.2169 31.3972 26.1194 31.8086 24.0011 31.8086C21.8828 31.8086 19.7853 31.3972 17.8282 30.598C15.8712 29.7987 14.093 28.6272 12.5951 27.1503C11.0973 25.6735 9.90909 23.9202 9.09845 21.9906C8.28782 20.061 7.87059 17.9929 7.87059 15.9043C7.87059 11.6862 9.57005 7.6409 12.5951 4.65826C15.6202 1.67563 19.723 0 24.0011 0C28.2792 0 32.382 1.67563 35.4071 4.65826C38.4322 7.6409 40.1316 11.6862 40.1316 15.9043ZM23.8897 7.64603L26.7463 12.4744L31.6434 13.6793L28.3787 17.3006L29.1949 22.9337L23.8897 20.5195L18.5868 22.9337L19.4029 17.3006L16.1382 13.6793L21.0353 12.4722L23.8897 7.64603ZM0 40.4421L7.99412 26.7877C9.49019 28.9303 11.4135 30.7497 13.6466 32.1348C15.8798 33.5199 18.3758 34.4417 20.9824 34.8437L13.2772 48L10.4493 37.7103L0 40.4377V40.4421ZM34.7206 48L27.0177 34.8416C29.624 34.4397 32.1199 33.5183 34.3531 32.1336C36.5862 30.7489 38.5096 28.9299 40.0059 26.7877L48 40.4399L37.5485 37.7103L34.7228 47.9978L34.7206 48Z"
                    fill="#084F3D"
                  />
                </svg>
              </p>
              <div>
                <p className="text-xl font-medium  text-[#084F3D]">Ranking</p>
                <p className="text-xl font-medium  text-[#084F3D]">
                  {" "}
                  {selectedUni ? selectedUni.numericRanking : "-"}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="43"
                  height="45"
                  viewBox="0 0 43 45"
                  fill="none"
                >
                  <path
                    d="M42.6134 11.965L21.9124 0.102369C21.7848 0.0351207 21.643 0 21.499 0C21.3551 0 21.2132 0.0351207 21.0856 0.102369L0.38461 11.965C0.0208539 12.1819 -0.111421 12.6323 0.103526 12.9994C0.188262 13.1359 0.312593 13.2427 0.459618 13.3054C0.606643 13.3681 0.769232 13.3836 0.925284 13.3498H1.70736V15.6188C1.70736 16.2028 2.17032 16.6699 2.74903 16.6699H3.32773V16.9869C3.32773 17.7377 3.92297 18.3384 4.66701 18.3384H4.95967V38.3429H4.65048C3.90643 38.3429 3.31119 38.9436 3.31119 39.6944V39.9947H1.07905C0.500351 39.9947 0.0373882 40.4619 0.0373882 41.0458V45H42.9441V41.0458C42.9441 40.4619 42.4811 39.9947 41.9024 39.9947H39.6372V39.6944C39.6372 38.9436 39.042 38.3429 38.2979 38.3429H37.9838V18.3384H38.3145C39.0585 18.3384 39.6537 17.7377 39.6537 16.9869V16.6699H40.2821C40.8608 16.6699 41.3237 16.2028 41.3237 15.6188V13.3498H42.0661C42.1205 13.3609 42.1759 13.3665 42.2314 13.3664C42.496 13.3664 42.7606 13.233 42.8928 12.9994C43.1078 12.6323 42.992 12.1652 42.6117 11.965M31.3849 39.9947H30.2936V39.6944C30.2936 38.9436 29.6984 38.3429 28.9544 38.3429H28.6237V18.3384H28.9544C29.6984 18.3384 30.2936 17.7377 30.2936 16.9869V16.6699H31.4014V16.9869C31.4014 17.7377 31.9967 18.3384 32.7407 18.3384H33.0383V38.3429H32.7242C31.9801 38.3429 31.3849 38.9436 31.3849 39.6944V39.9947ZM22.043 39.9947H20.9186V39.6944C20.9186 38.9436 20.3234 38.3429 19.5794 38.3429H19.2652V18.3384H19.5794C20.3234 18.3384 20.9186 17.7377 20.9186 16.9869V16.6699H22.043V16.9869C22.043 17.7377 22.6382 18.3384 23.3823 18.3384H23.6799V38.3429H23.3823C22.6382 38.3429 22.043 38.9436 22.043 39.6944V39.9947ZM12.668 39.9947H11.5602V39.6944C11.5602 38.9436 10.965 38.3429 10.2209 38.3429H9.91998V18.3384H10.2391C10.9831 18.3384 11.5784 17.7377 11.5784 16.9869V16.6699H12.6696V16.9869C12.6696 17.7377 13.2649 18.3384 14.0089 18.3384H14.3231V38.3429H14.0089C13.2649 38.3429 12.6696 38.9436 12.6696 39.6944L12.668 39.9947ZM5.13493 13.3331L21.499 4.0282L37.8631 13.3331H5.13493Z"
                    fill="#084F3D"
                  />
                </svg>
              </p>
              <div>
                <p className="text-xl font-medium  text-[#084F3D]">
                  Established
                </p>
                <p className="text-xl font-medium  text-[#084F3D]">
                  {" "}
                  {selectedUni ? selectedUni.established : "-"}
                </p>
              </div>
            </div>
          </div>
          {/* rankings */}
          <textarea
            name=""
            className="border border-[#16AA83] 
      rounded-xl  h-[166px] p-4 bg-white w-full focus-outline-0"
            rows={40}
            id=""
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
