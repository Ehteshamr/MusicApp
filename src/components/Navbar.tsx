"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
 

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-20 inset-x-0 max-w-2xl mx-auto z-50", "rounded-full px-6 py-3 shadow-md"
, className)}>
       
             <Menu setActive={setActive}> 
              <Link href="/">
                 <MenuItem  setActive={setActive} active={active} item="Home"></MenuItem> </Link>
                 <MenuItem setActive={setActive} active={active} item="Our Products">
                    <div className="flex flex-col space-y-4-text-sm">
                    <HoveredLink setActive={setActive} active={active} item="Product 1" href="/courses">All Courses</HoveredLink>
                    <HoveredLink setActive={setActive} active={active} item="Product 1" href="/courses">Basic Music Theory</HoveredLink>
                    <HoveredLink setActive={setActive} active={active} item="Product 1" href="/courses">Advanced Composition </HoveredLink>
                    <HoveredLink setActive={setActive} active={active} item="Product 1" href="/courses">Songwriting</HoveredLink>
                    <HoveredLink setActive={setActive} active={active} item="Product 1" href="/courses">Music Prdocution</HoveredLink>
                   </div>
                 </MenuItem>
                <Link href="/contact Us">
                 <MenuItem  setActive={setActive} active={active} item="Contact"></MenuItem> </Link>
                 
             </Menu>


    </div>
  )
}

export default Navbar