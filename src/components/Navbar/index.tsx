'use client'

import { Menubar,  MenubarMenu,  MenubarTrigger } from "../ui/menubar";
import { Home, User2, Briefcase, Code2, Mail} from 'lucide-react';

export function Navbar() {
 return (
  <div className="fixed h-screen w-screen flex justify-center items-end mb-5 ">
    <Menubar className="w-md flex justify-around rounded-4xl">
      <MenubarMenu>
        <MenubarTrigger className="hover:bg-chart-2 cursor-pointer rounded-2xl"><Home className="h5 w5" /></MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger  className="hover:bg-chart-2 cursor-pointer rounded-2xl"><User2 className="h5 w5" /></MenubarTrigger>
       
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger  className="hover:bg-chart-2 cursor-pointer rounded-2xl"><Briefcase className="h5 w5" /></MenubarTrigger>
       
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger  className="hover:bg-chart-2 cursor-pointer rounded-2xl"><Code2 className="h5 w5" /></MenubarTrigger>
      
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger  className="hover:bg-chart-2 cursor-pointer rounded-2xl"><Mail className="h5 w5" /></MenubarTrigger>
      
      </MenubarMenu>
    </Menubar>
    </div>
  )
}