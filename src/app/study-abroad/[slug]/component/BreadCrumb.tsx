import { University } from "@/app/utils/data";
import Link from "next/link";
import React from "react";

type IProps = {
  data: University;
};
const BreadCrumb: React.FC<IProps> = ({ data }) => {
  return (
    <div className="mt-[83px]  mb-5 md:ms-0 ms-5">
      <div className="flex lg:flex-row flex-col items-start md:items-center gap-8">
        <Link href={"/"}>
          <p className="flex text-base lg:text-xl text-[#404040] gap-0.5 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18.9996 3.00057V21.0006C18.999 21.1828 18.9488 21.3615 18.8542 21.5173C18.7597 21.673 18.6245 21.8001 18.4631 21.8848C18.3017 21.9694 18.1203 22.0085 17.9383 21.9977C17.7564 21.9869 17.5809 21.9267 17.4306 21.8236L4.43062 12.8236C3.89162 12.4506 3.89162 11.5526 4.43062 11.1786L17.4306 2.17857C17.5806 2.0744 17.7562 2.01331 17.9384 2.00194C18.1206 1.99057 18.3025 2.02936 18.4642 2.11409C18.626 2.19882 18.7614 2.32625 18.8558 2.48254C18.9502 2.63883 18.9999 2.81799 18.9996 3.00057Z"
                fill="black"
              />
            </svg>
            Back
          </p>
        </Link>
        <ul className="list-disc flex flex-wrap gap-6 md:gap-8 items-center ">
          <li className="text-base lg:text-xl text-[#404040] font-medium">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="text-base lg:text-xl text-[#404040] font-medium">Study Abroad</li>
          <li className="text-base lg:text-xl text-[#404040] font-medium">
            {data?.country}
          </li>
          <li className="text-base lg:text-xl text-black font-extrabold ">{data?.name}</li>
        </ul>
      </div>
    </div>
  );
};

export default BreadCrumb;
