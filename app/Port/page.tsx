import React from 'react'
import Navbar from '../../components/Navbar'
import { webs } from '@/Data/web'
import { cers} from '@/Data/cert'

const CareerPath = () => {
  return (
    <>
    {/* BEGIN: projects */}
      <div className="bg-white py-6 sm:pt-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-7xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Projects</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
            On my projects page, explore a portfolio reflecting my passion for innovation. From intuitive mobile apps to robust web solutions, each project showcases my expertise and commitment to delivering high-quality, user-centric experiences in the ever-evolving landscape of technology
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {webs.map((web) => (
              <article key={web.id} className="flex max-w-xl flex-col items-start justify-between bg-gray-50 p-5 rounded-md ">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={web.datetime} className="text-gray-500">
                    {web.date}
                  </time>

                  <a href={web.category.href} className={web.style}>
                    {web.category.title}
                  </a>
                </div>

                <div className="group relative">
                  <div className="flex flex-row gap-3 items-center">
                    <img src={web.author.imageUrl} alt="" className="h-10 w-10 rounded-full mt-2 bg-gray-50" />
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={web.href}>
                        <span className="absolute inset-0" />
                        {web.title}
                      </a>
                    </h3>
                  </div>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{web.description}</p>
                </div>

                <div className="relative mt-8 flex items-center gap-x-4">
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={web.author.href}>
                        <span className="absolute inset-0" />
                        {web.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{web.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      {/* END: projects */}

        {/* BEGIN: career */}
      <div className="bg-white sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-7xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Career</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
            Embarking on a dynamic tech career, I leverage creativity and adaptability to navigate challenges. Passionate about shaping innovative solutions, I thrive in collaborative environments, driving impactful results. Continuous learning fuels my growth as I contribute to cutting-edge projects, making a meaningful impact on the tech landscape
            </p>
          </div>
          
          <div className="mt-10 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 sm:my-12 lg:my-1">
              <div className="mx-auto max-w-6xl px-6 lg:px-8 ">
                <div className="bg-gray-100 p-4 rounded-lg ">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-4 sm:py-6 ">
                    <img src='ever.jpg'className="w-16 h-16 md:w-40 md:h-24 rounded-full bg-gray-200"></img>
                    <div className='grid grid-cols-1 gap-1'>
                      <p className="text-gray-500">August 2023 - November 2023</p>
                      <h3 className="text-lg font-semibold">Ever Medical Technologies</h3>
                      
                      <div className='lg:flex gap-6'>
                        <p className="text-gray-600">FullStack Developer</p>
                        <div className='flex'>
                          <img src="/placeholder (2).png" alt="" className='w-4 h-4 mt-1' />
                          <p className="text-gray-600">Bangkok</p>
                        </div>
                      </div>

                      <p className="text-gray-600 text-xs">Develop and document the feature report functionality using web technologies and standards.
                        Enhance the UX/UI design of the web features using best practices and user feedback.
                        Implement and test the API fetching of the report database using appropriate tools and methods</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END: career */}

          {/* BEGIN: cer */}
          <div className="bg-white py-6 sm:pt-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-7xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Certificates</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
            Start your journey of skill mastery. express creativity adaptability and enthusiasm for creating innovative solutions. Thrive in a collaborative environment. Achieve impactful results Driven by a commitment to continuous learning
            </p>
          </div>

          <div className="mx-auto mt-10 mb-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {cers.map((cer) => (
              <article key={cer.id} className="flex max-w-xl flex-col items-start justify-between bg-gray-50 p-5 rounded-md ">
                <div className="group relative">
                  <div className="flex flex-row gap-3 items-center">
                    <img src={cer.author.imageUrl} alt="" className="h-10 w-10 rounded-full mt-2 bg-gray-50" />
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={cer.href}>
                        <span className="absolute inset-0" />
                        {cer.title}
                      </a>
                    </h3>
                  </div>
                  <div className="flex items-center gap-x-4 text-xs mt-5">
                  <time dateTime={cer.datetime} className="text-gray-500">
                    {cer.date}
                  </time>

                  <a href={cer.href} className={cer.style}>
                    {cer.category.title}
                  </a>
                  <p>{cer.category.org}</p>
                </div>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{cer.description}</p>
                </div>

                <div className='flex xs:grid xs:grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-3 gap-2 flex-wrap'>
                  {cer.skills?.map((skill) => (
                      <div className='flex'>
                          <span className='inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-400 ring-1 ring-inset ring-gray-600/10'>
                            {skill}
                          </span>
                        </div>
                  ))}
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={cer.author.cersimage} alt="" className='lg:w-200 lg:h-100' />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      {/* END: cer */}
    </>
  )
}

export default CareerPath
