import { VacancyCard } from "@/entities/vacancy";
import { Vacancy } from "@/shared/types";

export function VacancyList({ data }: { data: Vacancy[] }) {
  return (
    <div>
      <VacancyCard name={"Название"} description="desc" tags={["lol", "kek"]} />
    </div>
  );
}
