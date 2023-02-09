import Image from "next/image";
import React from "react";
import image from "../../../assets/images/default.jpeg";
import { IDevice } from "../../device/types";
import { Button } from "../../other";

interface AdminDeviceProps {
  device: IDevice;
}

const AdminDevice: React.FC<AdminDeviceProps> = ({ device }) => {
  const { title, shortDescr, rating, price, discount } = device;

  return (
    <div className="admin-device">
      <span className="admin-device__num">1</span>
      <Image src={image} alt="admin-device-img" className="admin-device__img" />
      <h5 className="admin-device__title">{title}</h5>
      <p className="admin-device__descr">{shortDescr}</p>
      <div className="admin-device__rating">
        {[...Array(rating)].map((star) => (
          <Image src={image} alt="star" className="star" />
        ))}
      </div>
      <div className="admin-device__price">{price}</div>
      <div className="admin-device__discount">{discount}</div>
      <div className="admin-device__btn">
        <Button outlined onClick={() => {}}>
          Опції
        </Button>
      </div>
    </div>
  );
};

export default AdminDevice;
