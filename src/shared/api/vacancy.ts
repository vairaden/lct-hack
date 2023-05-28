async function createVacancy(
  fio: string,
  email: string,
  phone: string,
  gender: string,
  birthday: string,
  password: string
) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/users", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fio, email, phone, gender, birthday, password }),
  });

  if (res.ok) {
    return await res.json();
  } else {
    throw res;
  }
}

async function getVacancies(
  fio: string,
  email: string,
  phone: string,
  gender: string,
  birthday: string,
  password: string
) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/users", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fio, email, phone, gender, birthday, password }),
  });

  if (res.ok) {
    return await res.json();
  } else {
    throw res;
  }
}

async function getVacancyOffers(
  fio: string,
  email: string,
  phone: string,
  gender: string,
  birthday: string,
  password: string
) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/users", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fio, email, phone, gender, birthday, password }),
  });

  if (res.ok) {
    return await res.json();
  } else {
    throw res;
  }
}
async function acceptVacancyOffer(
  fio: string,
  email: string,
  phone: string,
  gender: string,
  birthday: string,
  password: string
) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/users", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fio, email, phone, gender, birthday, password }),
  });

  if (res.ok) {
    return await res.json();
  } else {
    throw res;
  }
}
async function publishVacancy(
  fio: string,
  email: string,
  phone: string,
  gender: string,
  birthday: string,
  password: string
) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/users", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fio, email, phone, gender, birthday, password }),
  });

  if (res.ok) {
    return await res.json();
  } else {
    throw res;
  }
}
async function deleteVacancy(
  fio: string,
  email: string,
  phone: string,
  gender: string,
  birthday: string,
  password: string
) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/users", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fio, email, phone, gender, birthday, password }),
  });

  if (res.ok) {
    return await res.json();
  } else {
    throw res;
  }
}

export {
  acceptVacancyOffer,
  createVacancy,
  deleteVacancy,
  getVacancies,
  getVacancyOffers,
  publishVacancy,
};
