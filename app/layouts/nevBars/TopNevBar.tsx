"use client";
import nevLinks from "@/app/helpers/constent";
import React, { useState } from "react";
import { ModeToggle } from "../themes/ModeToggle";
import { Button, buttonVariants } from "@/components/ui/button";
import HomeLogo from "@/app/logo/home.d";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

export default function TopNevBar() {
  const pathName = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const activeLink =
    nevLinks.find(
      (link) => link.url.length > 1 && pathName.includes(link.url)
    ) || nevLinks[0];
  return (
    <div
      className="flex relative items-center justify-between min-h-16 dark:text-foreground text-muted-foreground 
           bg-primary/5 dark:bg-secondary/30 py-2 px-5 border-b-2 border-separate
           border-[1px] shadow-md shadow-blue-900 min-w-full"
    >
      <HomeLogo />
      <div className="flex items-center gap-4 justify-between max-md:hidden">
        {nevLinks.map((link) => (
          <Link
            href={link.url}
            className={buttonVariants({
              variant: activeLink.url === link.url ? "activeItme" : "item",
            })}
            key={link.lable}
          >
            {link.icon}
            {link.lable}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4 justify-between">
        <div className="md:hidden">
          <Button
            variant={"outline"}
            className="w-fit p-3"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu />
          </Button>
          {isOpen && (
            <Card className=" absolute flex items-center justify-center top-16 bg-primary/5 dark:bg-secondary/30 right-1 gap-4 w-48 z-50">
              <CardContent className="flex flex-col mt-6 gap-4 items-start justify-start">
                {nevLinks.map((link) => (
                  <Link
                    href={link.url}
                    key={link.lable}
                    onClick={() => setIsOpen(false)}
                    className={` ${buttonVariants({
                      variant:
                        activeLink.url === link.url ? "activeItmes" : "items",
                    })}`}
                    
                  >
                    {link.icon}
                    {link.lable}
                  </Link>
                ))}
              </CardContent>
            </Card>
          )}
        </div>

        <ModeToggle />
      </div>

    </div>
  );
}
