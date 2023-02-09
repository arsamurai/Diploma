import { IDevice } from "./IDevice";

export interface IOrder {
  userId: number;
  devices: IDevice[] | [];
}