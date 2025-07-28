"use client";

import React from "react";

type ResumeData = {
  name: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  summary: string;
  skills: string[];
  experience: {
    company: string;
    role: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
  education: {
    degree: string;
    institution: string;
    year: string;
  }[];
};

const TemplateATS = ({ data }: { data: ResumeData }) => {
  return (
    <div className="text-black font-sans p-6 max-w-[800px] mx-auto">
      {/* Header */}
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold">{data.name}</h1>
        <p className="text-sm">
          {data.email} | {data.phone} | {data.location}
        </p>
        <p className="text-sm">
          {data.linkedin} | {data.github}
        </p>
      </header>

      {/* Summary */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold border-b border-gray-300 mb-2">Professional Summary</h2>
        <p className="text-sm">{data.summary}</p>
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold border-b border-gray-300 mb-2">Skills</h2>
        <ul className="flex flex-wrap text-sm gap-2">
          {data.skills.map((skill, index) => (
            <li key={index} className="bg-gray-200 px-2 py-1 rounded">{skill}</li>
          ))}
        </ul>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold border-b border-gray-300 mb-2">Work Experience</h2>
        {data.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-semibold text-sm">
              {exp.role} – {exp.company}
            </h3>
            <p className="text-xs text-gray-600">
              {exp.startDate} – {exp.endDate}
            </p>
            <p className="text-sm mt-1">{exp.description}</p>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="mb-4">
        <h2 className="text-lg font-semibold border-b border-gray-300 mb-2">Education</h2>
        {data.education.map((edu, index) => (
          <div key={index} className="mb-2">
            <p className="text-sm font-medium">{edu.degree}</p>
            <p className="text-sm text-gray-700">{edu.institution} – {edu.year}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default TemplateATS;
