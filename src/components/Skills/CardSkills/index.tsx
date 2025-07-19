import { Card } from '@/components/ui/card';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

type Data = {
  title: string;
  experience: string;
};

interface PropsCardSkill {
  title: string;
  skillsExperience: Data[];
}

const CardSkills: React.FC<PropsCardSkill> = ({ title, skillsExperience }) => {
  return (
    <Card className="bg-primary/50 w-xs max-w-sm sm:max-w-md md:max-w-lg p-6 rounded-2xl shadow-md flex flex-col items-center justify-start gap-4">
      <p className="font-sans font-bold text-xl text-input text-center">{title}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 w-full">
        {skillsExperience.map((i, key) => (
          <div className="flex flex-col justify-start gap-1" key={key}>
            <p className="flex items-center text-base font-bold text-text">
              <FaCheckCircle className="text-primary mr-2" />
              {i.title}
            </p>
            <p className="text-sm text-muted-foreground pl-6">{i.experience}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default CardSkills;
