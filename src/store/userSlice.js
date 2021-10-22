import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "services/authService";

export const getUser = createAsyncThunk("user/getUser", async () => {
  //thunkAPI.dispatch(...)
  const currentUser = await authService.getUser();
  return currentUser;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    current : {}
    // loading: false,
    // error: "",
  },
  reducer: {},
  extraReducers: {
    // [getUser.pending]: (state) => {
    //   state.loading = true;
    // },
    // [getUser.rejected]: (state,action) => {
    //   state.loading = false;
    //   state.error = action.error;
    // },
    [getUser.fulfilled]: (state, action) => {
      //   state.loading = false;
      state.current = action.payload.user;
    },
  },
});

const { reducer: userReducer } = userSlice;

export default userReducer;
