import React from "react";

interface TabContentProps {
  title: string;
  description: string;
  list?: string[];
  bgColor?: string;
}

const TabContent: React.FC<TabContentProps> = ({
  title,
  description,
  list,
  bgColor = "#A5AC8A",
}) => {
  return (
    <div className="flex flex-col justify-between lg:flex-row gap-8 mt-[70px]">
      {/* Left Content */}
      <div className=" max-w-[1044px]">
        <h2 className="text-[45px] font-extrabold text-[#533115] mb-[37px]">
          {title}
        </h2>
        <p className="text-[28px] text-black mb-4">{description}</p>
      </div>

      {/* Right Box */}
      <div
        className="py-[52px] px-[43px] rounded-lg relative w-full lg:w-[487px] mb-[88px]"
        style={{ backgroundColor: bgColor }}
      >
        <div className="absolute top-0 right-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="72"
            viewBox="0 0 56 72"
            fill="none"
          >
            <path d="M0 72V0H56V72L28 60L0 72Z" fill="#5C130D" />
          </svg>
        </div>
        <h3 className="font-[900] text-[40px] mb-[31px] text-[#2C2C2C]">
          What We Offer
        </h3>
        {list && (
          <ul className="list-disc list-inside space-y-2">
            {list.map((item, idx) => (
              <li key={idx} className="text-[29px] text-black font-normal">
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TabContent;
