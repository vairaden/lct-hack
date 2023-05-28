import useSWR from "swr";
import { getApplicationDetails } from "@/shared/api";
import { applicationSchema } from "@/shared/types";

export function useApplicationDetails() {
  const { data, error, isLoading } = useSWR(
    "/intern_application/my",
    getApplicationDetails
  );

  return {
    data: data ? applicationSchema.parse(data) : null,
    isLoading,
    error,
  };
}
