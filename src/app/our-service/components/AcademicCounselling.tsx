"use client";
import React, { useState } from "react";
import TabContent from "./TabContent";

const tabs = [
  "Academic Counselling",
  "Test Preparation",
  "Country & University Selection",
  "Application & Admission Assistance",
  "Scholarships",
  "Internship Support",
  "Education Loan Assistance",
  "Visa Guidance",
  "Allied Support Services",
];

const tabContent: Record<
  string,
  { title: string; description: string; list?: string[]; bgColor?: string }
> = {
  "Academic Counselling": {
    title: "Find Your Right Fit – Academically & Professionally",
    description:
      "Our personalised counselling sessions are designed to guide you toward academic programs that align with your long-term career aspirations. Whether you're exploring or already have a goal in mind, we help you refine your path.",
    list: [
      "Career-focused academic guidance",
      "Emphasis on emerging, in-demand courses and industries",
      "Interactive sessions with university representatives",
    ],
    bgColor: "#A5AC8A",
  },
  "Test Preparation": {
    title: "Ace Your Exams with Expert Guidance",
    description:
      "Our test prep programs ensure you're fully prepared for competitive exams with strategies tailored to your strengths.",
    list: [
      "Career-focused academic guidance",
      "Emphasis on emerging, in-demand courses and industries",
      "Interactive sessions with university representatives",
    ],
    bgColor: "#A5AC8A",
  },
  "Country & University Selection": {
    title: "Choose the Right Destination for Your Education",
    description:
      "With access to a wide network of global institutions, we help you pick the perfect country and university that suits your academic background, preferences, and budget.",
    list: [
      "Country & course selection aligned with career outcomes",
      "Comparative insights on rankings, tuition fees & scholarships",
      "Options from 900+ universities across 35+ countries",
    ],
    bgColor: "#D7D9BE",
  },
  "Application & Admission Assistance": {
    title: "Your Application, Perfected",
    description:
      "We help you prepare and submit strong applications—on time and without errors—boosting your chances of receiving offers from top institutions.",
    list: [
      "Advice on eligibility, timelines, and submission",
      "Professional SOPs, LORs, and Resumes",
      "Real-time tracking and direct coordination with universities",
    ],
    bgColor: "#F4FFE8",
  },
  Scholarships: {
    title: "Find and Secure the Scholarships You Deserve",
    description:
      "We guide you through various scholarship opportunities offered by global universities—helping you lower your cost and maximize your financial aid.",
    list: [
      "Updates on latest, high-value scholarships",
      "Expert help with scholarship applications and essays",
      "Advice on eligibility, timelines, and submission",
    ],
    bgColor: "#FFF2DE",
  },
  "Internship Support": {
    title: "Build Work Experience While You Study",
    description:
      "Internships add real-world value to your academic degree. We assist you in finding study programs that include practical work experience.",
    list: [
      "Access to programs with built-in internships",
      "Support for both paid and unpaid internship opportunities",
      "Information on work timelines and stipend structures",
    ],
    bgColor: "#F4FFE8",
  },
  "Education Loan Assistance": {
    title: "Funding Made Simple",
    description:
      "We work closely with leading financial institutions to help you secure education loans that are structured around your needs and repayment capacity.",
    list: [
      "Loan support via 20+ banks and NBFCs",
      "Financial planning tailored to university fees",
      "Help with documents, co-applicant advice, and disbursement",
    ],
    bgColor: "#FFF2DE",
  },
  "Visa Guidance": {
    title: "Visa Success with Expert Support",
    description:
      "Our experienced visa advisors ensure that your documentation is accurate and complete, giving you the highest chance of a successful outcome.",
    list: [
      "End-to-end guidance on visa paperwork",
      "Visa interview preparation sessions",
      "High visa approval success rate across destinations",
    ],
    bgColor: "#D7D9BE",
  },
  "Allied Support Services": {
    title: "Everything You Need, Beyond the Visa",
    description:
      "Moving abroad involves more than just paperwork. We help you settle into your new life with essential pre-departure services and support.",
    list: [
      "Accommodation booking and airport transfers",
      "Currency exchange & international remittance guidance",
      "Travel insurance & pre-departure orientation",
      "Health insurance",
    ],
    bgColor: "#FFF2DE",
  },
};

// SVG logic as you had before
const getSvgByIndex = (index: number) => {
  const firstType = [1, 3, 8];
  const secondType = [2, 5, 7, 9];
  const thirdType = [4, 6];

  if (firstType.includes(index)) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="66"
        height="66"
        viewBox="0 0 66 66"
        fill="none"
        className="w-[44px] h-[44px] md:w-[66px] md:h-[66px]"
      >
        <circle cx="33" cy="33" r="33" fill="#A5AC8A" />
        <path
          d="M22.1863 24H44.8138C45.4332 24 45.9528 24.2173 46.3725 24.6519C46.7923 25.0864 47.0014 25.5934 47 26.1728C47 26.3539 46.973 26.5444 46.9191 26.7443C46.8652 26.9442 46.7828 27.134 46.6721 27.3136L35.3583 45.0222C35.1397 45.3481 34.8664 45.5929 34.5385 45.7566C34.2105 45.9203 33.8644 46.0014 33.5 46C33.1357 45.9985 32.7895 45.9174 32.4616 45.7566C32.1336 45.5958 31.8604 45.351 31.6417 45.0222L20.328 27.3136C20.2187 27.1325 20.1363 26.9427 20.0809 26.7443C20.0256 26.5458 19.9986 26.3554 20.0001 26.1728C20.0001 25.5934 20.2099 25.0864 20.6297 24.6519C21.0494 24.2173 21.5683 24 22.1863 24Z"
          fill="#313131"
        />
      </svg>
    );
  } else if (secondType.includes(index)) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="66"
        height="66"
        viewBox="0 0 66 66"
        fill="none"
        className="w-[44px] h-[44px] md:w-[66px] md:h-[66px]"
      >
        <circle cx="33" cy="33" r="33" fill="#FFF2DE" />
        <path
          d="M22.1863 24H44.8138C45.4332 24 45.9528 24.2173 46.3725 24.6519C46.7923 25.0864 47.0014 25.5934 47 26.1728C47 26.3539 46.973 26.5444 46.9191 26.7443C46.8652 26.9442 46.7828 27.134 46.6721 27.3136L35.3583 45.0222C35.1397 45.3481 34.8664 45.5929 34.5385 45.7566C34.2105 45.9203 33.8644 46.0014 33.5 46C33.1357 45.9985 32.7895 45.9174 32.4616 45.7566C32.1336 45.5958 31.8604 45.351 31.6417 45.0222L20.328 27.3136C20.2187 27.1325 20.1363 26.9427 20.0809 26.7443C20.0256 26.5458 19.9986 26.3554 20.0001 26.1728C20.0001 25.5934 20.2099 25.0864 20.6297 24.6519C21.0494 24.2173 21.5683 24 22.1863 24Z"
          fill="#313131"
        />
      </svg>
    );
  } else if (thirdType.includes(index)) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="66"
        height="66"
        viewBox="0 0 66 66"
        fill="none"
        className="w-[44px] h-[44px] md:w-[66px] md:h-[66px]"
      >
        <circle cx="33" cy="33" r="33" fill="#F4FFE8" />
        <path
          d="M22.1863 24H44.8138C45.4332 24 45.9528 24.2173 46.3725 24.6519C46.7923 25.0864 47.0014 25.5934 47 26.1728C47 26.3539 46.973 26.5444 46.9191 26.7443C46.8652 26.9442 46.7828 27.134 46.6721 27.3136L35.3583 45.0222C35.1397 45.3481 34.8664 45.5929 34.5385 45.7566C34.2105 45.9203 33.8644 46.0014 33.5 46C33.1357 45.9985 32.7895 45.9174 32.4616 45.7566C32.1336 45.5958 31.8604 45.351 31.6417 45.0222L20.328 27.3136C20.2187 27.1325 20.1363 26.9427 20.0809 26.7443C20.0256 26.5458 19.9986 26.3554 20.0001 26.1728C20.0001 25.5934 20.2099 25.0864 20.6297 24.6519C21.0494 24.2173 21.5683 24 22.1863 24Z"
          fill="#313131"
        />
      </svg>
    );
  }
  return null;
};

export default function AcademicCounselling() {
  const [activeTab, setActiveTab] = useState<string | null>();

  // Split tabs into rows of 3
  const rows = [];
  for (let i = 0; i < tabs.length; i += 3) {
    rows.push(tabs.slice(i, i + 3));
  }

  return (
    <div className="">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="mb-4">
          {/* Tab Buttons */}
          <div className="flex lg:flex-nowrap flex-wrap gap-2 mb-2">
            {row.map((tab, tabIndex) => {
              const globalIndex = rowIndex * 3 + tabIndex + 1;
              const isActive = activeTab === tab;
              return (
                <div
                  onClick={() => setActiveTab(isActive ? null : tab)}
                  key={tab}
                  className="flex gap-[15px] items-center"
                >
                  <button
                    className={`px-7 lg:whitespace-nowrap  py-3 lg:py-6 rounded-full flex-1 text-[#533115] font-semibold shadow-[2px_2px_0_2px_rgba(0,0,0,0.13)] text-xl  md:text-3xl lg:text-[40px] ${
                      activeTab === tab ? "" : "bg-white"
                    }`}
                  >
                    {tab}
                  </button>
                  <div
                    className={`lg:size-[66px] size-[40px] transition-transform duration-300 ${
                      isActive ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    {getSvgByIndex(globalIndex)}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Show content after this row if active tab is in this row */}
          {row.includes(activeTab!) && activeTab && (
            <TabContent {...tabContent[activeTab]} />
          )}
        </div>
      ))}
    </div>
  );
}
