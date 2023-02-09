import { IDevice } from "../../../models/IDevice";

export interface IDevicesState {
	devices: IDevice[],
	isLoading: boolean
}