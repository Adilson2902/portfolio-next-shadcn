import { Card } from '@/components/ui/card';
import React, { useMemo } from 'react';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdMail } from "react-icons/md";

interface IPropsCardContact {
    type_icon: 'mail' | 'whatsApp' | 'instagram';
    textSocial: string;
}

const CardContact: React.FC<IPropsCardContact> = ({ type_icon, textSocial}) => {
  const icon = useMemo(() => {
    switch (type_icon) {
        case 'mail':
           return <MdMail  className="h-10 w-10"  color='#00242C'/>
        case 'whatsApp':
           return  <FaWhatsapp  className="h-10 w-10" color='#00242C'/>
        case 'instagram':
           return  <FaInstagram  className="h-10 w-10" color='#00242C' />
    }
  }, [type_icon]);

  const title = useMemo(() => {
    switch (type_icon) {
        case 'mail':
           return  <p className='font-dm-sans  font-bold text-2xl text-text-fix'>Email</p>
        case 'whatsApp':
           return  <p className='font-dm-sans  font-bold text-2xl text-text-fix'>WhatsApp</p>
        case 'instagram':
           return  <p className='font-dm-sans  font-bold text-2xl text-text-fix'>Instagram</p>
    }
  }, [type_icon]);



  return <Card className='w-96 h-36 bg-primary rounded-3xl mt-5 flex flex-row items-center gap-0 justify-between p-6 xl:mt-0'>
    <div className='flex flex-col justify-center items-center'>
     {icon}
     {title}
     </div>
     <div className='flex flex-col justify-center items-start'>
     <a
      href={
         type_icon === 'mail'
            ? `mailto:${textSocial}`
            : type_icon === 'whatsApp'
            ? `https://wa.me/${textSocial.replace(/\D/g, '')}`
            : `https://instagram.com/${textSocial}`
      }
      target="_blank"
      rel="noopener noreferrer"
      className="font-dm-sans font-normal text-xl text-text-fix p-0 m-0 underline hover:text-chart-2 transition-colors"
      >
      {textSocial}
      </a>
     <p className='font-dm-sans font-normal text-sm text-text-fix'>send a message</p>
     </div>
    </Card>;
}

export default CardContact;