import { MapPinIcon } from "@heroicons/react/24/outline";
import { formatDistance } from "date-fns";

type Job = {
    title: string;
    location: string;
    datePosted: Date;
    iconUrl: string;
    description: string;
  };
  
  const jobs: Job[] = [
    {
      title: "Software Engineer",
      location: "New York, NY",
      description: "Student volunteer",
      // Date 1 jan 2021
      datePosted: new Date(2021, 0, 1),
      iconUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Save Children Foundation",
      location: "New York, NY",
      datePosted: new Date(),
      description: "Student volunteer",
      iconUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Software Engineer",
      location: "New York, NY",
      datePosted: new Date(),
      description: "Student volunteer",
      iconUrl: "https://via.placeholder.com/150",
    },
    {
      title: "Software Engineer",
      location: "New York, NY",
      datePosted: new Date(),
      description: "Student volunteer",
      // get gradient image from https://cssgradient.io/
      iconUrl: "https://via.placeholder.com/150",
    },
  ];
  
  interface JobProps {
    job: Job;
  }
  
  function JobItem({ job }: JobProps) {
    const relativeTime = formatDistance(job.datePosted, new Date(), {
      addSuffix: true,
    });
    return (
      <div className="flex p-4 gap-6 ">
        <div>
          <img className="w-20 rounded-full" src={job.iconUrl} alt="icon" />
        </div>
        <div className="flex justify-between w-full items-center">
          <div className="flex flex-col gap-4">
            <div className="text-xl font-semibold">{job.title}</div>
            <div className="text-gray-600">{job.description}</div>
          </div>
          <div className="flex flex-col gap-4">
            <span className="self-end flex gap-2"> <MapPinIcon className="w-4" /> {job.location}</span>
            <span className="text-sm text-gray-600">Posted {relativeTime}</span>
          </div>
        </div>
      </div>
    );
  }

  export default function Listings() {
    return (<div className="divide-y flex-grow">
        {jobs.sort((a, b) => {
          return b.datePosted.getTime() - a.datePosted.getTime();
        }).map((job, idx) => (
          <JobItem key={idx} job={job} />
        ))}
      </div>
    )
  }