import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { sampleResumeData } from "@/app/config/sampledata"

const ModernTemplate1 = () => (
  <Card className="w-full max-w-4xl mx-auto bg-gradient-to-br from-slate-50 to-gray-100">
    <CardContent className="p-8">
      <div className="flex items-center mb-8">
        <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mr-6 flex items-center justify-center shadow-lg">
          <span className="text-2xl font-bold text-white">
            {sampleResumeData.personalInfo.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{sampleResumeData.personalInfo.name}</h1>
          <p className="text-xl text-blue-600 mb-3">{sampleResumeData.personalInfo.title}</p>
          <div className="flex gap-4 text-sm text-gray-600">
            <span className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              {sampleResumeData.personalInfo.email}
            </span>
            <span className="flex items-center">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
              {sampleResumeData.personalInfo.phone}
            </span>
            <span className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              {sampleResumeData.personalInfo.location}
            </span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mr-3"></div>
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">{sampleResumeData.summary}</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-3"></div>
          Experience
        </h2>
        <div className="space-y-4">
          {sampleResumeData.experience.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">{exp.position}</h3>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                </div>
                <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {exp.startDate} - {exp.endDate}
                </span>
              </div>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3 mt-2"></div>
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg mr-3"></div>
            Education
          </h2>
          {sampleResumeData.education.map((edu, index) => (
            <div key={index}>
              <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
              <p className="text-green-600">{edu.institution}</p>
              <p className="text-sm text-gray-500">{edu.graduationDate}</p>
            </div>
          ))}
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg mr-3"></div>
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {sampleResumeData.skills.map((skill, index) => (
              <Badge
                key={index}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

const ModernTemplate2 = () => (
  <Card className="w-full max-w-4xl mx-auto">
    <CardContent className="p-0">
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">{sampleResumeData.personalInfo.name}</h1>
            <p className="text-2xl text-indigo-100">{sampleResumeData.personalInfo.title}</p>
          </div>
          <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur">
            <span className="text-2xl font-bold">
              {sampleResumeData.personalInfo.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
          <div className="bg-white bg-opacity-10 p-3 rounded-lg backdrop-blur">
            <p className="text-indigo-100">Email</p>
            <p className="font-medium">{sampleResumeData.personalInfo.email}</p>
          </div>
          <div className="bg-white bg-opacity-10 p-3 rounded-lg backdrop-blur">
            <p className="text-indigo-100">Phone</p>
            <p className="font-medium">{sampleResumeData.personalInfo.phone}</p>
          </div>
          <div className="bg-white bg-opacity-10 p-3 rounded-lg backdrop-blur">
            <p className="text-indigo-100">Location</p>
            <p className="font-medium">{sampleResumeData.personalInfo.location}</p>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 relative">
            <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
              Professional Summary
            </span>
            <div className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-full"></div>
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">{sampleResumeData.summary}</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 relative">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Experience
            </span>
            <div className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
          </h2>
          <div className="space-y-6">
            {sampleResumeData.experience.map((exp, index) => (
              <div key={index} className="relative pl-8">
                <div className="absolute left-0 top-0 w-4 h-4 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-full"></div>
                <div className="absolute left-2 top-4 w-0.5 h-full bg-gradient-to-b from-indigo-200 to-pink-200"></div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                      <p className="text-indigo-600 font-semibold">{exp.company}</p>
                    </div>
                    <span className="bg-gradient-to-r from-indigo-100 to-pink-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3 mt-2"></div>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl border border-green-200">
            <h2 className="text-xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            {sampleResumeData.education.map((edu, index) => (
              <div key={index}>
                <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                <p className="text-green-600 font-medium">{edu.institution}</p>
                <p className="text-sm text-gray-500">{edu.graduationDate}</p>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl border border-orange-200">
            <h2 className="text-xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {sampleResumeData.skills.map((skill, index) => (
                <Badge
                  key={index}
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

const ModernTemplate3 = () => (
  <Card className="w-full max-w-4xl mx-auto bg-white shadow-2xl">
    <CardContent className="p-0">
      <div className="grid grid-cols-5">
        <div className="col-span-2 bg-gray-900 text-white p-8">
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-900">
                {sampleResumeData.personalInfo.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
            <h1 className="text-2xl font-bold text-center mb-2">{sampleResumeData.personalInfo.name}</h1>
            <p className="text-cyan-300 text-center">{sampleResumeData.personalInfo.title}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4 text-cyan-300 border-b border-cyan-300 pb-2">CONTACT</h2>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-300">Email</p>
                <p>{sampleResumeData.personalInfo.email}</p>
              </div>
              <div>
                <p className="text-gray-300">Phone</p>
                <p>{sampleResumeData.personalInfo.phone}</p>
              </div>
              <div>
                <p className="text-gray-300">Location</p>
                <p>{sampleResumeData.personalInfo.location}</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4 text-cyan-300 border-b border-cyan-300 pb-2">SKILLS</h2>
            <div className="space-y-3">
              {sampleResumeData.skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{skill}</span>
                    <span className="text-cyan-300">{Math.floor(Math.random() * 20) + 80}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full"
                      style={{ width: `${Math.floor(Math.random() * 20) + 80}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-4 text-cyan-300 border-b border-cyan-300 pb-2">EDUCATION</h2>
            {sampleResumeData.education.map((edu, index) => (
              <div key={index} className="text-sm">
                <h3 className="font-semibold">{edu.degree}</h3>
                <p className="text-cyan-300">{edu.institution}</p>
                <p className="text-gray-400">{edu.graduationDate}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-3 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Summary</h2>
            <p className="text-gray-700 leading-relaxed">{sampleResumeData.summary}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Experience</h2>
            {sampleResumeData.experience.map((exp, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{exp.position}</h3>
                    <p className="text-cyan-600 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-500">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

const ModernTemplate4 = () => (
  <Card className="w-full max-w-4xl mx-auto bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
    <CardContent className="p-8">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-1"></div>
        <div className="relative bg-white p-8 rounded-2xl shadow-lg">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{sampleResumeData.personalInfo.name}</h1>
            <p className="text-2xl text-blue-600 mb-4">{sampleResumeData.personalInfo.title}</p>
            <div className="flex justify-center gap-6 text-sm text-gray-600">
              <span className="bg-blue-100 px-3 py-1 rounded-full">{sampleResumeData.personalInfo.email}</span>
              <span className="bg-purple-100 px-3 py-1 rounded-full">{sampleResumeData.personalInfo.phone}</span>
              <span className="bg-blue-100 px-3 py-1 rounded-full">{sampleResumeData.personalInfo.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-blue-500">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed text-lg">{sampleResumeData.summary}</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Journey</h2>
        <div className="space-y-6">
          {sampleResumeData.experience.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                  <p className="text-blue-600 font-semibold text-lg">{exp.company}</p>
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {exp.startDate} - {exp.endDate}
                </div>
              </div>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Education</h2>
          {sampleResumeData.education.map((edu, index) => (
            <div key={index} className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-bold text-gray-900">{edu.degree}</h3>
              <p className="text-purple-600">{edu.institution}</p>
              <p className="text-sm text-gray-500">{edu.graduationDate}</p>
            </div>
          ))}
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {sampleResumeData.skills.map((skill, index) => (
              <Badge
                key={index}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

const ModernTemplate5 = () => (
  <Card className="w-full max-w-4xl mx-auto bg-white">
    <CardContent className="p-8">
      <div className="relative mb-8">
        <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 p-8 rounded-3xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">{sampleResumeData.personalInfo.name}</h1>
              <p className="text-2xl text-emerald-100">{sampleResumeData.personalInfo.title}</p>
            </div>
            <div className="w-28 h-28 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur">
              <span className="text-3xl font-bold">
                {sampleResumeData.personalInfo.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
          </div>
          <div className="mt-6 flex gap-6 text-sm">
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur">
              {sampleResumeData.personalInfo.email}
            </span>
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur">
              {sampleResumeData.personalInfo.phone}
            </span>
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur">
              {sampleResumeData.personalInfo.location}
            </span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mr-3"></div>
          Professional Summary
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg pl-11">{sampleResumeData.summary}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mr-3"></div>
          Experience
        </h2>
        <div className="pl-11 space-y-6">
          {sampleResumeData.experience.map((exp, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-11 top-0 w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                    <p className="text-emerald-600 font-semibold">{exp.company}</p>
                  </div>
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2"></div>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mr-3"></div>
            Education
          </h2>
          {sampleResumeData.education.map((edu, index) => (
            <div key={index}>
              <h3 className="font-bold text-gray-900">{edu.degree}</h3>
              <p className="text-emerald-600">{edu.institution}</p>
              <p className="text-sm text-gray-500">{edu.graduationDate}</p>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl border border-teal-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <div className="w-6 h-6 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mr-3"></div>
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {sampleResumeData.skills.map((skill, index) => (
              <Badge
                key={index}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

const ModernTemplate6 = () => (
  <Card className="w-full max-w-4xl mx-auto bg-gray-50">
    <CardContent className="p-8">
      <div className="bg-white p-8 rounded-3xl shadow-xl mb-8">
        <div className="text-center">
          <div className="w-32 h-32 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
            <span className="text-3xl font-bold text-white">
              {sampleResumeData.personalInfo.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">{sampleResumeData.personalInfo.name}</h1>
          <p className="text-2xl text-rose-600 mb-6">{sampleResumeData.personalInfo.title}</p>
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-rose-50 p-3 rounded-lg">
              <p className="text-xs text-rose-600 font-medium">EMAIL</p>
              <p className="text-sm text-gray-900">{sampleResumeData.personalInfo.email}</p>
            </div>
            <div className="bg-pink-50 p-3 rounded-lg">
              <p className="text-xs text-pink-600 font-medium">PHONE</p>
              <p className="text-sm text-gray-900">{sampleResumeData.personalInfo.phone}</p>
            </div>
            <div className="bg-rose-50 p-3 rounded-lg">
              <p className="text-xs text-rose-600 font-medium">LOCATION</p>
              <p className="text-sm text-gray-900">{sampleResumeData.personalInfo.location}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              Professional Summary
            </span>
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg text-center">{sampleResumeData.summary}</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">Experience</span>
        </h2>
        <div className="space-y-6">
          {sampleResumeData.experience.map((exp, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                  <p className="text-rose-600 font-semibold text-lg">{exp.company}</p>
                </div>
                <div className="bg-gradient-to-r from-rose-100 to-pink-100 text-rose-800 px-4 py-2 rounded-full text-sm font-medium">
                  {exp.startDate} - {exp.endDate}
                </div>
              </div>
              <ul className="space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-3 h-3 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full mr-4 mt-1.5"></div>
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">Education</span>
          </h2>
          {sampleResumeData.education.map((edu, index) => (
            <div key={index} className="text-center">
              <h3 className="font-bold text-gray-900">{edu.degree}</h3>
              <p className="text-rose-600">{edu.institution}</p>
              <p className="text-sm text-gray-500">{edu.graduationDate}</p>
            </div>
          ))}
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {sampleResumeData.skills.map((skill, index) => (
              <Badge
                key={index}
                className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

const ModernTemplate7 = () => (
  <Card className="w-full max-w-4xl mx-auto bg-gradient-to-br from-violet-50 to-purple-50">
    <CardContent className="p-8">
      <div className="mb-8">
        <div className="bg-white p-8 rounded-2xl shadow-2xl border-t-8 border-violet-500">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{sampleResumeData.personalInfo.name}</h1>
              <p className="text-2xl text-violet-600 mb-4">{sampleResumeData.personalInfo.title}</p>
              <div className="flex gap-4 text-sm text-gray-600">
                <span className="flex items-center">
                  <div className="w-3 h-3 bg-violet-500 rounded-full mr-2"></div>
                  {sampleResumeData.personalInfo.email}
                </span>
                <span className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                  {sampleResumeData.personalInfo.phone}
                </span>
                <span className="flex items-center">
                  <div className="w-3 h-3 bg-violet-500 rounded-full mr-2"></div>
                  {sampleResumeData.personalInfo.location}
                </span>
              </div>
            </div>
            <div className="w-24 h-24 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-2xl font-bold text-white">
                {sampleResumeData.personalInfo.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-lg border-l-8 border-violet-500">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed text-lg">{sampleResumeData.summary}</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Experience Timeline</h2>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-500 to-purple-600 rounded-full"></div>
          <div className="space-y-8">
            {sampleResumeData.experience.map((exp, index) => (
              <div key={index} className="relative pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">{index + 1}</span>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                      <p className="text-violet-600 font-semibold">{exp.company}</p>
                    </div>
                    <span className="bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-sm">
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-violet-500 rounded-full mr-3 mt-2"></div>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-violet-500">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Education</h2>
          {sampleResumeData.education.map((edu, index) => (
            <div key={index}>
              <h3 className="font-bold text-gray-900">{edu.degree}</h3>
              <p className="text-violet-600">{edu.institution}</p>
              <p className="text-sm text-gray-500">{edu.graduationDate}</p>
            </div>
          ))}
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-purple-500">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {sampleResumeData.skills.map((skill, index) => (
              <Badge
                key={index}
                className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

const ModernTemplate8 = () => (
  <Card className="w-full max-w-4xl mx-auto bg-white">
    <CardContent className="p-0">
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 p-8 text-white">
        <div className="text-center">
          <div className="w-28 h-28 bg-white bg-opacity-20 rounded-full mx-auto mb-4 flex items-center justify-center backdrop-blur">
            <span className="text-3xl font-bold">
              {sampleResumeData.personalInfo.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-2">{sampleResumeData.personalInfo.name}</h1>
          <p className="text-2xl text-amber-100 mb-6">{sampleResumeData.personalInfo.title}</p>
          <div className="flex justify-center gap-6 text-sm">
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur">
              {sampleResumeData.personalInfo.email}
            </span>
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur">
              {sampleResumeData.personalInfo.phone}
            </span>
            <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur">
              {sampleResumeData.personalInfo.location}
            </span>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="mb-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">
              Professional Summary
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-red-500 mx-auto mt-2"></div>
          </div>
          <p className="text-gray-700 leading-relaxed text-lg text-center max-w-4xl mx-auto">
            {sampleResumeData.summary}
          </p>
        </div>

        <div className="mb-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mt-2"></div>
          </div>
          <div className="space-y-6">
            {sampleResumeData.experience.map((exp, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-200"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                    <p className="text-amber-600 font-semibold text-lg">{exp.company}</p>
                  </div>
                  <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 mt-2"></div>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-200">
            <div className="text-center mb-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Education
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-2"></div>
            </div>
            {sampleResumeData.education.map((edu, index) => (
              <div key={index} className="text-center">
                <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                <p className="text-amber-600">{edu.institution}</p>
                <p className="text-sm text-gray-500">{edu.graduationDate}</p>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl border border-orange-200">
            <div className="text-center mb-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Skills
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mt-2"></div>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {sampleResumeData.skills.map((skill, index) => (
                <Badge
                  key={index}
                  className="bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-600 hover:to-red-600"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

const ModernTemplate9 = () => (
  <Card className="w-full max-w-4xl mx-auto bg-gradient-to-br from-slate-100 to-gray-200">
    <CardContent className="p-8">
      <div className="bg-white p-8 rounded-3xl shadow-2xl mb-8">
        <div className="grid grid-cols-3 gap-8 items-center">
          <div className="col-span-2">
            <h1 className="text-4xl font-bold text-gray-900 mb-3">{sampleResumeData.personalInfo.name}</h1>
            <p className="text-2xl text-slate-600 mb-4">{sampleResumeData.personalInfo.title}</p>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-slate-500 rounded-full mr-3"></div>
                <span>{sampleResumeData.personalInfo.email}</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gray-500 rounded-full mr-3"></div>
                <span>{sampleResumeData.personalInfo.phone}</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-slate-500 rounded-full mr-3"></div>
                <span>{sampleResumeData.personalInfo.location}</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-32 h-32 bg-gradient-to-r from-slate-600 to-gray-700 rounded-3xl flex items-center justify-center shadow-xl">
              <span className="text-3xl font-bold text-white">
                {sampleResumeData.personalInfo.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="w-8 h-8 bg-slate-600 rounded-full mr-4"></div>
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">{sampleResumeData.summary}</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <div className="w-8 h-8 bg-gray-600 rounded-full mr-4"></div>
          Professional Experience
        </h2>
        <div className="space-y-6">
          {sampleResumeData.experience.map((exp, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                  <p className="text-slate-600 font-semibold text-lg">{exp.company}</p>
                </div>
                <div className="bg-slate-100 text-slate-800 px-4 py-2 rounded-full text-sm font-medium">
                  {exp.startDate} - {exp.endDate}
                </div>
              </div>
              <ul className="space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-3 h-3 bg-slate-500 rounded-full mr-4 mt-1.5"></div>
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="w-6 h-6 bg-slate-600 rounded-full mr-3"></div>
            Education
          </h2>
          {sampleResumeData.education.map((edu, index) => (
            <div key={index}>
              <h3 className="font-bold text-gray-900">{edu.degree}</h3>
              <p className="text-slate-600">{edu.institution}</p>
              <p className="text-sm text-gray-500">{edu.graduationDate}</p>
            </div>
          ))}
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="w-6 h-6 bg-gray-600 rounded-full mr-3"></div>
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {sampleResumeData.skills.map((skill, index) => (
              <Badge key={index} className="bg-slate-600 hover:bg-slate-700">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

const ModernTemplate10 = () => (
  <Card className="w-full max-w-4xl mx-auto bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
    <CardContent className="p-8">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl transform rotate-1"></div>
        <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
          <div className="text-center">
            <div className="w-36 h-36 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
              <span className="text-4xl font-bold text-white">
                {sampleResumeData.personalInfo.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">{sampleResumeData.personalInfo.name}</h1>
            <p className="text-2xl bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent mb-6">
              {sampleResumeData.personalInfo.title}
            </p>
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-indigo-50 p-4 rounded-xl">
                <p className="text-xs text-indigo-600 font-bold uppercase">Email</p>
                <p className="text-sm text-gray-900 font-medium">{sampleResumeData.personalInfo.email}</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-xl">
                <p className="text-xs text-purple-600 font-bold uppercase">Phone</p>
                <p className="text-sm text-gray-900 font-medium">{sampleResumeData.personalInfo.phone}</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-xl">
                <p className="text-xs text-pink-600 font-bold uppercase">Location</p>
                <p className="text-sm text-gray-900 font-medium">{sampleResumeData.personalInfo.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="bg-white p-8 rounded-3xl shadow-xl border-l-8 border-gradient-to-b from-indigo-500 to-pink-500">
          <h2 className="text-3xl font-bold text-center mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
              Professional Summary
            </span>
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg text-center">{sampleResumeData.summary}</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Experience Journey
          </span>
        </h2>
        <div className="space-y-8">
          {sampleResumeData.experience.map((exp, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-gradient-to-r from-indigo-500 to-pink-500">
                <div className="absolute -top-4 left-8 bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                  Experience {index + 1}
                </div>
                <div className="flex justify-between items-start mb-4 mt-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{exp.position}</h3>
                    <p className="text-xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-indigo-100 to-pink-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
                    {exp.startDate} - {exp.endDate}
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-4 h-4 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full mr-4 mt-1"></div>
                      <span className="text-gray-700 text-lg">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-gradient-to-r from-indigo-500 to-purple-500">
          <h2 className="text-2xl font-bold text-center mb-6">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          {sampleResumeData.education.map((edu, index) => (
            <div key={index} className="text-center">
              <h3 className="font-bold text-gray-900 text-lg">{edu.degree}</h3>
              <p className="text-indigo-600 font-medium">{edu.institution}</p>
              <p className="text-sm text-gray-500">{edu.graduationDate}</p>
            </div>
          ))}
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-xl border-t-8 border-gradient-to-r from-purple-500 to-pink-500">
          <h2 className="text-2xl font-bold text-center mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {sampleResumeData.skills.map((skill, index) => (
              <Badge
                key={index}
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-lg px-4 py-2"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

export function ModernTemplates() {
  const templates = [
    { id: 1, name: "Gradient Cards", component: ModernTemplate1 },
    { id: 2, name: "Timeline Design", component: ModernTemplate2 },
    { id: 3, name: "Dark Sidebar", component: ModernTemplate3 },
    { id: 4, name: "Rotated Header", component: ModernTemplate4 },
    { id: 5, name: "Emerald Theme", component: ModernTemplate5 },
    { id: 6, name: "Rose Circles", component: ModernTemplate6 },
    { id: 7, name: "Violet Timeline", component: ModernTemplate7 },
    { id: 8, name: "Warm Gradient", component: ModernTemplate8 },
    { id: 9, name: "Slate Modern", component: ModernTemplate9 },
    { id: 10, name: "Rainbow Premium", component: ModernTemplate10 },
  ]

  return (
    <div className="space-y-8">
      {templates.map((template) => (
        <div key={template.id} className="space-y-4">
          <h3 className="text-lg font-semibold text-center">
            Modern Template {template.id}: {template.name}
          </h3>
          <template.component />
        </div>
      ))}
    </div>
  )
}
