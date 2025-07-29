import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { sampleResumeData } from "@/app/config/sampledata"

const CreativeTemplate1 = () => (
  <Card className="w-full max-w-4xl mx-auto bg-gradient-to-br from-pink-50 to-purple-50">
    <CardContent className="p-8">
      <div className="text-center mb-8">
        <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-2xl font-bold text-white">
            {sampleResumeData.personalInfo.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          {sampleResumeData.personalInfo.name}
        </h1>
        <p className="text-2xl text-gray-700 mt-2">{sampleResumeData.personalInfo.title}</p>
        <div className="flex justify-center gap-4 mt-4 text-sm text-gray-600">
          <span className="bg-white px-3 py-1 rounded-full shadow">{sampleResumeData.personalInfo.email}</span>
          <span className="bg-white px-3 py-1 rounded-full shadow">{sampleResumeData.personalInfo.phone}</span>
          <span className="bg-white px-3 py-1 rounded-full shadow">{sampleResumeData.personalInfo.location}</span>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-purple-600 mb-4 text-center">✨ About Me</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-gray-700 leading-relaxed text-center">{sampleResumeData.summary}</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-purple-600 mb-4 text-center">🚀 Experience</h2>
        {sampleResumeData.experience.map((exp, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg mb-4">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                <p className="text-purple-600 font-semibold">{exp.company}</p>
              </div>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                {exp.startDate} - {exp.endDate}
              </span>
            </div>
            <ul className="space-y-2">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-pink-500 mr-2">▶</span>
                  <span className="text-gray-700">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-purple-600 mb-4 text-center">🎓 Education</h2>
          {sampleResumeData.education.map((edu, index) => (
            <div key={index} className="text-center">
              <h3 className="font-bold text-gray-900">{edu.degree}</h3>
              <p className="text-purple-600">{edu.institution}</p>
              <p className="text-sm text-gray-500">{edu.graduationDate}</p>
            </div>
          ))}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-purple-600 mb-4 text-center">💡 Skills</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {sampleResumeData.skills.map((skill, index) => (
              <Badge
                key={index}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700"
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

const CreativeTemplate2 = () => (
  <Card className="w-full max-w-4xl mx-auto bg-black text-white">
    <CardContent className="p-0">
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-8">
        <h1 className="text-4xl font-bold text-black mb-2">{sampleResumeData.personalInfo.name}</h1>
        <p className="text-2xl text-black">{sampleResumeData.personalInfo.title}</p>
        <div className="mt-4 text-black">
          <p>
            {sampleResumeData.personalInfo.email} | {sampleResumeData.personalInfo.phone} |{" "}
            {sampleResumeData.personalInfo.location}
          </p>
        </div>
      </div>

      <div className="p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center">
            <span className="mr-3">💭</span> Creative Vision
          </h2>
          <p className="text-gray-300 leading-relaxed">{sampleResumeData.summary}</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center">
            <span className="mr-3">⚡</span> Experience
          </h2>
          {sampleResumeData.experience.map((exp, index) => (
            <div key={index} className="mb-6 border-l-4 border-yellow-400 pl-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                  <p className="text-yellow-400">{exp.company}</p>
                </div>
                <span className="text-gray-400 text-sm">
                  {exp.startDate} - {exp.endDate}
                </span>
              </div>
              <ul className="space-y-1">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-gray-300 flex items-start">
                    <span className="text-yellow-400 mr-2">→</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center">
              <span className="mr-3">🎯</span> Education
            </h2>
            {sampleResumeData.education.map((edu, index) => (
              <div key={index} className="border border-gray-700 p-4 rounded">
                <h3 className="font-bold text-white">{edu.degree}</h3>
                <p className="text-yellow-400">{edu.institution}</p>
                <p className="text-gray-400 text-sm">{edu.graduationDate}</p>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center">
              <span className="mr-3">🛠️</span> Skills
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {sampleResumeData.skills.map((skill, index) => (
                <div key={index} className="bg-gray-800 p-2 rounded text-center">
                  <span className="text-white text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

const CreativeTemplate3 = () => (
  <Card className="w-full max-w-4xl mx-auto">
    <CardContent className="p-0">
      <div className="grid grid-cols-5">
        <div className="col-span-2 bg-gradient-to-b from-teal-500 to-blue-600 text-white p-8">
          <div className="text-center mb-8">
            <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl font-bold text-teal-600">
                {sampleResumeData.personalInfo.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
            <h1 className="text-2xl font-bold mb-2">{sampleResumeData.personalInfo.name}</h1>
            <p className="text-teal-100">{sampleResumeData.personalInfo.title}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4 border-b border-teal-300 pb-2">CONTACT</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <span className="mr-2">📧</span>
                <span>{sampleResumeData.personalInfo.email}</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📱</span>
                <span>{sampleResumeData.personalInfo.phone}</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">📍</span>
                <span>{sampleResumeData.personalInfo.location}</span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4 border-b border-teal-300 pb-2">SKILLS</h2>
            <div className="space-y-3">
              {sampleResumeData.skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{skill}</span>
                    <span>{Math.floor(Math.random() * 20) + 80}%</span>
                  </div>
                  <div className="w-full bg-teal-300 rounded-full h-2">
                    <div
                      className="bg-white h-2 rounded-full"
                      style={{ width: `${Math.floor(Math.random() * 20) + 80}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-4 border-b border-teal-300 pb-2">EDUCATION</h2>
            {sampleResumeData.education.map((edu, index) => (
              <div key={index} className="text-sm">
                <h3 className="font-semibold">{edu.degree}</h3>
                <p className="text-teal-100">{edu.institution}</p>
                <p className="text-teal-200 text-xs">{edu.graduationDate}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-3 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-teal-600 mb-4 flex items-center">
              <div className="w-8 h-8 bg-teal-600 rounded-full mr-3 flex items-center justify-center">
                <span className="text-white text-sm">✨</span>
              </div>
              About Me
            </h2>
            <p className="text-gray-700 leading-relaxed">{sampleResumeData.summary}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-teal-600 mb-4 flex items-center">
              <div className="w-8 h-8 bg-teal-600 rounded-full mr-3 flex items-center justify-center">
                <span className="text-white text-sm">💼</span>
              </div>
              Experience
            </h2>
            {sampleResumeData.experience.map((exp, index) => (
              <div key={index} className="mb-6 relative">
                <div className="absolute left-0 top-0 w-4 h-4 bg-teal-600 rounded-full"></div>
                <div className="ml-8">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-gray-900">{exp.position}</h3>
                      <p className="text-teal-600 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-500 bg-teal-50 px-2 py-1 rounded">
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

const CreativeTemplate4 = () => (
  <Card className="w-full max-w-4xl mx-auto bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
    <CardContent className="p-8">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-cyan-600 transform -skew-y-1"></div>
        <div className="relative bg-white p-6 transform skew-y-1">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{sampleResumeData.personalInfo.name}</h1>
          <p className="text-2xl text-indigo-600">{sampleResumeData.personalInfo.title}</p>
          <div className="flex gap-6 mt-4 text-sm text-gray-600">
            <span className="flex items-center">
              <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
              {sampleResumeData.personalInfo.email}
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-cyan-600 rounded-full mr-2"></span>
              {sampleResumeData.personalInfo.phone}
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
              {sampleResumeData.personalInfo.location}
            </span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-full flex items-center justify-center mr-4">
            <span className="text-white font-bold">💡</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Creative Philosophy</h2>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-600">
          <p className="text-gray-700 leading-relaxed italic">{sampleResumeData.summary}</p>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-indigo-600 rounded-full flex items-center justify-center mr-4">
            <span className="text-white font-bold">🎨</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Creative Journey</h2>
        </div>
        {sampleResumeData.experience.map((exp, index) => (
          <div key={index} className="relative mb-6">
            <div className="bg-white p-6 rounded-lg shadow-lg ml-8">
              <div className="absolute -left-4 top-6 w-8 h-8 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">{index + 1}</span>
              </div>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                  <p className="text-indigo-600 font-semibold">{exp.company}</p>
                </div>
                <span className="bg-gradient-to-r from-indigo-100 to-cyan-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                  {exp.startDate} - {exp.endDate}
                </span>
              </div>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-cyan-500 mr-2 mt-1">✦</span>
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-sm">🎓</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900">Education</h2>
          </div>
          {sampleResumeData.education.map((edu, index) => (
            <div key={index} className="border-l-4 border-indigo-200 pl-4">
              <h3 className="font-bold text-gray-900">{edu.degree}</h3>
              <p className="text-indigo-600">{edu.institution}</p>
              <p className="text-sm text-gray-500">{edu.graduationDate}</p>
            </div>
          ))}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-600 to-indigo-600 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-sm">⚡</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900">Skills</h2>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {sampleResumeData.skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-indigo-50 to-cyan-50 p-2 rounded text-center border border-indigo-200"
              >
                <span className="text-indigo-800 text-sm font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

const CreativeTemplate5 = () => (
  <Card className="w-full max-w-4xl mx-auto bg-gray-900 text-white">
    <CardContent className="p-0">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 opacity-90"></div>
        <div className="relative p-8 text-center">
          <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-2xl font-bold text-purple-600">
              {sampleResumeData.personalInfo.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-2">{sampleResumeData.personalInfo.name}</h1>
          <p className="text-2xl text-pink-100 mb-4">{sampleResumeData.personalInfo.title}</p>
          <div className="flex justify-center gap-4 text-sm">
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">{sampleResumeData.personalInfo.email}</span>
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">{sampleResumeData.personalInfo.phone}</span>
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">
              {sampleResumeData.personalInfo.location}
            </span>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-pink-400 mb-4 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              ✨ Creative Vision ✨
            </span>
          </h2>
          <div className="bg-gray-800 p-6 rounded-lg border border-purple-500">
            <p className="text-gray-300 leading-relaxed text-center italic">{sampleResumeData.summary}</p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-pink-400 mb-6 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              🚀 Experience Timeline 🚀
            </span>
          </h2>
          <div className="space-y-6">
            {sampleResumeData.experience.map((exp, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold">{exp.position}</h3>
                      <p className="text-pink-200">{exp.company}</p>
                    </div>
                    <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-yellow-300 mr-2">★</span>
                        <span className="text-pink-100">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg border border-purple-500">
            <h2 className="text-xl font-bold text-pink-400 mb-4 text-center">🎓 Education</h2>
            {sampleResumeData.education.map((edu, index) => (
              <div key={index} className="text-center">
                <h3 className="font-bold text-white">{edu.degree}</h3>
                <p className="text-purple-300">{edu.institution}</p>
                <p className="text-sm text-gray-400">{edu.graduationDate}</p>
              </div>
            ))}
          </div>
          <div className="bg-gray-800 p-6 rounded-lg border border-purple-500">
            <h2 className="text-xl font-bold text-pink-400 mb-4 text-center">⚡ Skills</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {sampleResumeData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

// Templates 6-10 continue with more creative designs
const CreativeTemplate6 = () => (
  <Card className="w-full max-w-4xl mx-auto bg-gradient-to-br from-green-50 to-blue-50">
    <CardContent className="p-8">
      <div className="text-center mb-8">
        <div className="relative inline-block">
          <div className="w-32 h-32 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center transform rotate-3">
            <span className="text-3xl font-bold text-white transform -rotate-3">
              {sampleResumeData.personalInfo.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-sm">✨</span>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2 transform -rotate-1">
          {sampleResumeData.personalInfo.name}
        </h1>
        <p className="text-2xl text-green-600 transform rotate-1">{sampleResumeData.personalInfo.title}</p>
        <div className="mt-4 space-y-2">
          <div className="inline-block bg-white p-2 rounded-lg shadow transform -rotate-1">
            <span className="text-sm text-gray-600">{sampleResumeData.personalInfo.email}</span>
          </div>
          <div className="inline-block bg-white p-2 rounded-lg shadow transform rotate-1 ml-2">
            <span className="text-sm text-gray-600">{sampleResumeData.personalInfo.phone}</span>
          </div>
          <div className="inline-block bg-white p-2 rounded-lg shadow transform -rotate-1 ml-2">
            <span className="text-sm text-gray-600">{sampleResumeData.personalInfo.location}</span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg transform -rotate-1 mb-4">
          <h2 className="text-2xl font-bold text-green-600 mb-4 flex items-center">
            <span className="mr-3 text-3xl">🌟</span> My Story
          </h2>
          <p className="text-gray-700 leading-relaxed">{sampleResumeData.summary}</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center flex items-center justify-center">
          <span className="mr-3 text-3xl">🎯</span> Adventures in Work
        </h2>
        {sampleResumeData.experience.map((exp, index) => (
          <div
            key={index}
            className={`bg-white p-6 rounded-lg shadow-lg mb-4 transform ${index % 2 === 0 ? "rotate-1" : "-rotate-1"}`}
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                <p className="text-green-600 font-semibold">{exp.company}</p>
              </div>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm transform -rotate-3">
                {exp.startDate} - {exp.endDate}
              </span>
            </div>
            <ul className="space-y-2">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-blue-500 mr-2 text-lg">🔥</span>
                  <span className="text-gray-700">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg transform rotate-1">
          <h2 className="text-xl font-bold text-green-600 mb-4 flex items-center">
            <span className="mr-3 text-2xl">📚</span> Learning Journey
          </h2>
          {sampleResumeData.education.map((edu, index) => (
            <div key={index} className="border-l-4 border-green-400 pl-4">
              <h3 className="font-bold text-gray-900">{edu.degree}</h3>
              <p className="text-green-600">{edu.institution}</p>
              <p className="text-sm text-gray-500">{edu.graduationDate}</p>
            </div>
          ))}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg transform -rotate-1">
          <h2 className="text-xl font-bold text-blue-600 mb-4 flex items-center">
            <span className="mr-3 text-2xl">🛠️</span> Superpowers
          </h2>
          <div className="flex flex-wrap gap-2">
            {sampleResumeData.skills.map((skill, index) => (
              <span
                key={index}
                className={`bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm transform ${index % 2 === 0 ? "rotate-3" : "-rotate-3"}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

const CreativeTemplate7 = () => (
  <Card className="w-full max-w-4xl mx-auto bg-white">
    <CardContent className="p-0">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 to-pink-500"></div>
        <div className="relative p-8 text-center text-white">
          <h1 className="text-5xl font-bold mb-2 drop-shadow-lg">{sampleResumeData.personalInfo.name}</h1>
          <p className="text-2xl mb-4 drop-shadow">{sampleResumeData.personalInfo.title}</p>
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
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="p-8">
        <div className="mb-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent inline-block">
              Creative Manifesto
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto mt-2"></div>
          </div>
          <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg border-l-4 border-red-500">
            <p className="text-gray-700 leading-relaxed text-lg italic text-center">{sampleResumeData.summary}</p>
          </div>
        </div>

        <div className="mb-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent inline-block">
              Creative Portfolio
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-red-500 mx-auto mt-2"></div>
          </div>
          <div className="space-y-6">
            {sampleResumeData.experience.map((exp, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-lg shadow-xl border-t-4 border-gradient-to-r from-red-500 to-pink-500">
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Project {index + 1}
                  </div>
                  <div className="flex justify-between items-start mb-3 mt-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                      <p className="text-red-600 font-semibold">{exp.company}</p>
                    </div>
                    <span className="bg-gradient-to-r from-yellow-100 to-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-red-500 mr-2 text-lg">●</span>
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
          <div className="bg-gradient-to-br from-yellow-50 to-red-50 p-6 rounded-lg shadow-lg">
            <div className="text-center mb-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent">
                Education
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-red-500 mx-auto mt-2"></div>
            </div>
            {sampleResumeData.education.map((edu, index) => (
              <div key={index} className="text-center">
                <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                <p className="text-red-600">{edu.institution}</p>
                <p className="text-sm text-gray-500">{edu.graduationDate}</p>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-br from-pink-50 to-red-50 p-6 rounded-lg shadow-lg">
            <div className="text-center mb-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
                Skills
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-red-500 mx-auto mt-2"></div>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {sampleResumeData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

const CreativeTemplate8 = () => (
  <Card className="w-full max-w-4xl mx-auto bg-gray-50">
    <CardContent className="p-8">
      <div className="relative mb-8">
        <div className="bg-white p-8 rounded-lg shadow-2xl border-4 border-dashed border-purple-300">
          <div className="text-center">
            <div className="relative inline-block mb-4">
              <div className="w-28 h-28 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">
                  {sampleResumeData.personalInfo.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                <span className="text-sm">🎨</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{sampleResumeData.personalInfo.name}</h1>
            <p className="text-2xl text-purple-600 mb-4">{sampleResumeData.personalInfo.title}</p>
            <div className="flex justify-center gap-4 text-sm">
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                {sampleResumeData.personalInfo.email}
              </span>
              <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full">
                {sampleResumeData.personalInfo.phone}
              </span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                {sampleResumeData.personalInfo.location}
              </span>
            </div>
          </div>
        </div>
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full"></div>
        <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-pink-400 rounded-full"></div>
        <div className="absolute top-1/2 -right-2 w-4 h-4 bg-purple-400 rounded-full"></div>
      </div>

      <div className="mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-8 border-purple-400">
          <h2 className="text-2xl font-bold text-purple-600 mb-4 flex items-center">
            <span className="mr-3 text-3xl">💭</span> Creative Philosophy
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">{sampleResumeData.summary}</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            🚀 Creative Journey
          </span>
        </h2>
        <div className="space-y-6">
          {sampleResumeData.experience.map((exp, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-dashed border-gray-300 hover:border-purple-400 transition-colors">
                <div className="absolute -top-3 left-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Chapter {index + 1}
                </div>
                <div className="flex justify-between items-start mb-3 mt-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                    <p className="text-purple-600 font-semibold">{exp.company}</p>
                  </div>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-pink-500 mr-2 text-lg">✦</span>
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
        <div className="bg-white p-6 rounded-lg shadow-lg border-4 border-dashed border-purple-200">
          <h2 className="text-xl font-bold text-purple-600 mb-4 text-center flex items-center justify-center">
            <span className="mr-2 text-2xl">🎓</span> Learning Path
          </h2>
          {sampleResumeData.education.map((edu, index) => (
            <div key={index} className="text-center p-4 bg-purple-50 rounded-lg">
              <h3 className="font-bold text-gray-900">{edu.degree}</h3>
              <p className="text-purple-600">{edu.institution}</p>
              <p className="text-sm text-gray-500">{edu.graduationDate}</p>
            </div>
          ))}
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg border-4 border-dashed border-pink-200">
          <h2 className="text-xl font-bold text-pink-600 mb-4 text-center flex items-center justify-center">
            <span className="mr-2 text-2xl">⚡</span> Skill Palette
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {sampleResumeData.skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-purple-100 to-pink-100 p-2 rounded text-center border-2 border-dashed border-purple-300"
              >
                <span className="text-purple-800 text-sm font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

const CreativeTemplate9 = () => (
  <Card className="w-full max-w-4xl mx-auto bg-gradient-to-br from-orange-50 to-red-50">
    <CardContent className="p-8">
      <div className="relative mb-8">
        <div className="bg-white p-8 rounded-3xl shadow-2xl transform -rotate-1">
          <div className="text-center transform rotate-1">
            <div className="w-32 h-32 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
              <span className="text-3xl font-bold text-white">
                {sampleResumeData.personalInfo.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{sampleResumeData.personalInfo.name}</h1>
            <p className="text-2xl text-orange-600 mb-4">{sampleResumeData.personalInfo.title}</p>
            <div className="flex justify-center gap-4 text-sm">
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full">
                {sampleResumeData.personalInfo.email}
              </span>
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full">
                {sampleResumeData.personalInfo.phone}
              </span>
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full">
                {sampleResumeData.personalInfo.location}
              </span>
            </div>
          </div>
        </div>
        <div className="absolute -top-2 -left-2 w-6 h-6 bg-yellow-400 rounded-full"></div>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-red-400 rounded-full"></div>
        <div className="absolute top-4 -right-2 w-4 h-4 bg-orange-400 rounded-full"></div>
      </div>

      <div className="mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-lg transform rotate-1">
          <h2 className="text-2xl font-bold text-orange-600 mb-4 flex items-center transform -rotate-1">
            <span className="mr-3 text-3xl">🔥</span> Creative Fire
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg transform -rotate-1">{sampleResumeData.summary}</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
          🎨 Creative Adventures
        </h2>
        <div className="space-y-6">
          {sampleResumeData.experience.map((exp, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-2xl shadow-lg transform ${index % 2 === 0 ? "rotate-1" : "-rotate-1"}`}
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                  <p className="text-orange-600 font-semibold">{exp.company}</p>
                </div>
                <span className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                  {exp.startDate} - {exp.endDate}
                </span>
              </div>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-red-500 mr-2 text-lg">🌟</span>
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg transform -rotate-1">
          <h2 className="text-xl font-bold text-orange-600 mb-4 flex items-center">
            <span className="mr-3 text-2xl">📚</span> Knowledge Base
          </h2>
          {sampleResumeData.education.map((edu, index) => (
            <div key={index} className="border-l-4 border-orange-400 pl-4">
              <h3 className="font-bold text-gray-900">{edu.degree}</h3>
              <p className="text-orange-600">{edu.institution}</p>
              <p className="text-sm text-gray-500">{edu.graduationDate}</p>
            </div>
          ))}
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg transform rotate-1">
          <h2 className="text-xl font-bold text-red-600 mb-4 flex items-center">
            <span className="mr-3 text-2xl">⚡</span> Power Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {sampleResumeData.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

const CreativeTemplate10 = () => (
  <Card className="w-full max-w-4xl mx-auto bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
    <CardContent className="p-8">
      <div className="relative mb-8">
        <div className="text-center">
          <div className="relative inline-block mb-6">
            <div className="w-36 h-36 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full flex items-center justify-center shadow-2xl">
              <span className="text-4xl font-bold text-white">
                {sampleResumeData.personalInfo.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full animate-pulse opacity-50"></div>
          </div>
          <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
            {sampleResumeData.personalInfo.name}
          </h1>
          <p className="text-2xl text-purple-200 mb-6">{sampleResumeData.personalInfo.title}</p>
          <div className="flex justify-center gap-4 text-sm">
            <span className="bg-white bg-opacity-10 backdrop-blur px-4 py-2 rounded-full border border-white border-opacity-20">
              {sampleResumeData.personalInfo.email}
            </span>
            <span className="bg-white bg-opacity-10 backdrop-blur px-4 py-2 rounded-full border border-white border-opacity-20">
              {sampleResumeData.personalInfo.phone}
            </span>
            <span className="bg-white bg-opacity-10 backdrop-blur px-4 py-2 rounded-full border border-white border-opacity-20">
              {sampleResumeData.personalInfo.location}
            </span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="bg-white bg-opacity-10 backdrop-blur p-8 rounded-2xl border border-white border-opacity-20">
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
            ✨ Creative Universe ✨
          </h2>
          <p className="text-purple-100 leading-relaxed text-lg text-center italic">{sampleResumeData.summary}</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
          🚀 Cosmic Journey
        </h2>
        <div className="space-y-6">
          {sampleResumeData.experience.map((exp, index) => (
            <div key={index} className="relative">
              <div className="bg-gradient-to-r from-purple-800 to-pink-800 p-6 rounded-2xl border border-purple-400 shadow-2xl">
                <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-400 to-pink-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                  Mission {index + 1}
                </div>
                <div className="flex justify-between items-start mb-4 mt-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.position}</h3>
                    <p className="text-cyan-300 font-semibold text-lg">{exp.company}</p>
                  </div>
                  <span className="bg-white bg-opacity-20 backdrop-blur px-3 py-1 rounded-full text-sm border border-white border-opacity-30">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-pink-400 mr-3 text-xl">⭐</span>
                      <span className="text-purple-100">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white bg-opacity-10 backdrop-blur p-6 rounded-2xl border border-white border-opacity-20">
          <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            🎓 Knowledge Galaxy
          </h2>
          {sampleResumeData.education.map((edu, index) => (
            <div
              key={index}
              className="text-center p-4 bg-purple-800 bg-opacity-50 rounded-lg border border-purple-400"
            >
              <h3 className="font-bold text-white text-lg">{edu.degree}</h3>
              <p className="text-cyan-300">{edu.institution}</p>
              <p className="text-sm text-purple-200">{edu.graduationDate}</p>
            </div>
          ))}
        </div>
        <div className="bg-white bg-opacity-10 backdrop-blur p-6 rounded-2xl border border-white border-opacity-20">
          <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            ⚡ Skill Constellation
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {sampleResumeData.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-cyan-500 to-pink-500 px-4 py-2 rounded-full text-sm font-medium shadow-lg border border-white border-opacity-30"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

export function CreativeTemplates() {
  const templates = [
    { id: 1, name: "Gradient Dreams", component: CreativeTemplate1 },
    { id: 2, name: "Dark Creative", component: CreativeTemplate2 },
    { id: 3, name: "Sidebar Artist", component: CreativeTemplate3 },
    { id: 4, name: "Skewed Design", component: CreativeTemplate4 },
    { id: 5, name: "Neon Vibes", component: CreativeTemplate5 },
    { id: 6, name: "Playful Rotation", component: CreativeTemplate6 },
    { id: 7, name: "Rainbow Header", component: CreativeTemplate7 },
    { id: 8, name: "Dashed Borders", component: CreativeTemplate8 },
    { id: 9, name: "Warm Tones", component: CreativeTemplate9 },
    { id: 10, name: "Cosmic Theme", component: CreativeTemplate10 },
  ]

  return (
    <div className="space-y-8">
      {templates.map((template) => (
        <div key={template.id} className="space-y-4">
          <h3 className="text-lg font-semibold text-center">
            Creative Template {template.id}: {template.name}
          </h3>
          <template.component />
        </div>
      ))}
    </div>
  )
}
