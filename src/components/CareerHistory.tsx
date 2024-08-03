import { experiences } from '@/data';
import { Experience } from '@/types';
import Image from 'next/image';

const getBadgeColor = (type: Experience['type']) => {
  switch (type) {
    case 'education':
      return 'bg-blue-500';
    case 'career':
      return 'bg-pink-500';
    case 'startup':
      return 'bg-green-500';
    default:
      return 'bg-gray-500';
  }
};

const CareerHistory: React.FC = () => {
  return (
    <div className="rounded-lg shadow-md">
      <h2 className="text-lg font-bold flex items-center mb-2">
        Career & History
      </h2>
      <div className="space-y-1">
        {experiences.map((exp, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="w-8 h-8 relative flex-shrink-0">
              <Image
                src={exp.logo}
                alt={exp.organization}
                layout="fill"
                objectFit="contain"
                className="rounded-full"
              />
            </div>
            <div className="flex-grow min-w-0">
              <div className="font-semibold text-sm truncate">{exp.organization}</div>
              <div className="text-xs text-gray-600 truncate">{exp.role}</div>
            </div>
            <div className="text-right flex-shrink-0 flex">
              <div className="text-xs text-gray-500 mt-0.5 mr-2">{exp.period}</div>
              <div className={`inline-block px-2 py-0.5 rounded-full text-[10px] text-white ${getBadgeColor(exp.type)}`}>
                {exp.type === 'education' ? '교육' : exp.type === 'career' ? '커리어' : '창업'}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerHistory;