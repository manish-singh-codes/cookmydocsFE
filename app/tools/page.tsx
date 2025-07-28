'use client'
import TemplateATS from '@/components/Templates/ats/TemplateATS'
import React from 'react'

const page = () => {
  return (
    <div className=' max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center mt-20 '>
        <div>
            <h1 className=' text-center text-6xl' > Simplify your PDF tasks with our all-in-one free toolkit.</h1>
            <span>Merge, split, compress, convert, rotate, unlock, and watermark PDFs quickly and easily — no hassle, no cost.</span>
        </div>
        <TemplateATS
          data={{
            name: "John Doe",
            email: "john@gmail.com",
            phone: "123-456-7890",
            location: "New York, NY",
            linkedin: "https://linkedin.com/in/johndoe",
            github: "https://github.com",
            summary: "Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success.",
            skills: ["JavaScript", "React", "Node.js", "CSS", "HTML"],
            experience: [
              {
                company: "Tech Company",
                role: "Software Engineer",
                startDate: "Jan 2020",
                endDate: "Present",
                description: "Developed and maintained web applications using React and Node.js."
              },
              {
                company: "Another Tech Company",
                role: "Frontend Developer",
                startDate: "Jan 2018",
                endDate: "Dec 2019",
                description: "Worked on the frontend of various projects using HTML, CSS, and JavaScript."
              }
            ],
            education: [
              {
                degree: "Bachelor of Science in Computer Science",
                institution: "University of Technology",
                year: "2017"
              }
            ]
          }}
        />
    </div>
  )
}
export default page
