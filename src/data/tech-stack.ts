import { TechStack } from '../types';

export const techStackData: TechStack[] = [
  {
    category: 'Proficient',
    technologies: [
      { name: 'JavaScript', color: 'bg-yellow-400' },
      { name: 'TypeScript', color: 'bg-blue-500' },
      { name: 'Node.js', color: 'bg-green-600' },
      { name: 'React', color: 'bg-blue-400' },
      { name: 'Next.js', color: 'bg-black' },
      { name: 'Git', color: 'bg-red-500' },
    ]
  },
  {
    category: 'Frequently Used',
    technologies: [
      { name: 'Python',  color: 'bg-blue-500' },
      { name: 'FastAPI', color: 'bg-teal-500' },
      { name: 'Flask', color: 'bg-black' },
      { name: 'Flutter', color: 'bg-blue-400' },
      { name: 'Arduino', color: 'bg-teal-600' },
      { name: 'Raspberry PI', color: 'bg-red-700' },
      { name: 'Express', color: 'bg-black' },
      { name: 'Nest.js', color: 'bg-red-600' },
      { name: 'Google Cloud Platform', color: 'bg-blue-500' },
    ]
  },
  {
    category: 'Unprofessional but know-how to use',
    technologies: [
      { name: 'AWS', color: 'bg-orange-500' },
      { name: 'GraphQL', color: 'bg-pink-600' },
      { name: 'Gatsby', color: 'bg-purple-600' },
      { name: 'OpenCV', color: 'bg-blue-700' },
      { name: 'C++', color: 'bg-blue-500' },
      { name: 'C', color: 'bg-gray-500' },
      { name: 'MongoDB', color: 'bg-green-500' },
      { name: 'mysql', color: 'bg-blue-400' },
    ]
  },
  {
    category: 'Current I\'m running...',
    technologies: [
      { name: 'Java', color: 'bg-gray-500' },
      { name: 'Spring Boot', color: 'bg-green-500' },
      { name: 'Docker', color: 'bg-blue-500' },
      { name: 'kubernetes', color: 'bg-blue-600' },
    ]
  }
];