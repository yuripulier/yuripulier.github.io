export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  details?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
  profileImage: string;
  objective: string;
  experiences: Experience[];
  education: Education[];
  skills: {
    soft: string[];
    technical: string[];
    languages: string[];
    tools: string[];
  };
}
