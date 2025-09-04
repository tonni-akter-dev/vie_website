"use client";
import { universityData } from "@/app/utils/data";
import BreadCrumb from "./BreadCrumb";
import UniBanner from "./UniBanner";
import { useParams } from "next/navigation";
import RatingCards from "./RatingCards";
import Overview from "./Overview";
import Ranks from "./Ranks";
import Intakes from "./Intakes";

const UniDetails = () => {
  const { slug } = useParams(); 
  const uni = universityData.find(u => u.id === Number(slug));

  console.log("University:", uni);

  if (!uni) return <div>University not found</div>;

  return (
    <div className="bg-[#FBFBFB] lg:px-[100px] px-5">
      <BreadCrumb data={uni} />
      <UniBanner data={uni} />
      <RatingCards data={uni} />
      <Overview data={uni} />
      <Ranks data={uni} />
      <Intakes data={uni} />
    </div>
  );
};

export default UniDetails;
