import classNames from "classnames";
import Image from "next/image";
import React from "react";
import imageExample from "../../assets/images/default.jpeg";
import cn from "classnames";
import Link from "next/link";
import { IDevice } from "../device/types";

interface MainDeviceItemProps {
  device: IDevice;
}

const MainDeviceItem: React.FC<MainDeviceItemProps> = ({ device }) => {
  const { _id, image, title, price, discount } = device;

  return (
    <Link
      href={"/device/" + 1}
      className="main-device-item"
      id="main-device-item"
    >
      <div className="main-device-item__img">
        <Image src={imageExample} alt="device__img" />
      </div>
      <h5 className="main-device-item__title">{title}</h5>
      <div className="main-device-item__bottom">
        <div className="price-wrapper">
          <p className={cn("price", { "old-price": discount })}>{price} ₴</p>
          {discount && (
            <p className="with-discount">
              {Math.floor(price - (price * discount) / 100)} ₴
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default MainDeviceItem;
