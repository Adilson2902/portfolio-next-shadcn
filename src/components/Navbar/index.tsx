'use client'

import { Menubar,  MenubarMenu,  MenubarTrigger } from "../ui/menubar";
import { Home, User2, Briefcase, Code2, Mail} from 'lucide-react';

export function Navbar() {
 return (
  <div className="fixed w-screen flex justify-center bottom-0 mb-0 z-50">
    <Menubar className="w-md flex justify-around rounded-4xl">
      <MenubarMenu>
        <MenubarTrigger className="hover:bg-chart-2 cursor-pointer rounded-2xl" onClick={() => console.log("oi")}><Home className="h5 w5" /></MenubarTrigger>
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