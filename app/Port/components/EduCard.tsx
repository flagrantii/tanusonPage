import React from 'react'
import { eduJson } from '@/data/interface'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Image from 'next/image';
export default function EduCard({eduProps}: {eduProps: eduJson}) {
  return (
    <>
    <div className="mx-auto max-w-6xl px-6 lg:px-8 ">
        <div className="bg-gray-900 px-4 py-2 rounded-lg ">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:py-6 ">
            <div className="w-16 h-16 md:w-32 md:h-32 px-2 py-2 md:px-6 md:py-2">
                <Image src={eduProps.img} alt={eduProps.company} width={70} height={70} />
            </div>
            <div className='grid grid-cols-1 gap-1 w-full'>
                <p className="text-gray-400">{eduProps.date}</p>
                <h3 className="text-lg font-semibold text-gray-100">{eduProps.company}</h3>
                
                <div className='lg:flex gap-6'>
                <p className="text-gray-200">{eduProps.role}</p>
                <div className='flex gap-1'>
                    <LocationOnIcon sx={{color:"white"}} />
                    <p className="text-gray-200">{eduProps.location}</p>
                </div>
                </div><p className="text-gray-300 text-xs">{eduProps.description}</p>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}
