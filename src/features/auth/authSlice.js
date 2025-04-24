import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ username, password }, thunkapi) => {
    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      if (!response.ok) throw new Error("Login failed");
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkapi.rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loggedIn: false,
    user: null,
    token: null,
    loading: null,
    error: null,
  },

  reducers: {
    login: (state, action) => {
      state.loggedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.loading = true;
      state.error = null;
    },
    logout: (state) => {
      state.loggedIn = false;
      state.user = null;
      state.token = null;

      localStorage.removeItem("auth");
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.loggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.token;

        localStorage.setItem(
          "auth",
          JSON.stringify({
            token: action.payload.token,
            loggedIn: true,
          })
        );
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
