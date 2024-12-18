import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { buildings } from "@/utils/constants";
import { getBuildingName } from "@/utils/conversion";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

const BuildingSelect = () => {
  const { building } = useParams();

  const router = useRouter();

  const handleBuildingSelect = (building: string) => {
    router.push(`/${building.toUpperCase()}`);
  };

  if (!building || typeof building !== "string") {
    return null;
  }

  return (
    <Select
      defaultValue={building.toUpperCase()}
      onValueChange={handleBuildingSelect}
    >
      <SelectTrigger className="w-[180px] md:w-[240px]">
        <SelectValue placeholder="Building" />
      </SelectTrigger>
      <SelectContent className="w-[180px] md:w-[240px] font-[family-name:var(--font-playfair-display)]">
        {buildings.map((building) => (
          <SelectItem key={building} value={building}>
            {getBuildingName(building)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default BuildingSelect;
