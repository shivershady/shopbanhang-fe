import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../services/authService";

export const getUser = createAsyncThunk("user/getUser", async () => {
  //thunkAPI.dispatch(...)
  const currentUser = await authService.getUser();
  return currentUser;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: null,
    email: null,
    phone: null,
    user_seller: null,
    images: [],
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
      state.name = action.payload.user.name;
      state.email = action.payload.user.email;
      state.phone = action.payload.user.phone;
      state.user_seller = action.payload.user.user_seller;
      state.images = action.payload.user.images;
    },
  },
});

const { reducer: userReducer } = userSlice;

export default userReducer;
