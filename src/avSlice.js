import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
      img: "https://pixabay.com/get/gf15a28b30114800b5bad2903106892c11b06e53d93c5261b42905bc175d7f796354833f25b6264336530b7d42fc83e51_1280.jpg",
      name: "Projectors",
      cost: 200,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/get/gb9dd1735cca95b1f2cbeed8306ce9ca737413266e6c77673fa4ffe7f6ec4d6c1925b9fed2ff18cb770e4671c1670c97ab6a0dcb52eab090163b7bba073e7ccc3_1280.jpg",
      name: "Speaker",
      cost: 35,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/get/g55a545a0033afb85b405ca4f2b2ebc58b7d845393ce900c660deaa09e61816805edb7bddb2e54303f5052468b7add9d8b2e9b13d7fba4a33ecbfabaf123507ea_1280.jpg",
      name: "Microphones",
      cost: 45,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/get/g24a0af71d32fca44d853d956ea6d69111f84f91f9d2cb5fab82973d488c99ccefc2c861f20ed877b81d11ed88d78fe06741a0e71b5d9e48f56dce3d969ef28c6_1280.png",
      name: "Whiteboards",
      cost: 80,
      quantity: 0,
    },
    {
      img: "https://pixabay.com/get/g4b80e408944e8e2f9d6d1b53d033770fd6dd2a556773d8891cca99a1ccc52d188aef1642aab9ba7e96b96c5d9afe1856_1280.jpg",
      name: "Signage",
      cost: 80,
      quantity: 0,
    },
  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if (item) {
        item.quantity++;
      }
    },
    decrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if (item && item.quantity > 0) {
        item.quantity--;
      }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
