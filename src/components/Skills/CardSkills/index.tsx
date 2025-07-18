import { Card } from '@/components/ui/card';
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

type Data = {
    title: string;
    experience: string;
}

interface PropsCardSkill {
    title: string;
    skillsExperience: Data[];
}

const CardSkills: React.FC<PropsCardSkill> = ({title, skillsExperience}) => {
  return <Card className='bg-primary/50 w-lg h-96 p-4 mr-36 mt-4'>
            <p className='font-sans font-bold text-xl text-center text-input mt-2'>{title}</p>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ml-8 mb-4">
            {skillsExperience.map((i, key) => (
                <div
                className="flex flex-col justify-start gap-2"
                key={key}
                >
                <p className="flex flex-row items-center text-lg font-bold">
                    <FaCheckCircle className="bg-primary mr-2.5 mt-1" />
                    {i.title}
                </p>
                <p className='text-sm font-normal pl-7'>{i.experience}</p>
                </div>
            ))}
            </div>
        </Card>;
}

export default CardSkills;