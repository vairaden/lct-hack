async function getApplicationDetails() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/intern_application/my",
    {
      credentials: "include",
    }
  );

  if (res.ok) {
    return await res.json();
  } else {
    throw res;
  }
}

async function createApplication(
  course: string,
  education: string,
  resume: string,
  citizenship: string,
  city: string,
  graduation_date: string
) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/intern_application/my",
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        course,
        education,
        resume,
        citizenship,
        city,
        graduation_date,
      }),
    }
  );

  if (res.ok) {
    return await res.json();
  } else {
    throw res;
  }
}

async function updateApplicationDetails(
  id: number,
  course: string,
  education: string,
  resume: string,
  citizenship: string,
  graduation_date: string
) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/intern_application/my",
    {
      method: "update",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        id,
        course,
        education,
        resume,
        citizenship,
        graduation_date,
      }),
    }
  );

  if (res.ok) {
    return await res.json();
  } else {
    throw res;
  }
}
async function getApplicationsList(offset: number, limit: number) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL +
      "/intern_application/all?" +
      new URLSearchParams({
        offset: offset.toString(),
        limit: limit.toString(),
      }),
    {
      credentials: "include",
    }
  );

  if (res.ok) {
    return await res.json();
  } else {
    throw res;
  }
}

export {
  getApplicationDetails,
  createApplication,
  updateApplicationDetails,
  getApplicationsList,
};
