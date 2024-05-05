import React from 'react'
import WebCard from './WebCard'
import { webs } from '@/data/web'
import { webJson } from '@/data/interface'

export default function WebCatelog() {
  return (
    <>
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {webs.map((webs) => 
            <WebCard webProps={webs} key={webs.id} />
        )}
      </div>
    </>
  )
}
