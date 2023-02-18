import Hero from "@/components/Hero";
import Listings from "@/components/Listings";

export default function Home() {
  return (
    <div className="w-full space-y-12 container mx-auto">
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
          Recent opportunities
        </h2>
      </div>
      <div className="flex gap-12">
        <Listings />
        <div className="w-80 h-120 bg-gradient-to-tl from-red-200 to-red-600"></div>
      </div>
    </div>
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
