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

  export default ResumeData;