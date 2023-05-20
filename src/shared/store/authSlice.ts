import { createAsyncThunk } from "@reduxjs/toolkit";
// import Router from "next/router";
// import { apiSlice } from "./apiSlice";

export const login = createAsyncThunk(
  "auth/login",
  async (
    payload: { email: string; password: string; stayloggedin: boolean },
    thunkAPI
  ) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/token`, {
      method: "POST",
      body: JSON.stringify(payload),
      credentials: "include",
    });

    if (res.ok) {
      const data = await res.json();
      sessionStorage.setItem("accessToken", data.access_token);
      // thunkAPI.dispatch(apiSlice.util.resetApiState());
      // Router.push("/");
    } else {
      thunkAPI.rejectWithValue({
        status: res.status,
        message: await res.json(),
      });
    }
  }
);

export const refresh = createAsyncThunk(
  "auth/refresh",
  async (payload, thunkAPI) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/access`, {
      credentials: "include",
    });

    if (!res.ok) {
      if (res.status === 401) {
        // Router.push("/login");
        return thunkAPI.rejectWithValue(401);
      }
      return thunkAPI.rejectWithValue(res);
    }

    const data = await res.json();
    sessionStorage.setItem("accessToken", data.access_token);
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (payload, thunkAPI) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`, {
      method: "POST",
      credentials: "include",
    });

    if (res.ok) {
      sessionStorage.removeItem("accessToken");
      // thunkAPI.dispatch(apiSlice.util.resetApiState());
      // Router.push("/login");
    } else {
      thunkAPI.rejectWithValue({
        status: res.status,
        message: await res.json(),
      });
    }
  }
);
