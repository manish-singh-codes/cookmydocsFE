import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { sampleResumeData } from "@/app/config/sampledata"

const ProfessionalTemplate1 = () => (
  <Card className="w-full max-w-4xl mx-auto">
    <CardContent className="p-8">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">{sampleResumeData.personalInfo.name}</h1>
        <p className="text-xl text-gray-600 mt-2">{sampleResumeData.personalInfo.title}</p>
        <div className="flex justify-center gap-4 mt-3 text-sm text-gray-600">
          <span>{sampleResumeData.personalInfo.email}</span>
          <span>{sampleResumeData.personalInfo.phone}</span>
          <span>{sampleResumeData.personalInfo.location}</span>
        </div>
      </div>

      <Separator className="my-6" />

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Professional Summary</h2>
        <p className="text-gray-700 leading-relaxed">{sampleResumeData.summary}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Experience</h2>
        {sampleResumeData.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                <p className="text-gray-600">{exp.company}</p>
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

      <div className="grid grid-cols-2 gap-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Education</h2>
          {sampleResumeData.education.map((edu, index) => (
            <div key={index}>
              <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-sm text-gray-500">{edu.graduationDate}</p>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {sampleResumeData.skills.map((skill, index) => (
              <Badge key={index} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

const ProfessionalTemplate2 = () => (
  <Card className="w-full max-w-4xl mx-auto">
    <CardContent className="p-0">
      <div className="bg-blue-900 text-white p-8">
        <h1 className="text-3xl font-bold">{sampleResumeData.personalInfo.name}</h1>
        <p className="text-xl text-blue-200 mt-2">{sampleResumeData.personalInfo.title}</p>
        <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
          <div>
            <p>{sampleResumeData.personalInfo.email}</p>
            <p>{sampleResumeData.personalInfo.phone}</p>
          </div>
          <div>
            <p>{sampleResumeData.personalInfo.location}</p>
            <p>{sampleResumeData.personalInfo.website}</p>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-blue-900 mb-3 border-b-2 border-blue-900 pb-1">
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-gray-700 leading-relaxed">{sampleResumeData.summary}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-blue-900 mb-3 border-b-2 border-blue-900 pb-1">EXPERIENCE</h2>
          {sampleResumeData.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                  <p className="text-blue-700 font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
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

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-semibold text-blue-900 mb-3 border-b-2 border-blue-900 pb-1">EDUCATION</h2>
            {sampleResumeData.education.map((edu, index) => (
              <div key={index}>
                <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                <p className="text-blue-700">{edu.institution}</p>
                <p className="text-sm text-gray-500">{edu.graduationDate}</p>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-lg font-semibold text-blue-900 mb-3 border-b-2 border-blue-900 pb-1">SKILLS</h2>
            <div className="flex flex-wrap gap-2">
              {sampleResumeData.skills.map((skill, index) => (
                <Badge key={index} className="bg-blue-100 text-blue-900 hover:bg-blue-200">
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

const ProfessionalTemplate3 = () => (
  <Card className="w-full max-w-4xl mx-auto">
    <CardContent className="p-0">
      <div className="grid grid-cols-3">
        <div className="col-span-1 bg-gray-800 text-white p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2">{sampleResumeData.personalInfo.name}</h1>
            <p className="text-gray-300">{sampleResumeData.personalInfo.title}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">Contact</h2>
            <div className="space-y-2 text-sm">
              <p>{sampleResumeData.personalInfo.email}</p>
              <p>{sampleResumeData.personalInfo.phone}</p>
              <p>{sampleResumeData.personalInfo.location}</p>
              <p>{sampleResumeData.personalInfo.website}</p>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">Skills</h2>
            <div className="space-y-2">
              {sampleResumeData.skills.map((skill, index) => (
                <div key={index} className="text-sm">
                  <p className="text-white">{skill}</p>
                  <div className="w-full bg-gray-600 rounded-full h-1 mt-1">
                    <div className="bg-white h-1 rounded-full" style={{ width: `${Math.random() * 40 + 60}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">Education</h2>
            {sampleResumeData.education.map((edu, index) => (
              <div key={index} className="text-sm">
                <p className="text-white font-medium">{edu.degree}</p>
                <p className="text-gray-300">{edu.institution}</p>
                <p className="text-gray-400">{edu.graduationDate}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-2 p-6">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Professional Summary</h2>
            <p className="text-gray-700 leading-relaxed">{sampleResumeData.summary}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Experience</h2>
            {sampleResumeData.experience.map((exp, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                    <p className="text-gray-600">{exp.company}</p>
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

const ProfessionalTemplate4 = () => (
  <Card className="w-full max-w-4xl mx-auto border-l-4 border-l-green-600">
    <CardContent className="p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">{sampleResumeData.personalInfo.name}</h1>
        <p className="text-xl text-green-600 mt-2 font-medium">{sampleResumeData.personalInfo.title}</p>
        <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">
          <span>📧 {sampleResumeData.personalInfo.email}</span>
          <span>📱 {sampleResumeData.personalInfo.phone}</span>
          <span>📍 {sampleResumeData.personalInfo.location}</span>
          <span>🌐 {sampleResumeData.personalInfo.website}</span>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-green-600 mb-3 flex items-center">
          <div className="w-4 h-4 bg-green-600 rounded-full mr-2"></div>
          Professional Summary
        </h2>
        <p className="text-gray-700 leading-relaxed ml-6">{sampleResumeData.summary}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-green-600 mb-3 flex items-center">
          <div className="w-4 h-4 bg-green-600 rounded-full mr-2"></div>
          Experience
        </h2>
        <div className="ml-6">
          {sampleResumeData.experience.map((exp, index) => (
            <div key={index} className="mb-4 border-l-2 border-green-200 pl-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                  <p className="text-green-600 font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-500 bg-green-50 px-2 py-1 rounded">
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

      <div className="grid grid-cols-2 gap-6">
        <div>
          <h2 className="text-lg font-semibold text-green-600 mb-3 flex items-center">
            <div className="w-4 h-4 bg-green-600 rounded-full mr-2"></div>
            Education
          </h2>
          <div className="ml-6">
            {sampleResumeData.education.map((edu, index) => (
              <div key={index}>
                <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                <p className="text-green-600">{edu.institution}</p>
                <p className="text-sm text-gray-500">{edu.graduationDate}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-green-600 mb-3 flex items-center">
            <div className="w-4 h-4 bg-green-600 rounded-full mr-2"></div>
            Skills
          </h2>
          <div className="ml-6 flex flex-wrap gap-2">
            {sampleResumeData.skills.map((skill, index) => (
              <Badge key={index} className="bg-green-100 text-green-800 hover:bg-green-200">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

const ProfessionalTemplate5 = () => (
  <Card className="w-full max-w-4xl mx-auto">
    <CardContent className="p-8">
      <div className="text-center mb-8 border-b-2 border-gray-200 pb-6">
        <h1 className="text-4xl font-light text-gray-900 mb-2">{sampleResumeData.personalInfo.name}</h1>
        <p className="text-xl text-gray-600 mb-4">{sampleResumeData.personalInfo.title}</p>
        <div className="flex justify-center gap-6 text-sm text-gray-600">
          <span>{sampleResumeData.personalInfo.email}</span>
          <span>|</span>
          <span>{sampleResumeData.personalInfo.phone}</span>
          <span>|</span>
          <span>{sampleResumeData.personalInfo.location}</span>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-light text-gray-900 mb-4 text-center">PROFESSIONAL SUMMARY</h2>
        <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">{sampleResumeData.summary}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-light text-gray-900 mb-4 text-center">EXPERIENCE</h2>
        {sampleResumeData.experience.map((exp, index) => (
          <div key={index} className="mb-6 text-center">
            <h3 className="font-semibold text-gray-900 text-lg">{exp.position}</h3>
            <p className="text-gray-600 mb-1">
              {exp.company} | {exp.startDate} - {exp.endDate}
            </p>
            <div className="max-w-3xl mx-auto">
              <ul className="text-gray-700 space-y-1">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>• {achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="text-center">
          <h2 className="text-xl font-light text-gray-900 mb-4">EDUCATION</h2>
          {sampleResumeData.education.map((edu, index) => (
            <div key={index}>
              <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-sm text-gray-500">{edu.graduationDate}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <h2 className="text-xl font-light text-gray-900 mb-4">SKILLS</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {sampleResumeData.skills.map((skill, index) => (
              <Badge key={index} variant="outline" className="border-gray-400">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

// Templates 6-10 continue with similar professional styling variations
const ProfessionalTemplate6 = () => (
  <Card className="w-full max-w-4xl mx-auto shadow-lg">
    <CardContent className="p-0">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold">{sampleResumeData.personalInfo.name}</h1>
            <p className="text-xl text-purple-100 mt-2">{sampleResumeData.personalInfo.title}</p>
          </div>
          <div className="text-right text-sm">
            <p>{sampleResumeData.personalInfo.email}</p>
            <p>{sampleResumeData.personalInfo.phone}</p>
            <p>{sampleResumeData.personalInfo.location}</p>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-purple-600 mb-3 uppercase tracking-wide">Summary</h2>
          <p className="text-gray-700 leading-relaxed">{sampleResumeData.summary}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-purple-600 mb-3 uppercase tracking-wide">Experience</h2>
          {sampleResumeData.experience.map((exp, index) => (
            <div key={index} className="mb-4 pb-4 border-b border-gray-200 last:border-b-0">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                  <p className="text-purple-600 font-medium">{exp.company}</p>
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

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-semibold text-purple-600 mb-3 uppercase tracking-wide">Education</h2>
            {sampleResumeData.education.map((edu, index) => (
              <div key={index}>
                <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                <p className="text-purple-600">{edu.institution}</p>
                <p className="text-sm text-gray-500">{edu.graduationDate}</p>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-lg font-semibold text-purple-600 mb-3 uppercase tracking-wide">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {sampleResumeData.skills.map((skill, index) => (
                <Badge key={index} className="bg-purple-100 text-purple-800 hover:bg-purple-200">
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

const ProfessionalTemplate7 = () => (
  <Card className="w-full max-w-4xl mx-auto">
    <CardContent className="p-8">
      <div className="border-2 border-gray-300 p-6 mb-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{sampleResumeData.personalInfo.name}</h1>
          <p className="text-xl text-gray-600 mb-4">{sampleResumeData.personalInfo.title}</p>
          <div className="flex justify-center gap-4 text-sm text-gray-600">
            <span>{sampleResumeData.personalInfo.email}</span>
            <span>•</span>
            <span>{sampleResumeData.personalInfo.phone}</span>
            <span>•</span>
            <span>{sampleResumeData.personalInfo.location}</span>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-3 bg-gray-100 p-2">PROFESSIONAL SUMMARY</h2>
          <p className="text-gray-700 leading-relaxed">{sampleResumeData.summary}</p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-3 bg-gray-100 p-2">PROFESSIONAL EXPERIENCE</h2>
          {sampleResumeData.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-gray-900">{exp.position}</h3>
                  <p className="text-gray-700 font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-600 font-medium">
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

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3 bg-gray-100 p-2">EDUCATION</h2>
            {sampleResumeData.education.map((edu, index) => (
              <div key={index}>
                <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                <p className="text-gray-700">{edu.institution}</p>
                <p className="text-sm text-gray-600">{edu.graduationDate}</p>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-3 bg-gray-100 p-2">TECHNICAL SKILLS</h2>
            <div className="flex flex-wrap gap-2">
              {sampleResumeData.skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="font-medium">
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

const ProfessionalTemplate8 = () => (
  <Card className="w-full max-w-4xl mx-auto">
    <CardContent className="p-8">
      <div className="flex items-center mb-6">
        <div className="w-20 h-20 bg-gray-300 rounded-full mr-6 flex items-center justify-center">
          <span className="text-2xl font-bold text-gray-600">
            {sampleResumeData.personalInfo.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900">{sampleResumeData.personalInfo.name}</h1>
          <p className="text-xl text-gray-600 mt-1">{sampleResumeData.personalInfo.title}</p>
          <div className="flex gap-4 mt-2 text-sm text-gray-600">
            <span>{sampleResumeData.personalInfo.email}</span>
            <span>{sampleResumeData.personalInfo.phone}</span>
            <span>{sampleResumeData.personalInfo.location}</span>
          </div>
        </div>
      </div>

      <Separator className="my-6" />

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Professional Summary</h2>
            <p className="text-gray-700 leading-relaxed">{sampleResumeData.summary}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Experience</h2>
            {sampleResumeData.experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                    <p className="text-gray-600">{exp.company}</p>
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

        <div>
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Skills</h2>
            <div className="space-y-2">
              {sampleResumeData.skills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                  <span className="text-sm text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Education</h2>
            {sampleResumeData.education.map((edu, index) => (
              <div key={index}>
                <h3 className="font-semibold text-gray-900 text-sm">{edu.degree}</h3>
                <p className="text-gray-600 text-sm">{edu.institution}</p>
                <p className="text-xs text-gray-500">{edu.graduationDate}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

const ProfessionalTemplate9 = () => (
  <Card className="w-full max-w-4xl mx-auto border-t-4 border-t-red-600">
    <CardContent className="p-8">
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{sampleResumeData.personalInfo.name}</h1>
        <p className="text-2xl text-red-600 font-light mb-4">{sampleResumeData.personalInfo.title}</p>
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
          <div>
            <p>
              <strong>Email:</strong> {sampleResumeData.personalInfo.email}
            </p>
            <p>
              <strong>Phone:</strong> {sampleResumeData.personalInfo.phone}
            </p>
          </div>
          <div>
            <p>
              <strong>Location:</strong> {sampleResumeData.personalInfo.location}
            </p>
            <p>
              <strong>Website:</strong> {sampleResumeData.personalInfo.website}
            </p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center mb-3">
          <div className="w-8 h-0.5 bg-red-600 mr-3"></div>
          <h2 className="text-lg font-semibold text-gray-900">PROFESSIONAL SUMMARY</h2>
        </div>
        <p className="text-gray-700 leading-relaxed">{sampleResumeData.summary}</p>
      </div>

      <div className="mb-6">
        <div className="flex items-center mb-3">
          <div className="w-8 h-0.5 bg-red-600 mr-3"></div>
          <h2 className="text-lg font-semibold text-gray-900">EXPERIENCE</h2>
        </div>
        {sampleResumeData.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                <p className="text-red-600 font-medium">{exp.company}</p>
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

      <div className="grid grid-cols-2 gap-6">
        <div>
          <div className="flex items-center mb-3">
            <div className="w-8 h-0.5 bg-red-600 mr-3"></div>
            <h2 className="text-lg font-semibold text-gray-900">EDUCATION</h2>
          </div>
          {sampleResumeData.education.map((edu, index) => (
            <div key={index}>
              <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
              <p className="text-red-600">{edu.institution}</p>
              <p className="text-sm text-gray-500">{edu.graduationDate}</p>
            </div>
          ))}
        </div>
        <div>
          <div className="flex items-center mb-3">
            <div className="w-8 h-0.5 bg-red-600 mr-3"></div>
            <h2 className="text-lg font-semibold text-gray-900">SKILLS</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {sampleResumeData.skills.map((skill, index) => (
              <Badge key={index} className="bg-red-100 text-red-800 hover:bg-red-200">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

const ProfessionalTemplate10 = () => (
  <Card className="w-full max-w-4xl mx-auto">
    <CardContent className="p-8">
      <div className="text-center mb-8">
        <div className="inline-block border-4 border-gray-900 p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{sampleResumeData.personalInfo.name}</h1>
          <p className="text-xl text-gray-600">{sampleResumeData.personalInfo.title}</p>
        </div>
        <div className="mt-4 text-sm text-gray-600">
          {sampleResumeData.personalInfo.email} | {sampleResumeData.personalInfo.phone} |{" "}
          {sampleResumeData.personalInfo.location}
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-4 text-center border-b-2 border-gray-900 pb-2">
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-gray-700 leading-relaxed text-center">{sampleResumeData.summary}</p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-4 text-center border-b-2 border-gray-900 pb-2">
            EXPERIENCE
          </h2>
          {sampleResumeData.experience.map((exp, index) => (
            <div key={index} className="mb-6">
              <div className="text-center mb-2">
                <h3 className="font-bold text-gray-900">{exp.position}</h3>
                <p className="text-gray-600">
                  {exp.company} | {exp.startDate} - {exp.endDate}
                </p>
              </div>
              <ul className="text-gray-700 space-y-1 max-w-3xl mx-auto">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="text-center">
                    • {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-4 text-center border-b-2 border-gray-900 pb-2">
              EDUCATION
            </h2>
            <div className="text-center">
              {sampleResumeData.education.map((edu, index) => (
                <div key={index}>
                  <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                  <p className="text-gray-600">{edu.institution}</p>
                  <p className="text-sm text-gray-500">{edu.graduationDate}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-4 text-center border-b-2 border-gray-900 pb-2">SKILLS</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {sampleResumeData.skills.map((skill, index) => (
                <Badge key={index} variant="outline" className="border-gray-900">
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

export function ProfessionalTemplates() {
  const templates = [
    { id: 1, name: "Classic Professional", component: ProfessionalTemplate1 },
    { id: 2, name: "Corporate Blue", component: ProfessionalTemplate2 },
    { id: 3, name: "Sidebar Professional", component: ProfessionalTemplate3 },
    { id: 4, name: "Green Accent", component: ProfessionalTemplate4 },
    { id: 5, name: "Elegant Centered", component: ProfessionalTemplate5 },
    { id: 6, name: "Purple Gradient", component: ProfessionalTemplate6 },
    { id: 7, name: "Boxed Layout", component: ProfessionalTemplate7 },
    { id: 8, name: "Photo Professional", component: ProfessionalTemplate8 },
    { id: 9, name: "Red Accent", component: ProfessionalTemplate9 },
    { id: 10, name: "Formal Border", component: ProfessionalTemplate10 },
  ]

  // Return an array of elements, each as a grid item
  return templates.map((template) => (
    <div key={template.id} className="space-y-2 h-full w-full max-w-4xl mx-auto text-xs">
      <h3 className="text-base text-center">
        {template.name}
      </h3>
      <template.component />
    </div>
  ))
}
