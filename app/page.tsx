// Make it a servercomponent
'use server';

import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import Listings from "@/components/Listings";
import getClient from "@/utils/dbClient";
import clsx from "clsx";

async function fetchJobs() {
  const data = require("../data/listings.json");
  return data.listings.map((d: any) => {
    d.datePosted = new Date(d.datePosted);
    return d;
  });
}

export default async function Home() {
  const jobs = await fetchJobs();
  console.log(jobs);
  return (
    <>
      <Banner />
      <div className="w-full space-y-12 container mx-auto pt-8">
        <Hero />
        <div>
          <div className="text-center text-2xl font-semibold tracking-wide">
            Categories
          </div>
        </div>
        <div className="grid grid-cols-3 gap-12 max-w-screen-xl mx-auto">
          {Categories.map((category, idx) => (
            <Card title={category} bg={bgs[idx]} />
          ))}
        </div>
        <div>
          <h2 className="text-2xl tracking-tight font-bold">
            New opportunities
          </h2>
        </div>
        <div className="flex gap-12 pb-16">
          <Listings jobs={jobs} />
          <div className="w-80 h-120 bg-black"></div>
        </div>
      </div>
    </>
  );
}

const Categories = ["Environment", "Education", "Women Empowerment"];
const bgs = [
  "bg-gradient-to-tr from-blue-700 via-blue-800 to-gray-900",
  "bg-gradient-to-tr from-blue-700 via-blue-800 to-gray-900",
  "bg-gradient-to-tr from-blue-700 via-blue-800 to-gray-900",
];

function Card(props: { bg?: string; title?: string }) {
  // Add an overlay image and text with white color
  return (
    <div
      className={clsx(
        "bg-black text-xl font-semibold text-white rounded-xl h-40 grid place-items-center",
        props.bg
      )}
    >
      {props.title}
    </div>
  );
}
