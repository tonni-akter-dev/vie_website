"use client";
import Image from "next/image";
import React from "react";
import PlayButton from "../../../public/assets/about-us/icons/seeMore.svg";
import { useRouter } from "next/navigation";

const Privacy = () => {
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
              Privacy & Policy
            </h2>
            <div className="flex flex-col gap-10 ">
              <p className="font-medium text-xl md:text-2xl lg:text-[32px] text-[#533115]">
                At Voyage International Services, we value your privacy and are
                committed to protecting the personal information you share with
                us. The details you provide, such as name, contact information,
                and academic background, are used only to assist with university
                applications, visa guidance, and related services. We do not
                sell, rent, or disclose your information to third parties
                without your consent, except where required by law.
              </p>
              <p className="font-medium text-xl md:text-2xl lg:text-[32px] text-[#533115]">
                We may use your email address or phone number to share updates,
                service information, or opportunities that may benefit your
                study plans. You can opt out of these communications at any
                time.
              </p>
              <p className="font-medium text-xl md:text-2xl lg:text-[32px] text-[#533115]">
                Our website may contain links to third-party sites for your
                convenience. Please note that we are not responsible for the
                privacy practices or content of those websites.
              </p>
              <p className="font-medium text-xl md:text-2xl lg:text-[32px] text-[#533115]">
                We may update this Privacy Policy periodically, and changes will
                be posted on this page. By continuing to use our services, you
                agree to the terms of this policy.
              </p>
            </div>
          </div>
          <div className="mt-10 lg:mt-[73px]">
            <h2 className="font-[900] uppercase text-[#533115] mb-8 lg:mb-[71px]  text-3xl md:text-4xl lg:text-[64px]">
              Website Disclaimer
            </h2>
            <div className="flex flex-col gap-10 ">
              <p className="font-medium text-xl md:text-2xl lg:text-[32px] text-[#533115]">
                The information on this website is for general guidance only.
                While we make every effort to keep it accurate and updated, we
                cannot guarantee the completeness, reliability, or suitability
                of the content. Admission decisions, visa approvals, and
                university policies remain under the authority of the respective
                institutions and governments.
              </p>
              <p className="font-medium text-xl md:text-2xl lg:text-[32px] text-[#533115]">
                Voyage International Services is not responsible for the content
                of external links provided on our website, and the inclusion of
                such links does not imply endorsement.
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

export default Privacy;
