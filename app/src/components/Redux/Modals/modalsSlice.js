import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  burger: {
    isShow: false,
  },
  cart: {
    isShow: false,
  },
  user: {
    isShow: false,
  },
  cartNotify: {
    isShow: false
  }
};

const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    closeModal(state, action) {
      const name = action.payload;
      state[name].isShow = false;
    },
    showModal(state, action) {
      const name = action.payload;
      state[name].isShow = true;
    },
    toggleShowModal(state, action) {
      const name = action.payload;
      state[name].isShow = !state[name].isShow;
    },
    hideAllModals(state) {
      const modalNames = Object.keys(initialState);
      modalNames.forEach((modalName) => {
        state[modalName].isShow = false;
      });
    },
  },
});

export const { closeModal, showModal, toggleShowModal, hideAllModals } = modalsSlice.actions;
export default modalsSlice.reducer;
