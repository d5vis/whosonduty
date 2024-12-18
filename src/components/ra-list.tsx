"use client";
import { getRaodNumber } from "@/utils/conversion";
import { useEffect, useState } from "react";

const RAList = ({ building }: { building: string }) => {
  const [date, setDate] = useState(new Date());
  const [isDutyHours, setIsDutyHours] = useState(
    date.getHours() >= 20 || date.getHours() < 8
  );
  const [ras, setRas] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
      setIsDutyHours(date.getHours() >= 20 || date.getHours() < 8);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const getRas = async () => {
      const response = await fetch("/api/whosonduty", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ building: building }),
      }).then((res) => res.json());
      setRas(response.onDuty);
    };
    if (isDutyHours) {
      setLoading(true);
      getRas()
        .catch((e) => console.error(e))
        .finally(() => setLoading(false));
    }
  }, [isDutyHours]);

  return (
    <div>
      {isDutyHours ? (
        <div className="flex flex-col items-center justify-center">
          <h2>RA{ras.length > 1 && <span>s</span>} on Duty:</h2>

          {loading ? (
            <div className="h-10 w-48 rounded-md my-4 bg-[#f7ebe6]" />
          ) : (
            <span className="text-2xl md:text-3xl my-4 h-10">
              <b>
                {ras.length == 1 ? (
                  <p>{ras[0]}</p>
                ) : (
                  <p>
                    {ras[0]}, {ras[1]}
                  </p>
                )}
              </b>
            </span>
          )}

          <h3>Duty Phone</h3>
          <p className="text-2xl">{getRaodNumber(building.toUpperCase())}</p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl md:text-3xl">
            <b>Duty will begin at 8p.m.</b>
          </h2>

          <p className="my-8">
            Locked out? Try heading to the Area Office first
          </p>

          <h3>Public Safety</h3>
          <p className="text-2xl">310.338.2893</p>
          <h3>Facilities Management</h3>
          <p className="text-2xl">310.338.7779</p>
        </div>
      )}
    </div>
  );
};

export default RAList;
