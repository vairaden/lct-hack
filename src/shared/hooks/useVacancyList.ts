import useSWR from "swr";
import { vacancySchema } from "@/shared/types";
import { getVacancies } from "../api";

export function useVacancyList(
  city: string,
  organisation: string,
  tag: string
) {
  const { data, error, isLoading } = useSWR(
    { offset: 0, limit: 10, city, organisation, tag },
    getVacancies
  );

  return {
    data: data ? vacancySchema.array().parse(data) : null,
    isLoading,
    error,
  };
}
