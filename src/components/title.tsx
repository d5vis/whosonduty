"use client";
import Image from "next/image";
import { getBuildingName } from "@/utils/conversion";
import { useEffect, useState } from "react";

const Title = ({ building }: { building: string }) => {
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-0">
      <h1 className="text-4xl">
        <b>Who&apos;s on Duty</b>
      </h1>
      <h2 className="animate-appear text-xl">
        <b>in {getBuildingName(building.toUpperCase())}?</b>
      </h2>
      <Image
        src={`/buildings/${building.toUpperCase()}.png`}
        alt={`{getBuildingName(building.toUpperCase())}`}
        width={200}
        height={300}
        className="animate-appear p-2 h-[147px]"
      />
      <div className="animate-appear h-4">
        {date ? (
          <span className="animate-appear">
            {date.toLocaleDateString("en-US", {
              weekday: "short",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            {date.toLocaleTimeString()}
          </span>
        ) : (
          <div>Checking the time...</div>
        )}
      </div>
    </div>
  );
};

export default Title;
