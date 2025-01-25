import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { BookOpen, Briefcase, BriefcaseBusiness, Home, MessageSquareLock, Rss, User } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";
import logo from '../public/SparkLogo.svg';

export function Navigation() {
  return (
    <nav className="fixed w-full top-0 z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <div className="flex items-center gap-4">
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="bg-gradient-to-r from-foreground/5 via-foreground/10 to-foreground/5 backdrop-blur-md px-6 py-2 rounded-full border border-foreground/10">
              <NavigationMenuItem className="px-4">
                <NavigationMenuLink
                  href="#top"
                  className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors"
                >
                  <Image src={logo} width={'24'} height={'24'} alt={""} />
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="px-4">
                <NavigationMenuLink
                  href="#company"
                  className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors"
                >
                  <BriefcaseBusiness className="w-4 h-4" /> <span>Our Company</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="px-4">
                <NavigationMenuLink
                  href="//blog.sparkmask.com"
                  className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors"
                >
                  <Rss className="w-4 h-4" /> <span>Blog</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="px-4">
                <NavigationMenuLink
                  href="//synknotes.com"
                  className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors"
                >
                  <MessageSquareLock className="w-4 h-4" /> <span>SynkNotes</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu className="md:hidden flex items-center justify-center bg-gradient-to-r from-foreground/5 via-foreground/10 to-foreground/5 backdrop-blur-md px-6 py-2 rounded-full border border-foreground/10">
            <NavigationMenuList className="flex items-center gap-4">
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#top"
                  className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors"
                >
                  <Image src={logo} width={'24'} height={'24'} alt={""} />
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#company"
                  className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors"
                >
                  <BriefcaseBusiness className="w-6 h-6" />
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="//blog.sparkmask.com"
                  className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors"
                >
                  <Rss className="w-6 h-6" />
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="//synknotes.com"
                  className="text-foreground/80 hover:text-foreground flex items-center gap-2 transition-colors"
                >
                  <MessageSquareLock className="w-6 h-6" />
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
