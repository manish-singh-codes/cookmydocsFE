"use client";
import { ArrowRight, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";

const Resume = () => {
  const roles = [
    {
      name: "Business Analyst",
      icon: "📊",
      image: "/resumes/business-analyst.png",
    },
    {
      name: "Data Scientist",
      icon: "🧪",
      image: "/resumes/data-scientist.png",
    },
    {
      name: "Product Manager",
      icon: "👥",
      image: "/resumes/product-manager.png",
    },
    {
      name: "Software Engineer",
      icon: "💻",
      image: "/resumes/software-engineer.png",
    },
    { name: "Sales", icon: "💼", image: "/resumes/sales.png" },
    { name: "Teacher", icon: "🎓", image: "/resumes/teacher.png" },
    { name: "Engineer", icon: "🔧", image: "/resumes/engineer.png" },
    { name: "Accounting", icon: "📚", image: "/resumes/accounting.png" },
    { name: "Designer", icon: "🎨", image: "/resumes/designer.png" },
    { name: "Marketing", icon: "📢", image: "/resumes/marketing.png" },
  ];
  const [selectedRole, setSelectedRole] = useState(roles[0]);
  return (
    <div className="bg-gray-100 relative">
      <div className="absolute w-full h-full">
        <img
          src="./background.svg"
          className="w-full h-full object-cover -z-10"
          alt=""
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center gap-6 mt-20">
        <div>
          <h1 className=" text-4xl text-center font-medium text-gray-800 ">
            The resume builder that's right for your job and experience
          </h1>
          <Link
            className=" text-blue-600 underline flex justify-center mt-2 gap-1 hover:gap-2.5 transition-all duration-300 ease-in-out "
            href={"/resume-templates"}
          >
            View all resume templates{" "}
            <span className="h-1 w-1">
              <ArrowRight />
            </span>{" "}
          </Link>
        </div>
       
      </div>
     
    </div>
  );
};

export default Resume;
