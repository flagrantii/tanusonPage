import React from 'react'

export default function page() {
  return (
    <>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col lg:flex-row justify-between pb-12 mt-20">
        <div className="w-full lg:w-5/12">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-white pb-4">About Us</h1>
          <p className="font-normal text-base leading-6 text-white pb-8">
              A motivated and highly detail-oriented Software Engineer with a proven track record of designing, developing, and implementing innovative software solutions. Studied at Chulalongkorn University in CEDT. Proficient in full-stack development, with expertise in front-end and back-end technologies. Skilled in problem-solving and troubleshooting to ensure optimal functionality and performance. Continuously staying abreast of emerging technologies and industry trends to drive the adoption of best practices. Committed to delivering excellence in every phase of the software development life cycle.
            </p>
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-white pb-4">Our Story</h1>
          <p className="font-normal text-base leading-6 text-white">Since the sixth grade, I attended a school where I explored various initiatives, studies, and hobbies—all centered around computers. This experience clearly highlighted my future interests and how I should progress in the tech industry. The school offered an unprecedented scale and diversity of opportunities that allowed me to broaden, challenge, and adjust my worldview over six years of study.</p>
          <p className="font-normal text-base leading-6 text-white">My involvement in PCCNST's tech and innovation initiatives provided a platform to exercise my creative muscles, ignited my passion for design, and enhanced my ability to handle adversity. Additionally, my participation in a camp at ThaiHeath allowed me to discover my love for building products that positively impact people's lives.</p>
          <p className="font-normal text-base leading-6 text-white">PCCNST played a pivotal role in showing me what I love to do, fostering a love for continuous learning, and surrounding me with a wealth of inspiring peers.</p>
          
        </div>
        <div className="w-full lg:w-6/12 flex items-center justify-center mt-16">
          <img className="h-30" src="/image/me5.png" alt="A group of People" />
        </div>
      </div>
    </div>
    </>
  )
}
