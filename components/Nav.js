"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
        <Link
          href={link.path}
          key={index}
          className={`${
            link.path === pathname
              ? "text-accent border-b-2 border-accent"
              : "text-white"
          } hover:text-accent hover:border-b-2 hover:border-accent transition-colors duration-300 pb-1` }
        >
          {link.name}
        </Link>
        );
      })}
    </nav>
  );
};

export default Nav;




/*
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`${
            link.path === pathname ? "text-accent border-b-2 border-accent" : ""
          } capitalize font-medium hover:text-accent transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;

*/



/*

"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const links=[
  {
    name:"home",
    path:"/",
  },
  {
    name:"services",
    path:"/services",
  },
  {
    name:"resume",
    path:"/resume",
  },
  {
    name:"work",
    path:"/work",
  },
  {
    name:"contact",
    path:"/contact",
  },
];

const Nav = () => {
  const pathname =usePathname();
  console.log(pathname);
    return ( 
    <nav className="flex gap-8">
        {links.map((link,index)=> {
          return (
            <Link href={link.path} key={index} className={'${link.path === pathname && 
            "text-accent border-b-2 border-accent"} '}> 
              {link.name} 

            </Link>
          );
        })}
      </nav>
      );
    };
  
  
export default Nav;

*/