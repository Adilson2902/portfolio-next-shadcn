import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CgWebsite } from "react-icons/cg";
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';

interface Props {
  title: string;
  gitLink: string;
  website: string;
}

const CardProjects: React.FC<Props> = ({ title, gitLink, website }) => {

  return (
    <Card className="bg-primary rounded-3xl w-96 h-ex p-6">
      <CardContent className="h-3/4 bg-text-fix w-full relative mb-4 rounded-xl overflow-hidden">
        <Image
          src='/no-img.png' 
          alt={`Preview do projeto ${title}`}
          layout="fill"
          objectFit="cover"
          className="rounded-xl z-0 brightness-90 saturate-150 hue-rotate-180"
        />
      </CardContent>

      <p className="text-text-fix text-center font-medium mb-3">{title}</p>

      <div className="flex gap-2 justify-center">
        <Button  className="border-text-fix border-2 h-8 bg-primary rounded-3xl text-text-fix cursor-pointer">
          <a href={gitLink} target="_blank" rel="noopener noreferrer" className="cursor-pointer flex items-center justify-center w-full h-full">
            <FaGithub />
          </a>
        </Button>

        <Button  className="bg-text-fix h-8 rounded-3xl text-primary cursor-pointer">
          <a href={website} target="_blank" rel="noopener noreferrer" className="cursor-pointer flex items-center justify-center w-full h-full">
            <CgWebsite />
          </a>
        </Button>
      </div>
    </Card>
  );
};

export default CardProjects;
