import { VacancyCard } from "@/entities/vacancy";
import { Vacancy } from "@/shared/types";
import Link from "next/link";

export function VacancyList({ data }: { data: Vacancy[] }) {
  return (
    <div>
      {data.map((vacancy) => (
        <Link href={"/candidate/vacancies/" + vacancy.id} key={vacancy.id}>
          <VacancyCard
            name={vacancy.title}
            description={vacancy.description}
            tags={vacancy.tags}
          />
        </Link>
      ))}
    </div>
  );
}
