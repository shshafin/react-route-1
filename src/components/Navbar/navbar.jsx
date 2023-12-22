import { useState } from "react";
import Link from "./link/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { path: "/", name: "Home", id: "home" },
    { path: "/about", name: "About", id: "about" },
    { path: "/courses", name: "Courses", id: "courses" },
    { path: "/contact", name: "Contact", id: "contact" },
    { path: "/dashboard", name: "Dashboard", id: "dashboard" },
  ];

  return (
    <div className="text-white">
      <div
        onClick={() => setOpen(!open)}
        className="text-2xl md:hidden bg-rose-700 p-3"
      >
        {open === true ? (
          <AiOutlineClose></AiOutlineClose>
        ) : (
          <AiOutlineMenu></AiOutlineMenu>
        )}
      </div>
      <ul
        className={`md:flex absolute md:static duration-1000 bg-violet-900 px-6 py-2  m-2 
      ${open ? "top-12" : "-top-72"}
       shadow-lg  md:m-0 shadow-indigo-700
      `}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
