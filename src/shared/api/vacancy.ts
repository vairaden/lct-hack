async function createVacancy() {
  // const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/users", {
  //   method: "post",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   credentials: "include",
  //   body: JSON.stringify({ fio, email, phone, gender, birthday, password }),
  // });
  // if (res.ok) {
  //   return await res.json();
  // } else {
  //   throw res;
  // }
}

async function getVacancies({
  offset,
  limit,
  city,
  organisation,
  tag,
}: {
  offset: number;
  limit: number;
  city: string;
  organisation: string;
  tag: string;
}) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL +
      "/vacancy/?" +
      new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString(),
      }),
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        tags: [tag],
        organisation: [organisation],
        city,
        start_date: "2020-06-15T00:00:00",
        end_date: "2030-06-15T00:00:00",
      }),
    }
  );

  if (res.ok) {
    return await res.json();
  } else {
    throw res;
  }
}

async function getVacancyFilters() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/vacancy/filters",
    {
      method: "get",
      credentials: "include",
    }
  );

  if (res.ok) {
    return await res.json();
  } else {
    throw res;
  }
}

async function acceptVacancyOffer() {
  // const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/users", {
  //   method: "post",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   credentials: "include",
  //   body: JSON.stringify({ fio, email, phone, gender, birthday, password }),
  // });
  // if (res.ok) {
  //   return await res.json();
  // } else {
  //   throw res;
  // }
}

async function publishVacancy() {
  // const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/users", {
  //   method: "post",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   credentials: "include",
  //   body: JSON.stringify({ fio, email, phone, gender, birthday, password }),
  // });
  // if (res.ok) {
  //   return await res.json();
  // } else {
  //   throw res;
  // }
}

async function deleteVacancy() {
  // const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/users", {
  //   method: "post",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   credentials: "include",
  //   body: JSON.stringify({ fio, email, phone, gender, birthday, password }),
  // });
  // if (res.ok) {
  //   return await res.json();
  // } else {
  //   throw res;
  // }
}

export {
  acceptVacancyOffer,
  createVacancy,
  deleteVacancy,
  getVacancies,
  getVacancyFilters,
  publishVacancy,
};
