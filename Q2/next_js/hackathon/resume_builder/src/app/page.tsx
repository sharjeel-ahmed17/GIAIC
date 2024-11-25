'use client'
import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { PlusCircle, Trash2, Download, Share2 } from 'lucide-react';
import html2pdf from 'html2pdf.js';



// Types for our resume data
interface Education {
  id: string;
  institution: string;
  degree: string;
  year: string;
}

interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
}

interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  summary: string;
}

 interface ResumeData {
  personalInfo: PersonalInfo;
  education: Education[];
  experience: Experience[];
  skills: string[];
}

const ResumeBuilder = () => {
  // State for form/edit mode
  const [isEditMode, setIsEditMode] = useState(true);

  // Initial resume data state
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      summary: '',
    },
    education: [],
    experience: [],
    skills: [],
  });

  // State for new skill input
  const [newSkill, setNewSkill] = useState('');

  // Handler for personal info changes
  const handlePersonalInfoChange = (field: keyof PersonalInfo, value: string) => {
    setResumeData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }));
  };

  // Handler for adding education
  const handleAddEducation = () => {
    const newEducation: Education = {
      id: Date.now().toString(),
      institution: '',
      degree: '',
      year: '',
    };
    setResumeData(prev => ({
      ...prev,
      education: [...prev.education, newEducation]
    }));
  };

  // Handler for updating education
  const handleEducationChange = (id: string, field: keyof Education, value: string) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.map(edu => 
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    }));
  };

  // Handler for adding experience
  const handleAddExperience = () => {
    const newExperience: Experience = {
      id: Date.now().toString(),
      company: '',
      position: '',
      duration: '',
      description: '',
    };
    setResumeData(prev => ({
      ...prev,
      experience: [...prev.experience, newExperience]
    }));
  };

  // Handler for updating experience
  const handleExperienceChange = (id: string, field: keyof Experience, value: string) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.map(exp => 
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    }));
  };

  // Handler for adding skills
  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setResumeData(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()]
      }));
      setNewSkill('');
    }
  };

  // Handler for removing skills
  const handleRemoveSkill = (skillToRemove: string) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  // Handler for removing education
  const handleRemoveEducation = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id)
    }));
  };

  // Handler for removing experience
  const handleRemoveExperience = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.filter(exp => exp.id !== id)
    }));
  };

  // Function to toggle edit mode
  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };


  const handleDownloadPDF = () => {
    const resumeContent = document.getElementById('resume-content');
    if (resumeContent) {
      html2pdf().from(resumeContent).set({
        margin: 0.5,
        filename: 'resume.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { orientation: 'portrait' }
      }).save();
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My Resume',
        text: 'Check out my resume!',
        url: window.location.href
      }).catch((error) => console.log('Error sharing:', error));
    } else {
      alert('Sharing is not supported on this device');
    }
  };

  return (
    <div className="w-[1200px] mx-auto p-4">
      <Card className="mb-4">
        <CardHeader className="flex flex-row items-center justify-between">
          <h1 className="text-2xl font-bold">Interactive Resume Builder</h1>
          <div className="space-x-2">
            <Button onClick={toggleEditMode}>
              {isEditMode ? 'Preview Resume' : 'Edit Resume'}
            </Button>
            <Button variant="outline" >
              <Download className="w-4 h-4 mr-2" onClick={handleDownloadPDF}/>
              Download PDF
            </Button>
            <Button variant="outline" >
              <Share2 className="w-4 h-4 mr-2" onClick={handleShare}/>
              Share
            </Button>
          </div>
        </CardHeader>
        
        <CardContent id="resume-content">
          {/* Person al Information Section */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            {isEditMode ? (
              <div className="space-y-4">
        
                <Input
                  placeholder="Full Name"
                  value={resumeData.personalInfo.name}
                  onChange={(e) => handlePersonalInfoChange('name', e.target.value)}
                />
                <Input
                  placeholder="Email"
                  type="email"
                  value={resumeData.personalInfo.email}
                  onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
                />
                <Input
                  placeholder="Phone"
                  value={resumeData.personalInfo.phone}
                  onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
                />
                <Textarea
                  placeholder="Professional Summary"
                  value={resumeData.personalInfo.summary}
                  onChange={(e) => handlePersonalInfoChange('summary', e.target.value)}
                />
              </div>
            ) : (
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">{resumeData.personalInfo.name}</h3>
                <p>{resumeData.personalInfo.email}</p>
                <p>{resumeData.personalInfo.phone}</p>
                <p className="mt-4">{resumeData.personalInfo.summary}</p>
              </div>
            )}
          </section>

          {/* Education Section */}
          <section className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Education</h2>
              {isEditMode && (
                <Button onClick={handleAddEducation} variant="outline" size="sm">
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Add Education
                </Button>
              )}
            </div>
            <div className="space-y-4">
              {resumeData.education.map((edu) => (
                <Card key={edu.id} className="p-4">
                  {isEditMode ? (
                    <div className="space-y-4">
                      <Input
                        placeholder="Institution"
                        value={edu.institution}
                        onChange={(e) => handleEducationChange(edu.id, 'institution', e.target.value)}
                      />
                      <Input
                        placeholder="Degree"
                        value={edu.degree}
                        onChange={(e) => handleEducationChange(edu.id, 'degree', e.target.value)}
                      />
                      <Input
                        placeholder="Year"
                        value={edu.year}
                        onChange={(e) => handleEducationChange(edu.id, 'year', e.target.value)}
                      />
                      <Button 
                        variant="destructive" 
                        size="sm"
                        onClick={() => handleRemoveEducation(edu.id)}
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Remove
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <h3 className="font-semibold">{edu.institution}</h3>
                      <p>{edu.degree}</p>
                      <p className="text-gray-600">{edu.year}</p>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Work Experience</h2>
              {isEditMode && (
                <Button onClick={handleAddExperience} variant="outline" size="sm">
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Add Experience
                </Button>
              )}
            </div>
            <div className="space-y-4">
              {resumeData.experience.map((exp) => (
                <Card key={exp.id} className="p-4">
                  {isEditMode ? (
                    <div className="space-y-4">
                      <Input
                        placeholder="Company"
                        value={exp.company}
                        onChange={(e) => handleExperienceChange(exp.id, 'company', e.target.value)}
                      />
                      <Input
                        placeholder="Position"
                        value={exp.position}
                        onChange={(e) => handleExperienceChange(exp.id, 'position', e.target.value)}
                      />
                      <Input
                        placeholder="Duration"
                        value={exp.duration}
                        onChange={(e) => handleExperienceChange(exp.id, 'duration', e.target.value)}
                      />
                      <Textarea
                        placeholder="Description"
                        value={exp.description}
                        onChange={(e) => handleExperienceChange(exp.id, 'description', e.target.value)}
                      />
                      <Button 
                        variant="destructive" 
                        size="sm"
                        onClick={() => handleRemoveExperience(exp.id)}
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Remove
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <h3 className="font-semibold">{exp.company}</h3>
                      <p className="font-medium">{exp.position}</p>
                      <p className="text-gray-600">{exp.duration}</p>
                      <p className="mt-2">{exp.description}</p>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Skills</h2>
            {isEditMode ? (
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Add a skill"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAddSkill()}
                  />
                  <Button onClick={handleAddSkill} variant="outline">
                    <PlusCircle className="w-4 h-4 mr-2" />
                    Add
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.map((skill) => (
                    <div
                      key={skill}
                      className="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-2"
                    >
                      {skill}
                      <button
                        onClick={() => handleRemoveSkill(skill)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {resumeData.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-100 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResumeBuilder;