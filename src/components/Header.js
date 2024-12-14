"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-8 px-6 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <Image
          src="logo.svg"
          alt="hero"
          className="mx-auto max-w-full rounded-t-xl rounded-tr-xl"
          width={100}
          height={100}
        />
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex items-center font-semibold space-x-6 ">
        <a href="#home" className="text-gray-700  hover:text-primary">
          Home
        </a>
        <a href="#about" className="text-gray-700 hover:text-primary">
          About
        </a>
        <a href="#pricing" className="text-gray-700 hover:text-primary">
          Pricing
        </a>
        <a href="#contactus" className="text-gray-700 hover:text-primary">
          Contact
        </a>
        <a
          href="https://dashboard.saveoex.com/"
          target="_blank"
          className="text-gray-700 hover:text-primary"
        >
          Vendor
        </a>
        {/* <div className="relative group">
          <button className="text-gray-700 hover:text-primary flex items-center">
            V
            <svg
              className="ml-1 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <div className="absolute top-8 left-0 hidden group-hover:block bg-white shadow-lg rounded-md">
            <a
              href="#subpage1"
              className="block px-4 py-2 hover:bg-gray-100 text-sm"
            >
              Subpage 1
            </a>
            <a
              href="#subpage2"
              className="block px-4 py-2 hover:bg-gray-100 text-sm"
            >
              Subpage 2
            </a>
          </div>
        </div> */}
      </nav>

      {/* Action Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        {/* <button className="text-gray-700 hover:text-primary">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a8 8 0 10-3.253 6.325"
            ></path>
          </svg>
        </button> */}
        <button className="text-gray-700 hover:text-primary">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 3v1m0 16v1m8.66-8.66h-1M4.34 12H3m13.66-6.66l-.707-.707M6.34 18.66l-.707-.707m12.02 0l-.707-.707M6.34 5.34l-.707-.707M12 5a7 7 0 00-7 7 7 7 0 0014 0 7 7 0 00-7-7z"
            ></path>
          </svg>
        </button>
        {/* <a href="#signin" className="text-gray-700 hover:text-primary">
          Sign In
        </a>
        <a
          href="#signup"
          className="bg-primary text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Sign Up
        </a> */}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700 hover:text-primary"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md">
          <a
            href="#features"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Features
          </a>
          <a
            href="#about"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            About
          </a>
          <a
            href="#how-it-works"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            How It Works
          </a>
          <a
            href="#support"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Support
          </a>
          <a
            href="#signin"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Sign In
          </a>
          <a
            href="#signup"
            className="block px-4 py-2 text-primary hover:bg-gray-100 font-bold"
          >
            Sign Up
          </a>
        </nav>
      )}
    </header>
  );
}
