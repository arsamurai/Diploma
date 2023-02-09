import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from 'next-redux-wrapper';
import { IDevice } from "../../../models/IDevice";
import { IDevicesState } from "./types";

const initialState: IDevicesState = {
  devices: [] as IDevice[],
	isLoading: true
};  

export const devicesReducer = createSlice({
  name: "devices",
  initialState,
  reducers: {
    setDevices(state, action: PayloadAction<IDevice[]>) {
      state.devices = action.payload;
    },
		setIsLoading(state) {
      state.isLoading = true
    },
    setIsReady(state) {
      state.isLoading = false
    },
  },
	extraReducers: {
		[HYDRATE]: (state, action) => {
			return {
				...state,
				...action.payload.devices,
			};
		},
	},
});

export const { setDevices, setIsLoading, setIsReady } = devicesReducer.actions;
export default devicesReducer.reducer;
