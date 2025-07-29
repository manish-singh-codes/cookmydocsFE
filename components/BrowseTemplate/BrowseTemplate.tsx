'use client'
import React, { useState } from 'react'
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { ScrollArea } from '../ui/scroll-area';
import { ProfessionalTemplates } from '../Templates/Professional';
import { ATSTemplates } from '../Templates/ATS';
import { CreativeTemplates } from '../Templates/Creative';
import { SimpleTemplates } from '../Templates/Simple';
import { ModernTemplates } from '../Templates/Modern';


const categories = [
  { id: "professional", name: "Professional", description: "Clean, business-focused designs" },
  { id: "ats", name: "ATS Friendly", description: "Optimized for applicant tracking systems" },
  { id: "creative", name: "Creative", description: "Bold, artistic designs for creative roles" },
  { id: "simple", name: "Simple", description: "Minimalist, easy-to-read layouts" },
  { id: "modern", name: "Modern", description: "Contemporary designs with modern aesthetics" },
  { id: "executive", name: "Executive", description: "Sophisticated templates for senior roles" },
]

const BrowseTemplate = () => {

    const resumeTypes = [
        { id: 1, name: 'Professional',images:[

        ] },
        { id: 2, name: "ATS"},
        { id: 3, name: 'Creative' },
        { id: 4, name: 'Modern' },
        { id: 5, name: 'Simple' },
        { id: 6, name: 'Executive' },
    ];

    const [selectedType, setSelectedType] = useState(resumeTypes[0]);

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
    <div className=' w-full h-full flex items-center justify-center'>
        {/* <div className=' max-w-7xl mx-auto h-full'>
            <div className=' mt-[5%] flex flex-col items-center justify-center px-4'>
                <h1 className=' text-3xl lg:text-5xl text-center font-medium font-sans text-gray-600 '>Resume Templates</h1>
                <p className=' text-base lg:text-lg text-center text-gray-900 mt-2'>Land Your Dream Job—Templates That Get You Noticed, Tools That Get You Hired.</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='mt-20 px-4 py-2 bg-green-500/10 rounded-full flex items-center justify-center'>
                    {resumeTypes.map((type) => (
                        <Button onClick={()=>setSelectedType(type)} key={type.id} variant="outline" className={` m-2 rounded-full ${selectedType.id == type.id ? 'bg-green-600 text-white hover:bg-green-600 hover:text-white': 'hover:bg-white hover:text-black'}`}>{type.name}</Button>
                    ))} 
                </div>
                <div>
                     <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
                            <div className=' bg-gray-600/10 rounded-lg shadow-lg p-4'>
                                <img src={`/template2.png`} alt={selectedType.name} className=' w-full h-[300px] rounded-lg shadow-lg' />
                            </div>
                        </div>
                </div>

            </div>
        </div> */}
         <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="text-xs">
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="mt-6">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>{category.name} Templates</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
            </Card>
            <ScrollArea className="h-[800px]">{renderTemplates()}</ScrollArea>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

export default BrowseTemplate
