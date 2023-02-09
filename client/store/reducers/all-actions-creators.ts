import { BasketActionCreators } from "./basket/action-creator";
import { BrandActionCreators } from "./brand/action-creator";
import { DevicesActionCreators } from "./devices/action-creator";
import { OrderActionCreators } from "./order/action-creator";
import { TypeActionCreators } from "./type/action-creator";
import { UserActionCreators } from "./user/action-creator";
import { UsersActionCreators } from "./users/action-creator";


export const allActionCreators = {
	...BasketActionCreators,
	...BrandActionCreators,
	...TypeActionCreators,
	...DevicesActionCreators,
	...OrderActionCreators,
	...UserActionCreators,
	...UsersActionCreators,
}