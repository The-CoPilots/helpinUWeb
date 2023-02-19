import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import Listings from "@/components/Listings";
import getClient from "@/utils/dbClient";

async function fetchJobs() {
  const client = await getClient();

  const data = await client.collection("listings").find().toArray();
  return data;
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
          <Card />
          <Card />
          <Card />
        </div>
        <div>
          <h2 className="text-2xl tracking-tight font-bold">
            New opportunities
          </h2>
        </div>
        <div className="flex gap-12">
          <Listings jobs={jobs} />
          <div className="w-80 h-120 bg-gradient-to-tl from-red-200 to-red-600"></div>
        </div>
      </div>
    </>
  );
}

function Card() {
  // Add an overlay image and text with white color
  return (
    <div className="bg-black text-xl font-semibold text-white rounded-xl h-40 grid place-items-center">
      Hello World
    </div>
  );
}
