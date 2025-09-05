"use client";
import Image from "next/image";
import React from "react";
import PlayButton from "../../../public/assets/about-us/icons/seeMore.svg";
import { useRouter } from "next/navigation";

const Terms = () => {
  const router = useRouter();
  return (
    <div>
      {" "}
      <div className="relative  mx-auto mt-[146px] mb-[170px] lg:px-[38px]">
        <button
          onClick={() => router.back()}
          className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10"
        >
          <Image
            src={PlayButton}
            alt="Play Button"
            width={48}
            height={48}
            className="bg-white rounded-full"
          />
        </button>

        <section
          className="relative border border-[#FEFEFE]  bg-[#FEFEFE] rounded-[58px] px-5 lg:px-[78px] py-16  lg:pb-[270px] lg:pt-32"
          style={{
            filter: "drop-shadow(0px 4px 20px rgba(0, 0, 0, 0.1))",
          }}
        >
          <div>
            <h2 className="font-[900] uppercase text-[#533115] mb-8 lg:mb-[71px]  text-3xl md:text-4xl lg:text-[64px]">
              Terms and Conditions
            </h2>
            <div className="flex flex-col gap-10 ">
              <p className="font-medium text-xl md:text-2xl lg:text-[32px] text-[#533115]">
                These Terms and Conditions (“Agreement”) govern your use of the
                studies-overseas.com website (“Website”) and our student support
                services (“Services”). By accessing or using the Website and
                Services, you agree that you have read, understood, and accepted
                the terms of this Agreement. If you do not agree, you should
                discontinue use immediately. Our Services are designed to guide
                students in applying to universities in Australia and other
                international destinations, and to support them in visa-related
                processes. While we provide professional advice and assistance,
                final admission decisions and visa outcomes are made solely by
                universities and government authorities. We do not guarantee
                admission, scholarships, or visa approval.
              </p>
              <p className="font-medium text-xl md:text-2xl lg:text-[32px] text-[#533115]">
                You agree not to misuse our Website or Services for unlawful
                purposes, including but not limited to submitting false
                information or documents, violating immigration or university
                regulations, or attempting to interfere with the functionality
                of the Website or related systems. Any such misuse may result in
                suspension or termination of your access to our Services.
              </p>
              <p className="font-medium text-xl md:text-2xl lg:text-[32px] text-[#533115]">
                All content, graphics, and materials available on this Website
                remain the intellectual property of the Operator or its
                partners. You may not copy, modify, or redistribute any part of
                the Website without written consent.
              </p>
              <p className="font-medium text-xl md:text-2xl lg:text-[32px] text-[#533115]">
                We are not liable for indirect or consequential losses arising
                from the use of our Services, including visa rejections,
                admission denials, delays, or additional costs incurred. To the
                maximum extent permitted by law, our liability is limited to the
                amount you have directly paid us for Services. You agree to
                indemnify and hold us harmless against any claims or damages
                arising from misuse of our Services or submission of fraudulent
                information.
              </p>
              <p className="font-medium text-xl md:text-2xl lg:text-[32px] text-[#533115]">
                This Agreement shall be governed by the laws of Australia, and
                any disputes shall fall under the jurisdiction of the courts of
                Sydney, Australia, unless otherwise required by applicable
                consumer protection laws.
              </p>
              <p className="font-medium text-xl md:text-2xl lg:text-[32px] text-[#533115]">
                We may update these Terms and Conditions from time to time.
                Continued use of the Website and Services will be taken as your
                acceptance of any revised terms.
              </p>
            </div>
          </div>
        </section>

        <button
          onClick={() => router.back()}
          className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 z-10"
        >
          <Image
            src={PlayButton}
            alt="Play Button"
            width={48}
            height={48}
            className="bg-white rounded-full"
          />
        </button>
      </div>
    </div>
  );
};

export default Terms;
