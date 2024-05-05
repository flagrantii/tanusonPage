import React from 'react'
import { certJson } from '@/data/interface'

export default function CertCard({certProps}: {certProps: certJson}) {
  return (
    <>
        <article key={certProps.id} className="flex max-w-xl flex-col items-start justify-between bg-gray-50 p-5 rounded-md ">
            <div className="group relative">
                <div className="flex flex-row gap-3 items-center">
                <img src={certProps.author.imageUrl} alt="" className="h-10 w-10 rounded-full mt-2 bg-gray-50" />
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={certProps.href}>
                    <span className="absolute inset-0" />
                    {certProps.title}
                    </a>
                </h3>
                </div>
                <div className="flex items-center gap-x-4 text-xs mt-5">
                <time dateTime={certProps.datetime} className="text-gray-500">
                {certProps.date}
                </time>

                <a href={certProps.href} className={certProps.style}>
                {certProps.category.title}
                </a>
                <p>{certProps.category.org}</p>
            </div>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{certProps.description}</p>
            </div>

            <div className='flex xs:grid xs:grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-3 gap-2 flex-wrap'>
                {certProps.skills?.map((skill) => (
                    <div className='flex'>
                        <span className='inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-600/10'>
                        {skill}
                        </span>
                    </div>
                ))}
            </div>
            <div className="relative mt-8 flex items-center gap-x-4">
                <img src={certProps.author.cersimage} alt="" className='lg:w-200 lg:h-100' />
            </div>
        </article>
    </>
  )
}
