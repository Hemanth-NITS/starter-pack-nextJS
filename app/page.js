// app/page.jsx

"use client"; // This page uses client components, so it must be a client component

import { Button } from "@/components/ui/button"; // Your Shadcn UI Button


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Welcome to Shadcn UI & Custom Tailwind!
      </h1>
      
      {/* Shadcn UI Button */}
      <Button 
        onClick={() => {
          alert("Shadcn UI Button Clicked!");
        }}
        className="mt-4" 
      >
        Shadcn Button
      </Button>

      {/* Tailwind CSS Test Element (from previous step) */}
      <div className="mt-8 p-4 bg-purple-600 text-white font-extrabold text-xl rounded-lg shadow-lg">
        Tailwind CSS is connected!
      </div>

      <p className="text-sm text-gray-500 mt-8">
        Check your browser to see the result.
      </p>
    </main>
  );
}