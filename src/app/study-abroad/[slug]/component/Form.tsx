import { University } from "@/app/utils/data";
import React from "react";
import user from "../../../../../public/user.svg";
import Image from "next/image";

type IProps = {
  data: University;
};

const FormDetails: React.FC<IProps> = ({ data }) => {
  return (
    <div className=" w-full lg:w-[569px]">
      <div className="bg-[#C2C4AC] py-[17px] text-center ">
        <h4 className="text-black text-xl font-bold uppercase mb-1.5">
          Want to Study {data?.country}?
        </h4>
        <p className="text-black text-xl font-normal uppercase">
          Fill in your details and {`we'll`} call you back
        </p>
      </div>
      <div
        className="px-10 py-[34px] bg-white  "
        style={{ boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.25)" }}
      >
        <div className="flex flex-col gap-[21px]">
          <div className="relative border border-[#8E8E8E] h-[46px] ">
            <input
              type="text"
              className="w-full h-full ps-11 text-xl text-[#BEBCBC] "
              placeholder="Your Full Name "
            />
            <span className="absolute left-3 top-4 ">
              <Image src={user} alt="" />
            </span>
          </div>
          <div className="relative border border-[#8E8E8E] h-[46px] ">
            <input
              type="text"
              className="w-full h-full ps-11 text-xl text-[#BEBCBC] "
              placeholder="Email Address "
            />
            <span className="absolute left-3 top-4 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="11"
                viewBox="0 0 14 11"
                fill="none"
              >
                <path
                  d="M12.6 0H1.4C0.63 0 0.00699999 0.61875 0.00699999 1.375L0 9.625C0 10.3813 0.63 11 1.4 11H12.6C13.37 11 14 10.3813 14 9.625V1.375C14 0.61875 13.37 0 12.6 0ZM12.32 2.92188L7.371 5.96063C7.147 6.09812 6.853 6.09812 6.629 5.96063L1.68 2.92188C1.60981 2.88318 1.54834 2.83089 1.49932 2.76819C1.4503 2.70548 1.41474 2.63366 1.3948 2.55707C1.37486 2.48048 1.37095 2.40071 1.38331 2.32259C1.39567 2.24447 1.42404 2.16962 1.4667 2.10258C1.50936 2.03554 1.56543 1.9777 1.63151 1.93256C1.69759 1.88742 1.77231 1.85591 1.85115 1.83996C1.92998 1.824 2.0113 1.82391 2.09017 1.83971C2.16904 1.85551 2.24382 1.88687 2.31 1.93187L7 4.8125L11.69 1.93187C11.7562 1.88687 11.831 1.85551 11.9098 1.83971C11.9887 1.82391 12.07 1.824 12.1489 1.83996C12.2277 1.85591 12.3024 1.88742 12.3685 1.93256C12.4346 1.9777 12.4906 2.03554 12.5333 2.10258C12.576 2.16962 12.6043 2.24447 12.6167 2.32259C12.629 2.40071 12.6251 2.48048 12.6052 2.55707C12.5853 2.63366 12.5497 2.70548 12.5007 2.76819C12.4517 2.83089 12.3902 2.88318 12.32 2.92188Z"
                  fill="#BCBCBC"
                />
              </svg>
            </span>
          </div>
          <div className="relative border border-[#8E8E8E] h-[46px] ">
            <input
              type="text"
              className="w-full h-full ps-11 text-xl text-[#BEBCBC] "
              placeholder="Mobile Number"
            />
            <span className="absolute left-3 top-4 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
              >
                <path
                  d="M12 8.99967L8.48636 8.55908L6.80622 10.3792C4.91365 9.33621 3.37529 7.66966 2.4125 5.61938L4.09931 3.792L3.69261 0H0.0189601C-0.36774 7.35286 5.21274 13.3984 12 12.9795V8.99967Z"
                  fill="#BCBCBC"
                />
              </svg>
            </span>
          </div>
          <div className="relative border border-[#8E8E8E] h-[46px] ">
            <input
              type="text"
              className="w-full h-full ps-11 text-xl text-[#BEBCBC] "
              placeholder="Course"
            />
            <span className="absolute left-3 top-4 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
              >
                <path
                  d="M0 16H14V0H0V16ZM8.55711 4.13673L6.61422 5.63636V1.45455H10.5V5.63636L8.55711 4.13673Z"
                  fill="#BCBCBC"
                />
              </svg>
            </span>
          </div>
          <div className="relative border border-[#8E8E8E] h-[46px] ">
            <input
              type="text"
              className="w-full h-full ps-11 text-xl text-[#BEBCBC] "
              placeholder="Preferred Year"
            />
            <span className="absolute left-3 top-4 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  opacity="0.5"
                  d="M14 5.6H0V11.9C0 12.457 0.221249 12.9911 0.615076 13.3849C1.0089 13.7788 1.54305 14 2.1 14H11.9C12.457 14 12.9911 13.7788 13.3849 13.3849C13.7788 12.9911 14 12.457 14 11.9V5.6ZM3.5 4.2C3.31435 4.2 3.1363 4.12625 3.00503 3.99497C2.87375 3.8637 2.8 3.68565 2.8 3.5V0.7C2.8 0.514348 2.87375 0.336301 3.00503 0.205025C3.1363 0.0737498 3.31435 0 3.5 0C3.68565 0 3.8637 0.0737498 3.99497 0.205025C4.12625 0.336301 4.2 0.514348 4.2 0.7V3.5C4.2 3.68565 4.12625 3.8637 3.99497 3.99497C3.8637 4.12625 3.68565 4.2 3.5 4.2ZM10.5 4.2C10.3143 4.2 10.1363 4.12625 10.005 3.99497C9.87375 3.8637 9.8 3.68565 9.8 3.5V0.7C9.8 0.514348 9.87375 0.336301 10.005 0.205025C10.1363 0.0737498 10.3143 0 10.5 0C10.6857 0 10.8637 0.0737498 10.995 0.205025C11.1263 0.336301 11.2 0.514348 11.2 0.7V3.5C11.2 3.68565 11.1263 3.8637 10.995 3.99497C10.8637 4.12625 10.6857 4.2 10.5 4.2Z"
                  fill="#BCBCBC"
                />
                <path
                  d="M11.9 1.40039H11.2V3.50039C11.2 3.68604 11.1263 3.86409 10.995 3.99537C10.8637 4.12664 10.6857 4.20039 10.5 4.20039C10.3143 4.20039 10.1363 4.12664 10.005 3.99537C9.87375 3.86409 9.8 3.68604 9.8 3.50039V1.40039H4.2V3.50039C4.2 3.68604 4.12625 3.86409 3.99497 3.99537C3.8637 4.12664 3.68565 4.20039 3.5 4.20039C3.31435 4.20039 3.1363 4.12664 3.00503 3.99537C2.87375 3.86409 2.8 3.68604 2.8 3.50039V1.40039H2.1C1.54305 1.40039 1.0089 1.62164 0.615076 2.01547C0.221249 2.40929 0 2.94344 0 3.50039V5.60039H14V3.50039C14 2.94344 13.7788 2.40929 13.3849 2.01547C12.9911 1.62164 12.457 1.40039 11.9 1.40039Z"
                  fill="#BCBCBC"
                />
              </svg>
            </span>
          </div>
        </div>
        <button className="bg-[#A5AC8A] py-1 px-7 text-2xl w-fit mx-auto font-bold   mt-[30px]">
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default FormDetails;
