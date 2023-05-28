"use client";

import { approveApplication } from "../../../shared/api/application";
import { useApplicationsToApprove } from "../../../shared/hooks";
import { Button } from "../../../shared/ui/button";

export default function CuratorHomePage() {
  const { data, isLoading, error, mutate } = useApplicationsToApprove();

  async function handleApprove(id: number) {
    const res = await approveApplication(id);
    mutate({ offset: 0, limit: 10 });
  }

  return (
    <>
      {isLoading ? (
        <h2>Загрузка</h2>
      ) : data ? (
        <ul>
          {data.map((application) => (
            <li key={application.id}>
              {application.status}
              <Button onClick={() => handleApprove(application.id)}>
                Подтвердить
              </Button>
            </li>
          ))}
        </ul>
      ) : (
        <h2>Заявки отсутствуют</h2>
      )}
    </>
  );
}
