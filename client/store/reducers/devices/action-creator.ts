import { Dispatch } from "@reduxjs/toolkit";
import { devicesApi } from "../../../API/devices";
import { CreateDevice } from "../../../models/IDevice";
import { setIsError } from "../app/slice";
import { setIsLoading, setIsReady } from "./slice";
import { setDevices } from "./slice";

export const DevicesActionCreators = {
	fetchDevices: (count?: number, offset?: number) => async (dispatch: Dispatch) => {
		try {
			dispatch(setIsLoading());
			const devices = await devicesApi.getDevices(count, offset);
			dispatch(setDevices(devices));
		} catch(e: any) {
      dispatch(setIsError(e));
		} finally {
			dispatch(setIsReady());
		}
	},
	createDevice: (avatar: Blob, data: CreateDevice) => async (dispatch: Dispatch) => {
		try {
			const devices = await devicesApi.createDevice(avatar, data);
			dispatch(setDevices(devices));
		} catch(e: any) {
      dispatch(setIsError(e));
		}
	},
	deleteDevice: (deviceId: Object) => async (dispatch: Dispatch) => {
		try {
			const devices = await devicesApi.deleteDevice(deviceId);
			dispatch(setDevices(devices));
		} catch(e: any) {
      dispatch(setIsError(e));
		}
	},



	// Поки так залишити, але буде працювати по-іншому !!!

	// searchDevice: (query: string) => async (dispatch: Dispatch) => {
	// 	try {
	// 		dispatch(setIsLoading());
	// 		const response = await devicesApi.searchDevices(query);
	// 		dispatch(setDevices(response.data));
	// 	} catch (e: any) {
	// 		dispatch(setIsError(e));
	// 	} finally {
	// 		dispatch(setIsReady());
	// 	}
	// }
}