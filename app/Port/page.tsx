import React from 'react'
import WebCatelog from './components/WebCatelog'
import { Typography } from '@mui/material'
import CareerCatelog from './components/CareerCatelog'
import CertCatalog from './components/CertCatalog'
import EduCatelog from './components/EduCatelog'

export default function page() {
    return (
        <>
        <div className="py-6 sm:pt-6">
            {/* BEGIN: project */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24">
                <div className="mx-auto max-w-7xl lg:mx-0">
                <Typography variant="h4" color={"white"} fontWeight={"bold"}>
                    Educations
                    </Typography>
                <Typography variant="h6" color={"white"} marginTop={2}>
                    On my education page, discover the academic journey that has shaped my expertise in technology and innovation. From foundational courses in computer engineering to advanced studies in web app development, data science, each educational milestone demonstrates my dedication to mastering complex concepts and staying at the forefront of technological advancements.
                </Typography>
                </div>
                <EduCatelog />
            </div>
            {/* END: project */}

            {/* BEGIN: project */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24">
                <div className="mx-auto max-w-7xl lg:mx-0">
                <Typography variant="h4" color={"white"} fontWeight={"bold"}>
                    Projects
                    </Typography>
                <Typography variant="h6" color={"white"} marginTop={2}>
                    On my projects page, explore a portfolio reflecting my passion for innovation. From intuitive mobile apps to robust web solutions, each project showcases my expertise and commitment to delivering high-quality, user-centric experiences in the ever-evolving landscape of technology
                </Typography>
                </div>
                <WebCatelog />
            </div>
            {/* END: project */}
        
            {/* BEGIN: career */}
            <div className="sm:py-12 py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-7xl lg:mx-0">
                <Typography variant="h4" color={"white"} fontWeight={"bold"}>
                        Career
                    </Typography>
                    <Typography variant="h6" color={"white"} marginTop={2}>
                        Embarking on a dynamic tech career, I leverage creativity and adaptability to navigate challenges. Passionate about shaping innovative solutions, I thrive in collaborative environments, driving impactful results. Continuous learning fuels my growth as I contribute to cutting-edge projects, making a meaningful impact on the tech landscape
                    </Typography>
                </div>
                    <CareerCatelog />
                </div>
            </div>
            {/* END: career */}
        
            {/* BEGIN: cer */}
            <div className="py-6 sm:pt-6">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-7xl lg:mx-0">
                <Typography variant="h4" color={"white"} fontWeight={"bold"}>
                        Certificates
                    </Typography>
                    <Typography variant="h6" color={"white"} marginTop={2}>
                        Start your journey of skill mastery. express creativity adaptability and enthusiasm for creating innovative solutions. Thrive in a collaborative environment. Achieve impactful results Driven by a commitment to continuous learning
                    </Typography>
                </div>
                <CertCatalog />
                </div>
            </div>
            {/* END: cer */}
          </div>
        </>
      )
}
