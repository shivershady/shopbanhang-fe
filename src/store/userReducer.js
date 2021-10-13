import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "../services/authService";

const initialState = {
  name: null,
  email: null,
  phone: null,
  user_seller: null,
  images: [],
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.user_seller = action.payload.user_seller;
      state.images = action.payload.images;
    },
  },
});

const {updateUser} = user.actions;

export const doGetUser =() =>  async (dispatch) => {
    const res = await getUser();
    dispatch(updateUser(res.user));
  };


export default user.reducer;
