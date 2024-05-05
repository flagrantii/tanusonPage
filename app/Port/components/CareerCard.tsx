import React from 'react'
import { careerJson } from '@/data/interface'
export default function CareerCard({careerProps}: {careerProps: careerJson}) {
  return (
    <>
    <div className="mx-auto max-w-6xl px-6 lg:px-8 ">
        <div className="bg-gray-900 p-4 rounded-lg ">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 sm:py-6 ">
            <div className="w-16 h-16 md:w-40 md:h-24 rounded-full bg-gray-400"></div>
            <div className='grid grid-cols-1 gap-1'>
                <p className="text-gray-400">{careerProps.date}</p>
                <h3 className="text-lg font-semibold text-gray-100">{careerProps.company}</h3>
                
                <div className='lg:flex gap-6'>
                <p className="text-gray-200">{careerProps.role}</p>
                <div className='flex'>
                    <img src={careerProps.img} alt="" className='w-4 h-4 mt-1' />
                    <p className="text-gray-200">{careerProps.location}</p>
                </div>
                </div>

                <p className="text-gray-300 text-xs">{careerProps.description}</p>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}
