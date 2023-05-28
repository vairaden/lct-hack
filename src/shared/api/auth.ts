import { userSchema } from "@/shared/types";

async function register(
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

async function login(email: string, password: string, stayLoggedIn: boolean) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/users/login",
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, stay_loggedin: stayLoggedIn }),
    }
  );

  if (res.ok) {
    return userSchema.parse(await res.json());
  } else {
    throw res;
  }
}

async function logout() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/users", {
    method: "delete",
  });

  if (res.ok) {
    return await res.json();
  } else {
    throw res;
  }
}

async function getProfileDetails() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/users");

  if (res.ok) {
    return await res.json();
  } else {
    throw res;
  }
}

async function updateProfileDetails(
  email: string,
  password: string,
  phone: string,
  fio: string,
  gender: string,
  birthday: string,
  role: string,
  active: boolean
) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/users", {
    method: "update",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      phone,
      fio,
      gender,
      birthday,
      role,
      active,
    }),
  });

  if (res.ok) {
    return await res.json();
  } else {
    throw res;
  }
}

export { register, login, logout, getProfileDetails, updateProfileDetails };
