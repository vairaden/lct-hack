import useSWR from "swr";
import { vacancySchema } from "@/shared/types";
import { getVacancies } from "../api";

export function useVacancyList() {
  const { data, error, isLoading } = useSWR(
    { offset: 0, limit: 10 },
    getVacancies
  );

  return {
    data: data ? vacancySchema.array().parse(data) : null,
    isLoading,
    error,
  };
}
