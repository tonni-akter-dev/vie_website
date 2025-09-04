import { University } from "@/app/utils/data";
import Link from "next/link";
import React from "react";
import FormDetails from "./Form";
type IProps = {
  data: University;
};

const Overview: React.FC<IProps> = ({ data }) => {
  return (
    <div className="flex lg:flex-row flex-col gap-[84px] mb-[50px]">
      <div className="flex-1">
        <Link
          href="#"
          className="
     text-black
    font-bold
    text-4xl lg:text-[48px] mb-6
    font-[Creato Display]
     underline
    underline-offset-auto
    decoration-solid
mb-6"
        >
          Overview
        </Link>
        <div
          className="text-2xl lg:text-[32px] text-black leading-normal"
          dangerouslySetInnerHTML={{ __html: data.overview }}
        />
      </div>
      <div>
        <FormDetails data={data} />
      </div>
    </div>
  );
};

export default Overview;
