export type Experience = {
    organization: string;
    logo: string;
    role: string;
    period: string;
    type: 'education' | 'career' | 'startup';
  };

export type TechCategory = 'Proficient' | 'Frequently Used' | 'Unprofessional but know-how to use' | 'Current I\'m running...';

export type Technology = {
  name: string;
  color: string;
};

export type TechStack = {
  category: TechCategory;
  technologies: Technology[];
};

  
export type Project = {
    title: string;
    description: string;
    image: string;
    technologies: Technology[];
};