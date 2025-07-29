import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { sampleResumeData } from "@/app/config/sampledata"

const SimpleTemplate1 = () => (
  <Card className="w-full max-w-4xl mx-auto">
    <CardContent className="p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">{sampleResumeData.personalInfo.name}</h1>
        <p className="text-gray-600 mb-2">{sampleResumeData.personalInfo.title}</p>
        <p className="text-sm text-gray-500">
          {sampleResumeData.personalInfo.email} • {sampleResumeData.personalInfo.phone} •{" "}
          {sampleResumeData.personalInfo.location}
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Summary</h2>
        <p className="text-gray-700 leading-relaxed">{sampleResumeData.summary}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Experience</h2>
        {sampleResumeData.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-start mb-1">
              <div>
                <h3 className="font-medium text-gray-900">{exp.position}</h3>
                <p className="text-gray-600">{exp.company}</p>
              </div>
              <span className="text-sm text-gray-500">
                {exp.startDate} - {exp.endDate}
              </span>
            </div>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
              {exp.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Education</h2>
          {sampleResumeData.education.map((edu, index) => (
            <div key={index}>
              <h3 className="font-medium text-gray-900">{edu.degree}</h3>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-sm text-gray-500">{edu.graduationDate}</p>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Skills</h2>
          <div className="flex flex-wrap gap-1">
            {sampleResumeData.skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

const SimpleTemplate2 = () => (
  <Card className="w-full max-w-4xl mx-auto">
    <CardContent className="p-8">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{sampleResumeData.personalInfo.name}</h1>
        <p className="text-lg text-gray-600 mb-3">{sampleResumeData.personalInfo.title}</p>
        <p className="text-sm text-gray-500">
          {sampleResumeData.personalInfo.email} | {sampleResumeData.personalInfo.phone} |{" "}
          {sampleResumeData.personalInfo.location}
        </p>
      </div>

      <Separator className="my-6" />

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Professional Summary</h2>
        <p className="text-gray-700 leading-relaxed">{sampleResumeData.summary}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Work Experience</h2>
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
              <Badge key={index} variant="outline">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

const SimpleTemplate3 = () => (
  <Card className="w-full max-w-4xl mx-auto">
    <CardContent className="p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-light text-gray-900 mb-2">{sampleResumeData.personalInfo.name}</h1>
        <p className="text-xl text-gray-600 mb-3">{sampleResumeData.personalInfo.title}</p>
        <div className="text-sm text-gray-500 space-y-1">
          <p>{sampleResumeData.personalInfo.email}</p>
          <p>{sampleResumeData.personalInfo.phone}</p>
          <p>{sampleResumeData.personalInfo.location}</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-2 border-b border-gray-200 pb-1">Summary</h2>
          <p className="text-gray-700 leading-relaxed">{sampleResumeData.summary}</p>
        </div>

        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-2 border-b border-gray-200 pb-1">Experience</h2>
          {sampleResumeData.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="font-medium text-gray-900">{exp.position}</h3>
                  <p className="text-gray-600 text-sm">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-500">
                  {exp.startDate} - {exp.endDate}
                </span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm mt-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-2 border-b border-gray-200 pb-1">Education</h2>
            {sampleResumeData.education.map((edu, index) => (
              <div key={index}>
                <h3 className="font-medium text-gray-900">{edu.degree}</h3>
                <p className="text-gray-600 text-sm">{edu.institution}</p>
                <p className="text-xs text-gray-500">{edu.graduationDate}</p>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-2 border-b border-gray-200 pb-1">Skills</h2>
            <p className="text-gray-700 text-sm">{sampleResumeData.skills.join(", ")}</p>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

const SimpleTemplate4 = () => (
  <Card className="w-full max-w-4xl mx-auto">
    <CardContent className="p-8">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{sampleResumeData.personalInfo.name}</h1>
          <p className="text-gray-600">{sampleResumeData.personalInfo.title}</p>
        </div>
        <div className="text-right text-sm text-gray-500">
          <p>{sampleResumeData.personalInfo.email}</p>
          <p>{sampleResumeData.personalInfo.phone}</p>
          <p>{sampleResumeData.personalInfo.location}</p>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-gray-700 leading-relaxed">{sampleResumeData.summary}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Experience</h2>
        {sampleResumeData.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-semibold text-gray-900">
                {exp.position} - {exp.company}
              </h3>
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
              <p className="text-gray-600">
                {edu.institution}, {edu.graduationDate}
              </p>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Skills</h2>
          <p className="text-gray-700">{sampleResumeData.skills.join(" • ")}</p>
        </div>
      </div>
    </CardContent>
  </Card>
)

const SimpleTemplate5 = () => (
  <Card className="w-full max-w-4xl mx-auto">
    <CardContent className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-light text-gray-900 mb-2">{sampleResumeData.personalInfo.name}</h1>
        <p className="text-lg text-gray-600 mb-4">{sampleResumeData.personalInfo.title}</p>
        <div className="flex gap-4 text-sm text-gray-500">
          <span>{sampleResumeData.personalInfo.email}</span>
          <span>{sampleResumeData.personalInfo.phone}</span>
          <span>{sampleResumeData.personalInfo.location}</span>
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <p className="text-gray-700 leading-relaxed text-lg">{sampleResumeData.summary}</p>
        </div>

        <div>
          <h2 className="text-xl font-light text-gray-900 mb-4">Experience</h2>
          {sampleResumeData.experience.map((exp, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium text-gray-900">{exp.position}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-500">
                  {exp.startDate} - {exp.endDate}
                </span>
              </div>
              <ul className="text-gray-700 space-y-1">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>• {achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-light text-gray-900 mb-4">Education</h2>
            {sampleResumeData.education.map((edu, index) => (
              <div key={index}>
                <h3 className="font-medium text-gray-900">{edu.degree}</h3>
                <p className="text-gray-600">{edu.institution}</p>
                <p className="text-sm text-gray-500">{edu.graduationDate}</p>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-xl font-light text-gray-900 mb-4">Skills</h2>
            <p className="text-gray-700">{sampleResumeData.skills.join(", ")}</p>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

const SimpleTemplate6 = () => (
  <Card className="w-full max-w-4xl mx-auto">
    <CardContent className="p-8">
      <div className="border-l-4 border-gray-400 pl-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">{sampleResumeData.personalInfo.name}</h1>
        <p className="text-lg text-gray-600 mb-3">{sampleResumeData.personalInfo.title}</p>
        <div className="text-sm text-gray-500">
          {sampleResumeData.personalInfo.email} • {sampleResumeData.personalInfo.phone} •{" "}
          {sampleResumeData.personalInfo.location}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">About</h2>
        <p className="text-gray-700 leading-relaxed">{sampleResumeData.summary}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Work History</h2>
        {sampleResumeData.experience.map((exp, index) => (
          <div key={index} className="mb-4 border-l-2 border-gray-200 pl-4">
            <div className="flex justify-between items-start mb-1">
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
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Education</h2>
          <div className="border-l-2 border-gray-200 pl-4">
            {sampleResumeData.education.map((edu, index) => (
              <div key={index}>
                <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                <p className="text-gray-600">{edu.institution}</p>
                <p className="text-sm text-gray-500">{edu.graduationDate}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Skills</h2>
          <div className="space-y-1">
            {sampleResumeData.skills.map((skill, index) => (
              <div key={index} className="text-gray-700">
                • {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

const SimpleTemplate7 = () => (
  <Card className="w-full max-w-4xl mx-auto">
    <CardContent className="p-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{sampleResumeData.personalInfo.name}</h1>
        <p className="text-lg text-gray-600 mb-4">{sampleResumeData.personalInfo.title}</p>
        <div className="text-sm text-gray-500">
          {sampleResumeData.personalInfo.email} | {sampleResumeData.personalInfo.phone} |{" "}
          {sampleResumeData.personalInfo.location}
        </div>
      </div>

      <div className="mb-8">
        <p className="text-gray-700 leading-relaxed text-center">{sampleResumeData.summary}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 text-center">Experience</h2>
        {sampleResumeData.experience.map((exp, index) => (
          <div key={index} className="mb-6 text-center">
            <h3 className="font-semibold text-gray-900 text-lg">{exp.position}</h3>
            <p className="text-gray-600 mb-1">{exp.company}</p>
            <p className="text-sm text-gray-500 mb-3">
              {exp.startDate} - {exp.endDate}
            </p>
            <div className="text-gray-700">
              {exp.achievements.map((achievement, i) => (
                <p key={i} className="mb-1">
                  • {achievement}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Education</h2>
          {sampleResumeData.education.map((edu, index) => (
            <div key={index}>
              <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-sm text-gray-500">{edu.graduationDate}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Skills</h2>
          <p className="text-gray-700">{sampleResumeData.skills.join(" • ")}</p>
        </div>
      </div>
    </CardContent>
  </Card>
)

const SimpleTemplate8 = () => (
  <Card className="w-full max-w-4xl mx-auto">
    <CardContent className="p-8">
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-1">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">{sampleResumeData.personalInfo.name}</h1>
            <p className="text-gray-600">{sampleResumeData.personalInfo.title}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Contact</h2>
            <div className="text-sm text-gray-600 space-y-1">
              <p>{sampleResumeData.personalInfo.email}</p>
              <p>{sampleResumeData.personalInfo.phone}</p>
              <p>{sampleResumeData.personalInfo.location}</p>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Skills</h2>
            <div className="space-y-1">
              {sampleResumeData.skills.map((skill, index) => (
                <div key={index} className="text-sm text-gray-700">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Education</h2>
            {sampleResumeData.education.map((edu, index) => (
              <div key={index} className="text-sm">
                <h3 className="font-medium text-gray-900">{edu.degree}</h3>
                <p className="text-gray-600">{edu.institution}</p>
                <p className="text-gray-500">{edu.graduationDate}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-2">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Summary</h2>
            <p className="text-gray-700 leading-relaxed">{sampleResumeData.summary}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Experience</h2>
            {sampleResumeData.experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-start mb-1">
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

const SimpleTemplate9 = () => (
  <Card className="w-full max-w-4xl mx-auto">
    <CardContent className="p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">{sampleResumeData.personalInfo.name}</h1>
        <p className="text-gray-600 mb-2">{sampleResumeData.personalInfo.title}</p>
        <p className="text-sm text-gray-500">
          {sampleResumeData.personalInfo.email} • {sampleResumeData.personalInfo.phone} •{" "}
          {sampleResumeData.personalInfo.location}
        </p>
      </div>

      <Separator className="my-6" />

      <div className="space-y-6">
        <div>
          <h2 className="text-base font-semibold text-gray-900 mb-2 uppercase tracking-wide">Summary</h2>
          <p className="text-gray-700 leading-relaxed">{sampleResumeData.summary}</p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-gray-900 mb-2 uppercase tracking-wide">Experience</h2>
          {sampleResumeData.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="font-medium text-gray-900">{exp.position}</h3>
                  <p className="text-gray-600 text-sm">{exp.company}</p>
                </div>
                <span className="text-xs text-gray-500">
                  {exp.startDate} - {exp.endDate}
                </span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h2 className="text-base font-semibold text-gray-900 mb-2 uppercase tracking-wide">Education</h2>
            {sampleResumeData.education.map((edu, index) => (
              <div key={index}>
                <h3 className="font-medium text-gray-900 text-sm">{edu.degree}</h3>
                <p className="text-gray-600 text-sm">{edu.institution}</p>
                <p className="text-xs text-gray-500">{edu.graduationDate}</p>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-base font-semibold text-gray-900 mb-2 uppercase tracking-wide">Skills</h2>
            <p className="text-gray-700 text-sm">{sampleResumeData.skills.join(", ")}</p>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

const SimpleTemplate10 = () => (
  <Card className="w-full max-w-4xl mx-auto">
    <CardContent className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">{sampleResumeData.personalInfo.name}</h1>
        <p className="text-xl text-gray-600 mb-4">{sampleResumeData.personalInfo.title}</p>
        <div className="text-gray-500">
          <p>{sampleResumeData.personalInfo.email}</p>
          <p>{sampleResumeData.personalInfo.phone}</p>
          <p>{sampleResumeData.personalInfo.location}</p>
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <p className="text-gray-700 leading-relaxed text-lg">{sampleResumeData.summary}</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Experience</h2>
          {sampleResumeData.experience.map((exp, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{exp.position}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                </div>
                <span className="text-gray-500">
                  {exp.startDate} - {exp.endDate}
                </span>
              </div>
              <ul className="text-gray-700 space-y-1">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>• {achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Education</h2>
            {sampleResumeData.education.map((edu, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
                <p className="text-gray-600">{edu.institution}</p>
                <p className="text-gray-500">{edu.graduationDate}</p>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills</h2>
            <div className="space-y-2">
              {sampleResumeData.skills.map((skill, index) => (
                <div key={index} className="text-gray-700">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
)

export function SimpleTemplates() {
  const templates = [
    { id: 1, name: "Clean Basic", component: SimpleTemplate1 },
    { id: 2, name: "Centered Layout", component: SimpleTemplate2 },
    { id: 3, name: "Light Typography", component: SimpleTemplate3 },
    { id: 4, name: "Two Column Header", component: SimpleTemplate4 },
    { id: 5, name: "Minimal Design", component: SimpleTemplate5 },
    { id: 6, name: "Left Border Accent", component: SimpleTemplate6 },
    { id: 7, name: "Center Aligned", component: SimpleTemplate7 },
    { id: 8, name: "Sidebar Layout", component: SimpleTemplate8 },
    { id: 9, name: "Compact Format", component: SimpleTemplate9 },
    { id: 10, name: "Large Typography", component: SimpleTemplate10 },
  ]

  return (
    <div className="space-y-8">
      {templates.map((template) => (
        <div key={template.id} className="space-y-4">
          <h3 className="text-lg font-semibold text-center">
            Simple Template {template.id}: {template.name}
          </h3>
          <template.component />
        </div>
      ))}
    </div>
  )
}
