/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useState, useEffect } from 'react'
import 'rsuite/dist/rsuite-no-reset.min.css';
import { Calendar, HStack } from 'rsuite';
import calenderScan from '../../../public/calender_scan.svg';
import Image from 'next/image';
import DotIndicator from './DotIndicator';

const ConsultationCalender = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState('');

  const handleSelect = (date: React.SetStateAction<Date>) => {
    setSelectedDate(date);
  };

  const formatDate = (date: Date) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: '2-digit'
    });
  };

  const formatTime = (date: Date) => {
    if (!date) return '';
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
  };

  useEffect(() => {
    const updateTime = () => setCurrentTime(formatTime(new Date()));
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='px-5 lg:mx-[80px] 2xl:mx-[128px] mb-[152px]'>
      <div className='bg-[#FEFEFE] mb-[30px] flex flex-wrap lg:flex-row flex-col justify-between lg:rounded-[112px] pt-12 pb-[56px] lg:ps-[43px] lg:pe-[86px]' style={{ boxShadow: "0 0 4.6px 0 rgba(0, 0, 0, 0.25)" }}>
        <div className='flex lg:flex-row flex-wrap flex-col gap-[37px]  items-end'>
          <HStack spacing={10} style={{ height: 540 }} alignItems="flex-start" className='calender_bg w-full lg:w-[711px] rounded-[112px]' wrap>
            <Calendar
              compact
              onSelect={handleSelect}
              renderTitle={(date: { getFullYear: () => string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }) => (
                <div className="text-center w-full font-bold text-sm lg:text-lg">
                  {date.getFullYear()}
                </div>
              )}
              showToday={false}
            />
          </HStack>

          {/* Date & Time Section */}
          <div className='mb-[56px]'>
            <div className='mb-[30px]'>
              <h2 className='font-bold text-[#2C2C2C] text-[48px]'>Date:</h2>
              <p className='text-[#084F3D] text-[35px] border-b border-[#084F3D]'>
                {formatDate(selectedDate)}
              </p>
            </div>
            <div>
              <h2 className='font-bold text-[#2C2C2C] text-[48px]'>Time:</h2>
              <p className='text-[#084F3D] text-[35px] border-b border-[#084F3D] w-fit'>
                {currentTime}
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className='flex flex-col justify-between items-center mb-[56px]'>
          <Image src={calenderScan} alt="" />
          <div>
            <p className='items-center text-[32px] mb-1 py-3 px-3 w-fit text-[#084F3D] font-bold flex  h-full flex-col gap-[10.5px] uppercase bg-white' style={{ boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.25)' }}>Proceed
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="175" height="3" viewBox="0 0 175 3" fill="none">
              <path d="M0 1.5H175" stroke="#084F3D" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>

        <DotIndicator width={11} height={11} spacing={10} bounceDistance={10} />

      <style jsx global>{`
        .rs-calendar-table-cell-selected .rs-calendar-table-cell-content {
          box-shadow: none !important;
          border: none !important;
          background: transparent !important;
          color: inherit !important;
        }
      `}</style>
    </div>
  );
};

export default ConsultationCalender;
