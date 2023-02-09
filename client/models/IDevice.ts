import { IBrand } from "./IBrand";
import { IType } from "./IType";

export interface CreateDevice {
  name: string;
  price: number;
  rating: number;
  discount?: number;
  brandId: IBrand;
  typeId: IType;
  info: IDeviceInfo;
}

export interface IDevice extends CreateDevice {
	_id: any;
  image: Blob | null;
  comments: IComment[];
}

export interface IDeviceInfo {
	screenDiagonal?: string;
	screenRefreshRate?: string;
	batteryCapacity?: string;
	сonnection?: string;
	color?: string;
	size?: string;
	weight?: string;
	otherDescr?: string;
	countryProductManufacturer?: string;
}

export interface CreateComment {
	username: string;
  dignity: string;
  limitations: string;
  text: string;
  stars: number;
  deviceId: number;	
}

export interface IComment extends CreateComment {
	_id: number | null;
}
