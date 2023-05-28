import useSWR from "swr";
import { applicationSchema } from "@/shared/types";
import { getApplicationsToApprove } from "../api/application";

export function useApplicationsToApprove() {
  const { data, error, isLoading, mutate } = useSWR(
    { offset: 0, limit: 10 },
    getApplicationsToApprove
  );

  return {
    data: data ? applicationSchema.array().parse(data) : null,
    isLoading,
    error,
    mutate,
  };
}
