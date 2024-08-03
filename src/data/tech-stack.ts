import { TechStack } from '../types';

export const techStackData: TechStack[] = [
  {
    category: 'Proficient',
    technologies: [
      { name: 'JavaScript', icon: 'JS', color: 'bg-yellow-400' },
      { name: 'TypeScript', icon: 'TS', color: 'bg-blue-500' },
      { name: 'Node.js', icon: 'Node.js', color: 'bg-green-600' },
      { name: 'React', icon: 'React', color: 'bg-blue-400' },
      { name: 'Next.js', icon: 'N', color: 'bg-black' },
      { name: 'Git', icon: 'Git', color: 'bg-red-500' },
    ]
  },
  {
    category: 'Frequently Used',
    technologies: [
      { name: 'Python', icon: 'Python', color: 'bg-blue-500' },
      { name: 'FastAPI', icon: 'FastAPI', color: 'bg-teal-500' },
      { name: 'Flask', icon: 'Flask', color: 'bg-black' },
      { name: 'Flutter', icon: 'Flutter', color: 'bg-blue-400' },
      { name: 'Arduino', icon: 'Arduino', color: 'bg-teal-600' },
      { name: 'Raspberry PI', icon: 'Raspberry PI', color: 'bg-red-700' },
      { name: 'Express', icon: 'Express', color: 'bg-black' },
      { name: 'Nest.js', icon: 'Nest.js', color: 'bg-red-600' },
      { name: 'Google Cloud Platform', icon: 'GCP', color: 'bg-blue-500' },
    ]
  },
  {
    category: 'Unprofessional but know-how to use',
    technologies: [
      { name: 'AWS', icon: 'AWS', color: 'bg-orange-500' },
      { name: 'GraphQL', icon: 'GraphQL', color: 'bg-pink-600' },
      { name: 'Gatsby', icon: 'Gatsby', color: 'bg-purple-600' },
      { name: 'OpenCV', icon: 'OpenCV', color: 'bg-blue-700' },
      { name: 'C++', icon: 'C++', color: 'bg-blue-500' },
      { name: 'C', icon: 'C', color: 'bg-gray-500' },
      { name: 'MongoDB', icon: 'MongoDB', color: 'bg-green-500' },
      { name: 'mysql', icon: 'mysql', color: 'bg-blue-400' },
    ]
  },
  {
    category: 'Current I\'m running...',
    technologies: [
      { name: 'Java', icon: 'Java', color: 'bg-gray-500' },
      { name: 'Spring Boot', icon: 'Spring Boot', color: 'bg-green-500' },
      { name: 'Docker', icon: 'Docker', color: 'bg-blue-500' },
      { name: 'kubernetes', icon: 'kubernetes', color: 'bg-blue-600' },
    ]
  }
];