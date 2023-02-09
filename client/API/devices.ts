import { CreateComment, CreateDevice } from "../models/IDevice";
import { ApiCall } from "./api";

interface IAddDir {
	name: string,
	parent: string | null,
	type: string
}

export const devicesApi = {
	createDevice: (avatar: Blob, data: CreateDevice) => {
		const formData = new FormData();
		formData.append("avatar", avatar);
		return ApiCall('post', '/devices', {formData, data});
	},
	deleteDevice: async (deviceId: Object) => {
		return ApiCall("delete", `/devices?id=${deviceId}`);
	},
  getDevices: async (count?: number, offset?: number) => {
    return ApiCall("get", '/devices', {count, offset});
  },
  searchDevices: async (query: string) => {
    return ApiCall("get", `/devices?search=${query}`);
  },
	getOne: async (deviceId: any) => {
    return ApiCall("get",  `/devices/${deviceId}`);
  },
	addComment: async (data: CreateComment) => {
    return ApiCall("post",  '/devices/comment', data);
  },
}