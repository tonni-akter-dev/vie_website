import { University } from "@/app/utils/data";
import React from "react";
type IProps = {
  data: University;
};
const Ranks: React.FC<IProps> = ({ data }) => {
  return (
    <div className="mb-[50px]">
      <p
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
        Ranks
      </p>
      <div
        className="text-2xl lg:text-[32px] text-black leading-normal"
        dangerouslySetInnerHTML={{ __html: data.rankings }}
      />
    </div>
  );
};

export default Ranks;
