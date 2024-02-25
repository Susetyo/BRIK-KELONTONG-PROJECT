/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TModalState = {
  modalName: string
  modalData: any
}

const initialState: TModalState = {
  modalName: '',
  modalData: false
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<TModalState>) => {
      state.modalName = action.payload.modalName;
      state.modalData = action.payload.modalData
    },
    closeModal: (state) => {
      state.modalData = initialState.modalData,
      state.modalName = initialState.modalName
    }
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;