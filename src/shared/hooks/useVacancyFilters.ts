import useSWR from "swr";
import { getVacancyFilters } from "../api/vacancy";
import { vacancyFiltersSchema } from "../types";

export function useVacancyFilters() {
  const { data, error, isLoading } = useSWR(
    "vacancy/filters",
    getVacancyFilters
  );

  return {
    data: data ? vacancyFiltersSchema.parse(data) : null,
    isLoading,
    error,
  };
}
