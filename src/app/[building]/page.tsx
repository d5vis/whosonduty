"use client";
import BuildingSelect from "@/components/building-select";
import RAList from "@/components/ra-list";
import Title from "@/components/title";
import { buildings } from "@/utils/constants";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Building() {
  const { building } = useParams();

  if (!building || typeof building !== "string") {
    return null;
  }

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen font-[family-name:var(--font-playfair-display)]">
      <header className="p-4 w-full flex justify-end md:justify-center">
        <BuildingSelect />
      </header>
      <main className="flex flex-col gap-8 items-center mb-8">
        {buildings.includes(building.toUpperCase()) ? (
          <>
            <Title building={building} />
            <RAList building={building} />
          </>
        ) : (
          <div>Building not found</div>
        )}
      </main>
      <footer className="flex items-center justify-center pb-4 h-8">
        <div className="text-xs md:text-sm translate-x-[64px] md:translate-x-0">
          made with &lt;3
          <Link
            className="p-1 focus:outline-foreground"
            href="https://github.com/d5vis"
          >
            @d5vis
          </Link>
        </div>
      </footer>
    </div>
  );
}
