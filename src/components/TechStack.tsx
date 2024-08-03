import React from 'react';
import { techStackData } from '@/data/tech-stack';

const TechStack: React.FC = () => {
  return (
    <div className="rounded-lg shadow-md mt-10">
      <h2 className="text-lg font-bold mb-4 flex items-center">
      Tech Stack
      </h2>
      <table className="w-full">
        {/* <thead>
          <tr>
            <th className="text-left pb-2">Category</th>
            <th className="text-left pb-2">Technologies</th>
          </tr>
        </thead> */}
        <tbody>
          {techStackData.map((category, index) => (
            <tr key={index} className="border-t">
              <td className="py-2 pr-4 align-top font-medium text-xs">{category.category}</td>
              <td className="py-2">
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 rounded text-xs font-semibold text-white `}
                    >
                      {/* {tech.icon}  */}
                      {tech.name}
                    </span>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TechStack;