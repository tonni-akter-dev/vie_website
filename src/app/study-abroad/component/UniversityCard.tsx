import Image from 'next/image'
import React from 'react'

const UniversityCard = ({ datas }) => {
    return (
        <div className="bg-white rounded-[60px] shadow-lg p-6 max-w-sm mx-auto">
            <div className="flex justify-center mb-4">
                <div className=" flex items-center justify-center">
                    <Image className='h-[200px]' src={datas.image} alt="" />
                </div>
            </div>
            <h2 className="text-xl font-semibold text-center mb-2">{datas.name}</h2>
            <div className="flex items-center justify-center mb-2">
                <span className="text-sm text-gray-600">{datas.country}</span>
            </div>
            <p className="text-center text-blue-600 mb-4 hover:underline">
                <a href={datas.website} target="_blank" rel="noopener noreferrer">
                    {datas.website}
                </a>
            </p>
            <div className="flex justify-center space-x-4">
                <button className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800">
                    Know More
                </button>
                <button className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800">
                    Apply Now
                </button>
            </div>
        </div>
    )
}

export default UniversityCard