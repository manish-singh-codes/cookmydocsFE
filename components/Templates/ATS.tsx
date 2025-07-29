import { Card, CardContent } from "@/components/ui/card"
import { sampleResumeData } from "@/app/config/sampledata"

const ATSTemplate1 = () => (
  <Card className="w-full max-w-4xl mx-auto">
    <CardContent className="p-8">
      <div className="text-left mb-6">
        <h1 className="text-2xl font-bold text-black mb-1">{sampleResumeData.personalInfo.name}</h1>
        <p className="text-lg text-black mb-2">{sampleResumeData.personalInfo.title}</p>
        <p className="text-sm text-black">
          {sampleResumeData.personalInfo.email} | {sampleResumeData.personalInfo.phone} |{" "}
          {sampleResumeData.personalInfo.location}
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-bold text-black mb-2 uppercase">Professional Summary</h2>
        <p className="text-black leading-relaxed">{sampleResumeData.summary}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-bold text-black mb-2 uppercase">Work Experience</h2>
        {sampleResumeData.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-bold text-black">{exp.position}</h3>
            <p className="text-black">
              {exp.company}, {exp.location}
            </p>
            <p className="text-black text-sm mb-2">
              {exp.startDate} - {exp.endDate}
            </p>
            <ul className="list-disc list-inside text-black space-y-1">
              {exp.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-bold text-black mb-2 uppercase">Education</h2>
        {sampleResumeData.education.map((edu, index) => (
          <div key={index} className="mb-2">
            <h3 className="font-bold text-black">{edu.degree}</h3>
            <p className="text-black">
              {edu.institution}, {edu.location}
            </p>
            <p className="text-black text-sm">{edu.graduationDate}</p>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-lg font-bold text-black mb-2 uppercase">Skills</h2>
        <p className="text-black">{sampleResumeData.skills.join(", ")}</p>
      </div>
    </CardContent>
  </Card>
)

const ATSTemplate2 = () => (
  <Card className="w-full max-w-4xl mx-auto">
    <CardContent className="p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-black mb-1">{sampleResumeData.personalInfo.name}</h1>
        <p className="text-black mb-2">{sampleResumeData.personalInfo.title}</p>
        <div className="text-black text-sm">
          <p>Email: {sampleResumeData.personalInfo.email}</p>
          <p>Phone: {sampleResumeData.personalInfo.phone}</p>
          <p>Location: {sampleResumeData.personalInfo.location}</p>
          <p>LinkedIn: {sampleResumeData.personalInfo.linkedin}</p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-bold text-black mb-2">SUMMARY</h2>
        <hr className="border-black mb-2" />
        <p className="text-black leading-relaxed">{sampleResumeData.summary}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-bold text-black mb-2">EXPERIENCE</h2>
        <hr className="border-black mb-2" />
        {sampleResumeData.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold text-black">{exp.position}</h3>
              <span className="text-black text-sm">
                {exp.startDate} - {exp.endDate}
              </span>
            </div>
            <p className="text-black mb-2">{exp.company}</p>
            <ul className="list-disc list-inside text-black space-y-1">
              {exp.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-bold text-black mb-2">EDUCATION</h2>
        <hr className="border-black mb-2" />
        {sampleResumeData.education.map((edu, index) => (
          <div key={index} className="mb-2">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-black">{edu.degree}</h3>
                <p className="text-black">{edu.institution}</p>
              </div>
              <span className="text-black text-sm">{edu.graduationDate}</span>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-lg font-bold text-black mb-2">TECHNICAL SKILLS</h2>
        <hr className="border-black mb-2" />
        <p className="text-black">{sampleResumeData.skills.join(" • ")}</p>
      </div>
    </CardContent>
  </Card>
)

const ATSTemplate3 = () => (
  <Card className="w-full max-w-4xl mx-auto">
    <CardContent className="p-8">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-black mb-1">{sampleResumeData.personalInfo.name}</h1>
        <p className="text-black mb-2">{sampleResumeData.personalInfo.title}</p>
        <p className="text-black text-sm">
          {sampleResumeData.personalInfo.email} • {sampleResumeData.personalInfo.phone} •{" "}
          {sampleResumeData.personalInfo.location}
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-base font-bold text-black mb-2 text-center">PROFESSIONAL SUMMARY</h2>
        <p className="text-black leading-relaxed">{sampleResumeData.summary}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-base font-bold text-black mb-2 text-center">PROFESSIONAL EXPERIENCE</h2>
        {sampleResumeData.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-bold text-black">
              {exp.position} | {exp.company}
            </h3>
            <p className="text-black text-sm mb-2">
              {exp.startDate} - {exp.endDate}
            </p>
            <ul className="text-black space-y-1">
              {exp.achievements.map((achievement, i) => (
                <li key={i}>• {achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <h2 className="text-base font-bold text-black mb-2 text-center">EDUCATION</h2>
          {sampleResumeData.education.map((edu, index) => (
            <div key={index} className="mb-2">
              <h3 className="font-bold text-black">{edu.degree}</h3>
              <p className="text-black">{edu.institution}</p>
              <p className="text-black text-sm">{edu.graduationDate}</p>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-base font-bold text-black mb-2 text-center">CORE COMPETENCIES</h2>
          <div className="text-black">
            {sampleResumeData.skills.map((skill, index) => (
              <p key={index}>• {skill}</p>
            ))}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

const ATSTemplate4 = () => (
  <Card className="w-full max-w-4xl mx-auto">
    <CardContent className="p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-black mb-2">{sampleResumeData.personalInfo.name}</h1>
        <p className="text-xl text-black mb-3">{sampleResumeData.personalInfo.title}</p>
        <div className="text-black">
          <p>{sampleResumeData.personalInfo.email}</p>
          <p>{sampleResumeData.personalInfo.phone}</p>
          <p>{sampleResumeData.personalInfo.location}</p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-bold text-black mb-3 border-b border-black pb-1">SUMMARY OF QUALIFICATIONS</h2>
        <p className="text-black leading-relaxed">{sampleResumeData.summary}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-bold text-black mb-3 border-b border-black pb-1">PROFESSIONAL EXPERIENCE</h2>
        {sampleResumeData.experience.map((exp, index) => (
          <div key={index} className="mb-5">
            <div className="mb-2">
              <h3 className="font-bold text-black text-lg">{exp.position}</h3>
              <p className="text-black font-medium">
                {exp.company} | {exp.startDate} - {exp.endDate}
              </p>
            </div>
            <ul className="list-disc list-inside text-black space-y-1">
              {exp.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-bold text-black mb-3 border-b border-black pb-1">EDUCATION</h2>
        {sampleResumeData.education.map((edu, index) => (
          <div key={index}>
            <h3 className="font-bold text-black">{edu.degree}</h3>
            <p className="text-black">
              {edu.institution} | {edu.graduationDate}
            </p>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-lg font-bold text-black mb-3 border-b border-black pb-1">TECHNICAL PROFICIENCIES</h2>
        <p className="text-black">{sampleResumeData.skills.join(", ")}</p>
      </div>
    </CardContent>
  </Card>
)

const ATSTemplate5 = () => (
  <Card className="w-full max-w-4xl mx-auto">
    <CardContent className="p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-black">{sampleResumeData.personalInfo.name}</h1>
        <p className="text-lg text-black">{sampleResumeData.personalInfo.title}</p>
        <div className="mt-2 text-black text-sm">
          <span>{sampleResumeData.personalInfo.email} | </span>
          <span>{sampleResumeData.personalInfo.phone} | </span>
          <span>{sampleResumeData.personalInfo.location}</span>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-base font-bold text-black mb-2">OBJECTIVE</h2>
          <p className="text-black leading-relaxed">{sampleResumeData.summary}</p>
        </div>

        <div>
          <h2 className="text-base font-bold text-black mb-2">WORK HISTORY</h2>
          {sampleResumeData.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-bold text-black">{exp.position}</h3>
              <p className="text-black">
                {exp.company}, {exp.startDate} - {exp.endDate}
              </p>
              <ul className="mt-2 text-black space-y-1">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>- {achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-base font-bold text-black mb-2">EDUCATION</h2>
          {sampleResumeData.education.map((edu, index) => (
            <div key={index}>
              <p className="text-black font-medium">{edu.degree}</p>
              <p className="text-black">
                {edu.institution}, {edu.graduationDate}
              </p>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-base font-bold text-black mb-2">SKILLS</h2>
          <div className="text-black">
            {sampleResumeData.skills.map((skill, index) => (
              <span key={index}>
                {skill}
                {index < sampleResumeData.skills.length - 1 ? ", " : ""}
              </span>
            ))}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

// Templates 6-10 continue with ATS-friendly formatting
const ATSTemplate6 = () => (
  <Card className="w-full max-w-4xl mx-auto">
    <CardContent className="p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-black uppercase">{sampleResumeData.personalInfo.name}</h1>
        <p className="text-black text-lg">{sampleResumeData.personalInfo.title}</p>
        <div className="mt-2 text-black">
          <p>Email: {sampleResumeData.personalInfo.email}</p>
          <p>Phone: {sampleResumeData.personalInfo.phone}</p>
          <p>Address: {sampleResumeData.personalInfo.location}</p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-bold text-black mb-2">PROFESSIONAL PROFILE</h2>
        <p className="text-black leading-relaxed">{sampleResumeData.summary}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-bold text-black mb-2">EMPLOYMENT HISTORY</h2>
        {sampleResumeData.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-bold text-black">{exp.position}</h3>
            <p className="text-black">{exp.company}</p>
            <p className="text-black text-sm">
              {exp.startDate} to {exp.endDate}
            </p>
            <ul className="mt-2 text-black space-y-1">
              {exp.achievements.map((achievement, i) => (
                <li key={i}>* {achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-bold text-black mb-2">ACADEMIC BACKGROUND</h2>
        {sampleResumeData.education.map((edu, index) => (
          <div key={index}>
            <h3 className="font-bold text-black">{edu.degree}</h3>
            <p className="text-black">{edu.institution}</p>
            <p className="text-black text-sm">Graduated: {edu.graduationDate}</p>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-lg font-bold text-black mb-2">TECHNICAL EXPERTISE</h2>
        <p className="text-black">{sampleResumeData.skills.join(" | ")}</p>
      </div>
    </CardContent>
  </Card>
)

const ATSTemplate7 = () => (
  <Card className="w-full max-w-4xl mx-auto">
    <CardContent className="p-8">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-black">{sampleResumeData.personalInfo.name}</h1>
        <p className="text-lg text-black mt-1">{sampleResumeData.personalInfo.title}</p>
        <div className="mt-3 text-black text-sm">
          {sampleResumeData.personalInfo.email} | {sampleResumeData.personalInfo.phone} |{" "}
          {sampleResumeData.personalInfo.location}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-bold text-black mb-2 text-center">CAREER SUMMARY</h2>
        <p className="text-black leading-relaxed text-center">{sampleResumeData.summary}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-bold text-black mb-2 text-center">WORK EXPERIENCE</h2>
        {sampleResumeData.experience.map((exp, index) => (
          <div key={index} className="mb-4 text-center">
            <h3 className="font-bold text-black">{exp.position}</h3>
            <p className="text-black">
              {exp.company} ({exp.startDate} - {exp.endDate})
            </p>
            <div className="mt-2 text-black">
              {exp.achievements.map((achievement, i) => (
                <p key={i}>• {achievement}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="text-center">
          <h2 className="text-lg font-bold text-black mb-2">EDUCATION</h2>
          {sampleResumeData.education.map((edu, index) => (
            <div key={index}>
              <h3 className="font-bold text-black">{edu.degree}</h3>
              <p className="text-black">{edu.institution}</p>
              <p className="text-black text-sm">{edu.graduationDate}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <h2 className="text-lg font-bold text-black mb-2">KEY SKILLS</h2>
          <div className="text-black">
            {sampleResumeData.skills.map((skill, index) => (
              <p key={index}>{skill}</p>
            ))}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

const ATSTemplate8 = () => (
  <Card className="w-full max-w-4xl mx-auto">
    <CardContent className="p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-black">{sampleResumeData.personalInfo.name}</h1>
        <p className="text-black">{sampleResumeData.personalInfo.title}</p>
        <div className="mt-2 text-black text-sm space-y-1">
          <p>Email Address: {sampleResumeData.personalInfo.email}</p>
          <p>Phone Number: {sampleResumeData.personalInfo.phone}</p>
          <p>Location: {sampleResumeData.personalInfo.location}</p>
          <p>LinkedIn: {sampleResumeData.personalInfo.linkedin}</p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-bold text-black mb-2">SUMMARY</h2>
        <div className="border-t border-black pt-2">
          <p className="text-black leading-relaxed">{sampleResumeData.summary}</p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-bold text-black mb-2">PROFESSIONAL EXPERIENCE</h2>
        <div className="border-t border-black pt-2">
          {sampleResumeData.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-bold text-black">{exp.position}</h3>
              <p className="text-black">
                {exp.company} | {exp.startDate} - {exp.endDate}
              </p>
              <div className="mt-2 text-black">
                {exp.achievements.map((achievement, i) => (
                  <p key={i}>- {achievement}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-bold text-black mb-2">EDUCATION</h2>
        <div className="border-t border-black pt-2">
          {sampleResumeData.education.map((edu, index) => (
            <div key={index}>
              <h3 className="font-bold text-black">{edu.degree}</h3>
              <p className="text-black">
                {edu.institution} | {edu.graduationDate}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold text-black mb-2">SKILLS</h2>
        <div className="border-t border-black pt-2">
          <p className="text-black">{sampleResumeData.skills.join(", ")}</p>
        </div>
      </div>
    </CardContent>
  </Card>
)

const ATSTemplate9 = () => (
  <Card className="w-full max-w-4xl mx-auto">
    <CardContent className="p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-black mb-1">{sampleResumeData.personalInfo.name}</h1>
        <p className="text-lg text-black mb-3">{sampleResumeData.personalInfo.title}</p>
        <div className="text-black text-sm">
          <p>
            {sampleResumeData.personalInfo.email} • {sampleResumeData.personalInfo.phone} •{" "}
            {sampleResumeData.personalInfo.location}
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-base font-bold text-black mb-2 uppercase">Profile</h2>
          <p className="text-black leading-relaxed">{sampleResumeData.summary}</p>
        </div>

        <div>
          <h2 className="text-base font-bold text-black mb-2 uppercase">Experience</h2>
          {sampleResumeData.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-bold text-black">
                {exp.position} - {exp.company}
              </h3>
              <p className="text-black text-sm mb-2">
                {exp.startDate} to {exp.endDate}
              </p>
              <ul className="text-black space-y-1">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>• {achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-base font-bold text-black mb-2 uppercase">Education</h2>
          {sampleResumeData.education.map((edu, index) => (
            <div key={index}>
              <h3 className="font-bold text-black">{edu.degree}</h3>
              <p className="text-black">
                {edu.institution}, {edu.graduationDate}
              </p>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-base font-bold text-black mb-2 uppercase">Technical Skills</h2>
          <p className="text-black">{sampleResumeData.skills.join(" • ")}</p>
        </div>
      </div>
    </CardContent>
  </Card>
)

const ATSTemplate10 = () => (
  <Card className="w-full max-w-4xl mx-auto">
    <CardContent className="p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-black">{sampleResumeData.personalInfo.name}</h1>
        <p className="text-xl text-black">{sampleResumeData.personalInfo.title}</p>
        <div className="mt-3 text-black">
          <p>
            Contact: {sampleResumeData.personalInfo.email} | {sampleResumeData.personalInfo.phone}
          </p>
          <p>Location: {sampleResumeData.personalInfo.location}</p>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-bold text-black mb-3">QUALIFICATIONS SUMMARY</h2>
        <p className="text-black leading-relaxed">{sampleResumeData.summary}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-bold text-black mb-3">CAREER HISTORY</h2>
        {sampleResumeData.experience.map((exp, index) => (
          <div key={index} className="mb-5">
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-bold text-black text-lg">{exp.position}</h3>
              <span className="text-black">
                {exp.startDate} - {exp.endDate}
              </span>
            </div>
            <p className="text-black font-medium mb-2">{exp.company}</p>
            <ul className="text-black space-y-1">
              {exp.achievements.map((achievement, i) => (
                <li key={i}>• {achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <h2 className="text-lg font-bold text-black mb-3">EDUCATION</h2>
          {sampleResumeData.education.map((edu, index) => (
            <div key={index}>
              <h3 className="font-bold text-black">{edu.degree}</h3>
              <p className="text-black">{edu.institution}</p>
              <p className="text-black text-sm">{edu.graduationDate}</p>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-lg font-bold text-black mb-3">CORE SKILLS</h2>
          <div className="text-black space-y-1">
            {sampleResumeData.skills.map((skill, index) => (
              <p key={index}>• {skill}</p>
            ))}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

export function ATSTemplates() {
  const templates = [
    { id: 1, name: "Basic ATS", component: ATSTemplate1 },
    { id: 2, name: "Standard Format", component: ATSTemplate2 },
    { id: 3, name: "Centered ATS", component: ATSTemplate3 },
    { id: 4, name: "Professional ATS", component: ATSTemplate4 },
    { id: 5, name: "Simple ATS", component: ATSTemplate5 },
    { id: 6, name: "Clean ATS", component: ATSTemplate6 },
    { id: 7, name: "Centered Professional", component: ATSTemplate7 },
    { id: 8, name: "Structured ATS", component: ATSTemplate8 },
    { id: 9, name: "Compact ATS", component: ATSTemplate9 },
    { id: 10, name: "Executive ATS", component: ATSTemplate10 },
  ]

  return (
    <div className="space-y-8">
      {templates.map((template) => (
        <div key={template.id} className="space-y-4">
          <h3 className="text-lg font-semibold text-center">
            ATS Template {template.id}: {template.name}
          </h3>
          <template.component />
        </div>
      ))}
    </div>
  )
}
