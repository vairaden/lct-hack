import { VacancyCard } from "@/entities/vacancy";

export function VacancyList() {
  return (
    <div>
      <VacancyCard name={"Название"} description="desc" tags={["lol", "kek"]} />
    </div>
  );
}
