"use client";

import { Menu, FileText, Download, Upload, Settings } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const tools = [
  {
    title: "PDF to Word",
    href: "/tools/pdf-to-word",
    description: "Convert PDF documents to editable Word files instantly.",
    icon: FileText,
  },
  {
    title: "Word to PDF",
    href: "/tools/word-to-pdf",
    description: "Transform Word documents into professional PDF files.",
    icon: Download,
  },
  {
    title: "Resume Parser",
    href: "/tools/resume-parser",
    description: "Extract and analyze resume data automatically.",
    icon: Upload,
  },
  {
    title: "Document Merger",
    href: "/tools/document-merger",
    description: "Combine multiple documents into a single file.",
    icon: Settings,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [login, setLogin] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 shadow backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-green-700 shadow-lg">
                <span className="text-lg font-bold text-white">CMD</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-semibold text-green-600">
                COOK<span className=" text-indigo-600">MY</span>DOCS
              </span>
              <p className="text-xs text-muted-foreground">
                Resume Builder & Tools
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/resume-builder"
                    className="group inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-foreground hover:bg-green-50 hover:text-green-700 transition"
                  >
                    Resume Builder
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="hover:text-green-700">
                  Tools
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[500px] gap-3 p-4 md:grid-cols-2">
                    {tools.map((tool) => (
                      <NavigationMenuLink key={tool.title} asChild>
                        <Link
                          href={tool.href}
                          className="group grid items-start rounded-md p-4 hover:bg-green-50 transition"
                        >
                          <div className="flex items-center gap-2">
                            <tool.icon className="h-5 w-5 text-green-600" />
                            <span className="font-medium group-hover:underline">
                              {tool.title}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {tool.description}
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/templates"
                    className="group inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-foreground hover:bg-green-50 hover:text-green-700 transition"
                  >
                    Templates
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/pricing"
                    className="group inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-foreground hover:bg-green-50 hover:text-green-700 transition"
                  >
                    Pricing
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {login === false ? (
              <>
                <Button variant="ghost" asChild>
                  <Link href="/login" className="hover:text-green-700">
                    Login
                  </Link>
                </Button>
                <Button
                  asChild
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <Link href="/signup">Get Started</Link>
                </Button>
              </>
            ) : (
              <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            )}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-4">
                <SheetClose asChild>
                  <Link
                    href="/resume-builder"
                    className="flex items-center space-x-2 text-lg font-medium hover:text-green-700"
                  >
                    <FileText className="h-5 w-5" />
                    <span>Resume Builder</span>
                  </Link>
                </SheetClose>

                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Tools
                  </h3>
                  {tools.map((tool) => (
                    <SheetClose key={tool.title} asChild>
                      <Link
                        href={tool.href}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-green-50 transition"
                      >
                        <tool.icon className="h-5 w-5 text-green-600" />
                        <div>
                          <div className="font-medium">{tool.title}</div>
                          <p className="text-sm text-muted-foreground">
                            {tool.description}
                          </p>
                        </div>
                      </Link>
                    </SheetClose>
                  ))}
                </div>

                <div className="space-y-3 pt-4 border-t">
                  <SheetClose asChild>
                    <Link
                      href="/templates"
                      className="flex items-center space-x-2 text-lg font-medium hover:text-green-700"
                    >
                      <span>Templates</span>
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/pricing"
                      className="flex items-center space-x-2 text-lg font-medium hover:text-green-700"
                    >
                      <span>Pricing</span>
                    </Link>
                  </SheetClose>
                </div>

                <div className="flex flex-col space-y-3 pt-6 border-t">
                  <Button variant="outline" asChild>
                    <Link href="/login" className="hover:text-green-700">
                      Login
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Link href="/signup">Get Started</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
