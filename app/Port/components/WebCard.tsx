import { Box } from '@mui/material'
import React from 'react'
import { webJson } from '@/data/interface'

export default function WebCard({webProps}: {webProps: webJson}) {
  return (
        <article key={webProps.id} className="flex max-w-xl flex-col items-start justify-between bg-gray-900 p-5 rounded-md ">
        <div className="flex items-center gap-x-4 text-xs">
        <time dateTime={webProps.datetime} className="text-gray-400">
            {webProps.date}
        </time>
        <a href={webProps.category.href} className={`relative z-10 rounded-full bg-blue-800 px-3 py-1.5 font-medium text-gray-200 hover:bg-blue-900`}>
            {webProps.category.title}
        </a>
        </div>
        <div className="group relative">
        <div className="flex flex-row gap-3 items-center">
            <img src={webProps.author.imageUrl} alt="" className="h-10 w-10 rounded-full mt-2 bg-gray-50" />
            <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-gray-600 transition-all">
            <a href={webProps.href}>
                <span className="absolute inset-0" />
                {webProps.title}
            </a>
            </h3>
        </div>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-200">{webProps.description}</p>
        </div>

        <div className="relative mt-8 flex items-center gap-x-4">
        <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
            <a href={webProps.author.href}>
                <span className="absolute inset-0" />
                {webProps.author.name}
            </a>
            </p>
            <p className="text-gray-200">{webProps.author.role}</p>
        </div>
        </div>
    </article>
  )
}
