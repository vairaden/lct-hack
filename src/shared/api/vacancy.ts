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
}: {
  offset: number;
  limit: number;
}) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/vacancy/", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ offset, limit }),
  });

  if (res.ok) {
    return await res.json();
  } else {
    throw res;
  }
}

async function getVacancyOffers() {
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
  getVacancyOffers,
  publishVacancy,
};
