import React from 'react'
import { education } from '@/data/edu'
import EduCard from './EduCard'

export default function EduCatelog() {
  return (
    <>
        <div className="mt-10 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-16 sm:my-12 lg:my-1">
            {education.map((edus) => 
                <EduCard eduProps={edus} key={edus.id} />
            )}
            </div>
        </div>
    </>
  )
}
