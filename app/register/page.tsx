"use client";
import clsx from 'clsx';
import React, { useState,useEffect  } from 'react'
export default function Home() {
  const[choice,setChoice] = useState("Volunteer");
  return (
   <div className="container mx-auto mt-12">
      <div>
      <section className="h-full gradient-form bg-white md:h-screen">
        <div className="container px-10 py-24 mx-auto max-w-50">
      <div className = "content-center" >
      <button type="button" onClick={() =>setChoice("Volunteer")} className={clsx("border border-gray-900px-4 p-4 text-sm font-large text-gray-900 ", choice == "Volunteer" && 'bg-red-600 text-white')}>
    Volunteer
  </button>
  <button type="button"  onClick={() =>setChoice("Organization")} className={clsx("border border-gray-900px-4 p-4 text-sm font-large text-gray-900 ", choice == "Organization" && 'bg-red-600 text-white')}>
    Organization
  </button>
      </div>
      
<form>
  <div className="mb-6 mt-8">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{choice} name</label>
    <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-700 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
  </div>
  <div className="mb-6">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-700 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
  
    </div>
    <div className="mb-6">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-700 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
  
    </div>
    <div className="mb-6">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
    <input type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-700 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
  
    </div>
  <div className="flex items-start mb-6">
    <div className="flex items-center h-5">
     </div>
  </div>
  <button type="submit" className="text-white bg-red-600 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
</div>
</section>

      </div>
    </div>
  )
}
