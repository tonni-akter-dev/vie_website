import { University } from "@/app/utils/data";
import React from "react";
type IProps = {
  data: University;
};

const RatingCards: React.FC<IProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center mb-[108px]">
      <div className="bg-[#A5AC8A] py-5">
        <h3 className="text-black font-bold text-[40px] uppercase">
          {data?.acceptanceRate}
        </h3>
        <h3 className="text-black font-normal text-2xl uppercase">
          Acceptance Rate
        </h3>
      </div>
      <div className="bg-[#C2C4AC] py-5">
        <h3 className="text-black font-bold text-[40px] uppercase">
          {data?.totalInternationalStudents}
        </h3>
        <h3 className="text-black font-normal text-2xl uppercase">
          Total International Students
        </h3>
      </div>
      <div className="bg-[#A5AC8A] py-5">
        <h3 className="text-black font-bold text-[40px] uppercase">
          {data?.placementRate}
        </h3>
        <h3 className="text-black font-normal text-2xl uppercase">
          Placement Rate
        </h3>
      </div>
      <div className="bg-[#C2C4AC] py-5">
        <h3 className="text-black font-bold text-[40px] uppercase">
          {data?.studentTeacherRatio}
        </h3>
        <h3 className="text-black font-normal text-2xl uppercase">
          Student Teacher Ratio
        </h3>
      </div>
    </div>
  );
};

export default RatingCards;
