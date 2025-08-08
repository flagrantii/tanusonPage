"use client"
import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'

function ResumeContent() {
  return (
    <div className="space-y-8">
      <section id="summary">
        <h2 className="text-xl font-semibold">Summary</h2>
        <p className="text-sm text-gray-700 mt-2">Software engineer focused on UX and Frontend with full-stack capabilities and an eye for quality.</p>
      </section>
      <section id="experience">
        <h2 className="text-xl font-semibold">Experience</h2>
        <div className="mt-3 text-sm text-gray-700">
          <p className="font-medium">Software Engineer Intern — Some Software House</p>
          <p className="text-gray-500">Aug 2023 - Nov 2023, Bangkok</p>
          <ul className="list-disc ml-5 mt-2">
            <li>Developed feature report functionality and improved UX.</li>
            <li>Implemented API fetching and testing for reporting database.</li>
          </ul>
        </div>
      </section>
      <section id="skills">
        <h2 className="text-xl font-semibold">Skills</h2>
        <div className="mt-2 flex flex-wrap gap-2 text-sm">
          {['UX/UI','React','Next.js','Typescript','Node.js','Python','AI','Docker','CI/CD'].map(s => (
            <span key={s} className="rounded-full border border-gray-300 px-3 py-1">{s}</span>
          ))}
        </div>
      </section>
      <section id="education">
        <h2 className="text-xl font-semibold">Education</h2>
        <p className="text-sm text-gray-700 mt-2">PCSHS-NST — STEM Program</p>
      </section>
    </div>
  )
}

export default function ResumePage() {
  const fullRef = useRef<HTMLDivElement>(null)
  const expRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)

  const handlePrintFull = useReactToPrint({ content: () => fullRef.current })
  const handlePrintExp = useReactToPrint({ content: () => expRef.current })
  const handlePrintSkills = useReactToPrint({ content: () => skillsRef.current })

  return (
    <div className="px-6 lg:px-8 mx-auto max-w-4xl py-16">
      <h1 className="text-3xl sm:text-4xl font-semibold">Resume</h1>
      <p className="mt-3 text-gray-600">View on-page and export to PDF.</p>

      <div className="mt-6 flex flex-wrap gap-3">
        <button onClick={handlePrintFull} className="rounded-full border border-black px-4 py-1.5 text-sm hover:bg-black hover:text-white transition-colors">Export Full PDF</button>
        <button onClick={handlePrintExp} className="rounded-full border border-black px-4 py-1.5 text-sm hover:bg-black hover:text-white transition-colors">Export Experience</button>
        <button onClick={handlePrintSkills} className="rounded-full border border-black px-4 py-1.5 text-sm hover:bg-black hover:text-white transition-colors">Export Skills</button>
      </div>

      <div className="mt-8 space-y-12">
        <div ref={fullRef}>
          <ResumeContent />
        </div>

        <div className="hidden">
          <div ref={expRef}>
            <section>
              <h2 className="text-xl font-semibold">Experience</h2>
              <div className="mt-3 text-sm text-gray-700">
                <p className="font-medium">Software Engineer Intern — Some Software House</p>
                <p className="text-gray-500">Aug 2023 - Nov 2023, Bangkok</p>
                <ul className="list-disc ml-5 mt-2">
                  <li>Developed feature report functionality and improved UX.</li>
                  <li>Implemented API fetching and testing for reporting database.</li>
                </ul>
              </div>
            </section>
          </div>
        </div>

        <div className="hidden">
          <div ref={skillsRef}>
            <section>
              <h2 className="text-xl font-semibold">Skills</h2>
              <div className="mt-2 flex flex-wrap gap-2 text-sm">
                {['UX/UI','React','Next.js','Typescript','Node.js','Python','AI','Docker','CI/CD'].map(s => (
                  <span key={s} className="rounded-full border border-gray-300 px-3 py-1">{s}</span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
} 