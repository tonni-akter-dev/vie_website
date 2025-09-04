import { University } from "@/app/utils/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type IProps = {
  data: University;
};

const UniBanner: React.FC<IProps> = ({ data }) => {
  return (
    <div className="mb-[38px] flex lg:flex-row flex-col h-full lg:h-[440px]">
      <div
        className="lg:w-[475px] w-full bg-[#F5F5F5] px-6 pt-5 pb-8 flex flex-col justify-center items-start text-start"
        style={{ boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.25)" }}
      >
        <Image
          className="w-[310px] h-[197px] mb-[34px] mx-auto"
          style={{
            mixBlendMode: "darken",
            aspectRatio: "107/68",
          }}
          src={data.image}
          alt=""
        />
        <h3 className="text-[26px] text-[#313131] font-extrabold">
          {data.name}
        </h3>
        <p className="text-black font-normal mb-1 text-base">
          Sydney and Canberra, Australia{" "}
        </p>
        <p className="text-black font-normal mb-[35px] text-base hover:underline">
          <Link
            href={
              data.website.startsWith("http")
                ? data.website
                : `https://${data.website}`
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.website}
          </Link>
        </p>
        <div className="mx-auto">
          <button className="text-white text-xl font-medium py-1 px-2.5 bg-[#D43C18] rounded-[11px]">
            Apply with VIE Services
          </button>
        </div>
      </div>

      <div className="flex-1">
        <Image className="h-full object-cover " src={data.uniBanner} alt="" />
      </div>
    </div>
  );
};

export default UniBanner;
