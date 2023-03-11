"use client";
import Image from "next/image";
import { motion } from "framer-motion";
//CircleCI Logo Address: https://img.icons8.com/color/512/circleci.png

export default function Home() {
  return (
    <main>
      <nav className="navbar flex gap-16 p-6 bg-blue-50 m-10 rounded-lg">
        <div className="mr-auto">
          <div className="flex items-center">
            <Image
              src="https://img.icons8.com/color/512/circleci.png"
              alt="logo"
              width="50"
              height="50"
            />
            <span className="font-bold text-blue-800 text-2xl">CircleCI</span>
          </div>
          <p className="text-sm text-blue-900">Tagline of company</p>
        </div>
        <div className="flex flex-col gap-y-2">
          <h2 className="font-bold text-blue-800">Quick Links</h2>
          <p className="text-sm font-medium text-blue-900">Home</p>
          <p className="text-sm font-medium text-blue-900">About</p>
          <p className="text-sm font-medium text-blue-900">Courses</p>
          <p className="text-sm font-medium text-blue-900">Contact</p>
        </div>
        <div className="flex flex-col gap-y-2">
          <h2 className="font-bold text-blue-800">Contact Us</h2>
          <p className="text-sm font-medium text-blue-900">Islamabad</p>
          <p className="text-sm font-medium text-blue-900">Karachi</p>
          <p className="text-sm font-medium text-blue-900">Peshawar</p>
          <p className="text-sm font-medium text-blue-900">Lahore</p>
        </div>
        <div className="flex flex-col gap-y-2">
          <h2 className="font-bold text-blue-800">Social</h2>
          <p className="text-sm font-medium text-blue-900">Facebook</p>
          <p className="text-sm font-medium text-blue-900">Discord</p>
          <p className="text-sm font-medium text-blue-900">Instagram</p>
          <p className="text-sm font-medium text-blue-900">YouTube</p>
        </div>
      </nav>
    </main>
  );
}
