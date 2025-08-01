"use client"
import { useState } from "react"
import { Button } from "../ui/button"
import { ScrollArea } from "../ui/scroll-area"
import { ProfessionalTemplates } from "../Templates/Professional"
import { ATSTemplates } from "../Templates/ATS"
import { CreativeTemplates } from "../Templates/Creative"
import { SimpleTemplates } from "../Templates/Simple"
import { ModernTemplates } from "../Templates/Modern"

const categories = [
  { id: "professional", name: "Professional" },
  { id: "ats", name: "ATS" },
  { id: "creative", name: "Creative" },
  { id: "modern", name: "Modern" },
  { id: "simple", name: "Simple" },
  { id: "executive", name: "Executive" },
]

const BrowseTemplate = () => {
  const [selectedCategory, setSelectedCategory] = useState("professional")

  const renderTemplates = () => {
    switch (selectedCategory) {
      case "professional":
        return <ProfessionalTemplates />
      case "ats":
        return <ATSTemplates />
      case "creative":
        return <CreativeTemplates />
      case "simple":
        return <SimpleTemplates />
      case "modern":
        return <ModernTemplates />
      default:
        return <ProfessionalTemplates />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="text-center py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Resume <span className=" text-indigo-600 ">Templates</span></h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
          Land Your Dream Job—Templates That Get You Noticed, Tools That Get You Hired.
        </p>
      </div>

      {/* Navigation Pills */}
      <div className="flex justify-center px-4 mb-12">
        <div className="bg-green-600/10 rounded-full p-2 px-4 py-2 flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              variant={selectedCategory === category.id ? "default" : "ghost"}
              className={`
                rounded-full px-6 py-2 text-sm font-medium transition-all duration-200
                ${
                  selectedCategory === category.id
                    ? "bg-green-600/80 text-white hover:bg-green-700 shadow-md"
                    : "text-gray-700 hover:bg-white hover:text-green-800"
                }
              `}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Templates Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        {/* <ScrollArea className="h-[100px]"> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">{renderTemplates()}</div>
        {/* </ScrollArea> */}
      </div>
    </div>
  )
}

export default BrowseTemplate
