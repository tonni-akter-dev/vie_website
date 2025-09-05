"use client";
import React, { useState } from "react";
import DotIndicator from "./DotIndicator";
import { faqData } from "../utils/data";

const FaqItem = ({
  faq,
  index,
  isActive,
  onClick,
}: {
  faq: { question: string; answer: string };
  index: number;
  isActive: boolean;
  onClick: () => void;
}) => {
  const isEven = index % 2 === 0;
  return (
    <div className="flex flex-col items-center justify-center mb-8">
      <div
        onClick={onClick}
        className={`${
          isEven
            ? "bg-[#FFF2DE] hover:bg-[#EEDEC7]"
            : "bg-[#EEDEC7] hover:bg-[#FFF2DE]"
        } cursor-pointer transition-all ease-in-out duration-300 rounded-[22px] xl:h-[111px] flex justify-center items-center w-full text-center relative`}
        style={{ boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.25)" }}
      >
        <p className="text-[#533115] text-[28px] font-medium">{faq.question}</p>
        <div className="absolute bottom-[-27px]">
          {isActive ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
            >
              <circle cx="20.5" cy="20.5" r="20.5" fill="#533115" />
              <path
                d="M30.0051 32L21.0071 22.9936L12.009 32L10 29.9923L19.0122 21L10 12.0077L12.009 10L21.0071 19.0064L30.0051 10.0141L32 12.0077L23.0019 21L32 29.9923L30.0051 32Z"
                fill="white"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
              className="transition-all duration-300"
            >
              <circle cx="20.5" cy="20.5" r="20.5" fill="#533115" />
              <path
                d="M29.75 17.375H23.25V11.125C23.25 10.2962 22.9076 9.50134 22.2981 8.91529C21.6886 8.32924 20.862 8 20 8C19.138 8 18.3114 8.32924 17.7019 8.91529C17.0924 9.50134 16.75 10.2962 16.75 11.125L16.8654 17.375H10.25C9.38805 17.375 8.5614 17.7042 7.9519 18.2903C7.34241 18.8763 7 19.6712 7 20.5C7 21.3288 7.34241 22.1237 7.9519 22.7097C8.5614 23.2958 9.38805 23.625 10.25 23.625L16.8654 23.5141L16.75 29.875C16.75 30.7038 17.0924 31.4987 17.7019 32.0847C18.3114 32.6708 19.138 33 20 33C20.862 33 21.6886 32.6708 22.2981 32.0847C22.9076 31.4987 23.25 30.7038 23.25 29.875V23.5141L29.75 23.625C30.612 23.625 31.4386 23.2958 32.0481 22.7097C32.6576 22.1237 33 21.3288 33 20.5C33 19.6712 32.6576 18.8763 32.0481 18.2903C31.4386 17.7042 30.612 17.375 29.75 17.375Z"
                fill="white"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

const FaqList = () => {
  const [activeFaqIndexByRow, setActiveFaqIndexByRow] = useState<
    Record<number, number | null>
  >({});

  const getItemsPerRow = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1280) return 3; 
      if (window.innerWidth >= 768) return 2; 
    }
    return 1; // mobile
  };

  const [itemsPerRow, setItemsPerRow] = useState(getItemsPerRow());

  // Update on resize
  React.useEffect(() => {
    const handleResize = () => setItemsPerRow(getItemsPerRow());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Split FAQ into rows dynamically
  const rows = [];
  for (let i = 0; i < faqData.length; i += itemsPerRow) {
    rows.push(faqData.slice(i, i + itemsPerRow));
  }

  return (
    <div className="px-5 lg:mx-[149px] mb-[156px]">
      <h2 className="uppercase text-[#533115] text-center text-[36px] lg:text-[64px] font-[900] leading-normal mb-10">
        frequently asked questions
      </h2>
      <div className="mb-4">
        <DotIndicator width={11} height={11} spacing={10} bounceDistance={10} />
      </div>

      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="mb-4">
          <div
            className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2`}
          >
            {row.map((faq, index) => {
              const globalIndex = rowIndex * itemsPerRow + index;
              const isActive = activeFaqIndexByRow[rowIndex] === globalIndex;
              return (
                <FaqItem
                  key={globalIndex}
                  faq={faq}
                  index={globalIndex}
                  isActive={isActive}
                  onClick={() =>
                    setActiveFaqIndexByRow((prev) => ({
                      ...prev,
                      [rowIndex]: isActive ? null : globalIndex,
                    }))
                  }
                />
              );
            })}
          </div>

          {/* Show content for the active FAQ below the row */}
          {typeof activeFaqIndexByRow[rowIndex] === "number" && (
            <div className="px-6 py-6 bg-[#EEDEC7] rounded-[29px] ps-[54px] text-[#533115] text-[20px] transition-all duration-500">
              <h4 className="text-[22px] font-[900] text-[#533115] mb-4">
                Q: {faqData[activeFaqIndexByRow[rowIndex]!]?.question}
              </h4>
              <p className="text-[22px] font-bold text-[#533115] ">
                {faqData[activeFaqIndexByRow[rowIndex]!]?.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqList;
