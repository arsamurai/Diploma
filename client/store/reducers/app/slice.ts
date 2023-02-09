import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from 'next-redux-wrapper';
import { IBrand } from "../../../models/IBrand";
import { IAppState } from "./types";

const initialState: IAppState = {
  isLoading: true,
	isError: ''
};

export const appReducer = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsLoading(state) {
      state.isLoading = true
    },
    setIsReady(state) {
      state.isLoading = false
    },
    setIsError(state, action: PayloadAction<string>) {
      state.isError = action.payload
    },
  },
	extraReducers: {
		[HYDRATE]: (state, action) => {
			return {
				...state,
				...action.payload.isloading,
			};
		},
	},
});

export const { setIsLoading, setIsReady, setIsError } = appReducer.actions;
export default appReducer.reducer;
