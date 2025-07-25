"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const Resume = () => {
  const [selectedRole, setSelectedRole] = useState("Business Analyst")

  const jobRoles = [
    "Business Analyst",
    "Data Scientist",
    "Product Manager",
    "Software Engineer",
    "Sales",
    "Teacher",
    "Engineer",
    "Accounting",
    "Designer",
    "Marketing",
  ]

  const resumeTemplates = {
    "Business Analyst": "/template1.webp",
    "Data Scientist": "/template2.png",
    "Product Manager": "/template3.avif",
    "Software Engineer": "/template4.png",
    "Sales": "/template5.jpeg",
    "Teacher": "/placeholder.svg?height=800&width=600&text=Teacher+Resume",
    "Engineer": "/placeholder.svg?height=800&width=600&text=Engineer+Resume",
    "Accounting": "/placeholder.svg?height=800&width=600&text=Accounting+Resume",
    "Designer": "/placeholder.svg?height=800&width=600&text=Designer+Resume",
    "Marketing": "/placeholder.svg?height=800&width=600&text=Marketing+Resume",
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight max-w-4xl mx-auto">
            The resume builder that's right for your job and experience
          </h1>
          <Link
            href="/resume-templates"
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium text-lg transition-colors"
          >
            View All Resume Examples
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start justify-center">
          {/* Job Role Buttons */}
          <div className="flex flex-col gap-4 lg:w-64 order-2 lg:order-1">
            {jobRoles.map((role) => (
              <Button
                key={role}
                onClick={() => setSelectedRole(role)}
                variant="ghost"
                className={`justify-start h-14 px-4 text-left font-medium transition-all rounded-full ${
                  selectedRole === role
                    ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                    : "bg-white hover:bg-gray-100 text-gray-700 border border-gray-200"
                }`}
              >
                <div className={`w-3 h-3 rounded-full mr-4 ${selectedRole === role ? "bg-white" : "bg-emerald-500"}`} />
                {role}
              </Button>
            ))}
          </div>

          {/* Resume Preview */}
          <div className="flex-1 max-w-3xl order-1 lg:order-2">
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Resume Image */}
              <div className="relative">
                <Image
                  src={resumeTemplates[selectedRole as keyof typeof resumeTemplates] || "/placeholder.svg"}
                  alt={`${selectedRole} resume template`}
                  width={1200}
                  height={800}
                  className="w-full h-full"
                  priority
                />

                {/* Floating Menu Button */}
                <div className="absolute top-6 right-6">
                  <Button size="icon" className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 shadow-lg">
                    <div className="w-6 h-6 flex flex-col justify-center items-center gap-1">
                      <div className="w-5 h-0.5 bg-white rounded" />
                      <div className="w-5 h-0.5 bg-white rounded" />
                      <div className="w-5 h-0.5 bg-white rounded" />
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
