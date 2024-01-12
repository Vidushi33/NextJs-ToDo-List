"use client"

import React from "react";
import Link from "next/link";
import AddTaskModal from "./addtaskModal";


const Navbar = () => {
  


  return (
    <nav className="max-w-3xl mx-auto p-4 bg-slate-800 flex justify-between items-center">
      <Link href="/" className="text-white font-bold text-xl">
        To Do List
      </Link>
      <Link href="/" className="bg-white p-2 font-bold text-xl ">
        <AddTaskModal />
      </Link>
    
    </nav>
  );
};



export default Navbar;
