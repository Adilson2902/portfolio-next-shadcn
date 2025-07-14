'use client'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Navbar() {
  return (
    <header className="w-full border-b border-border bg-background fixed z-50">
      <div className="container flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-primary">
          Portfólio
        </Link>

        {/* Navegação */}
        <NavigationMenu>
          <NavigationMenuList className="gap-2">
            {["Home", "About", "Experience", "Portfolio", "Contact"].map((item) => (
              <NavigationMenuItem key={item}>
                <Link href={`#${item.toLowerCase()}`} legacyBehavior passHref>
                  <a className={navigationMenuTriggerStyle()}>{item}</a>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Botão de ação (opcional) */}
        <Button size="sm" variant="default" className="hidden sm:inline-flex">
          Let’s Talk
        </Button>
      </div>
    </header>
  )
}