import React from "react";
import cn from "classnames";
import AdminDevice from "./AdminDevice";

interface AdminDevicesProps {
  index: number;
  activePage: number;
}

const AdminDevices: React.FC<AdminDevicesProps> = ({ index, activePage }) => {
  const devices = [
    {
      _id: 1,
      image: "string",
      title: "string",
      price: 2,
      discount: 0.15,
      rating: 3,
      shortDescr: "string",
      brandId: { _id: 1, name: "brand" },
      typeId: { _id: 1, name: "type" },
      img: "string",
      info: { _id: 1, name: "string", longDescr: "string" },
      comments: [
        {
          _id: 1,
          username: "string",
          email: "string",
          dignity: "dignity",
          limitations: "limitations",
          stars: "stars",
          text: "string",
          deviceId: 1,
        },
        {
          _id: 1,
          username: "string",
          email: "string",
          dignity: "dignity",
          limitations: "limitations",
          stars: "stars",
          text: "string",
          deviceId: 1,
        },
      ],
    },
    {
      _id: 2,
      image: "string",
      title: "string",
      price: 2,
      discount: 0.15,
      rating: 3,
      shortDescr: "string",
      brandId: { _id: 1, name: "brand" },
      typeId: { _id: 1, name: "type" },
      img: "string",
      info: { _id: 2, name: "string", longDescr: "string" },
      comments: [
        {
          _id: 1,
          username: "string",
          email: "string",
          dignity: "dignity",
          limitations: "limitations",
          stars: "stars",
          text: "string",
          deviceId: 1,
        },
        {
          _id: 1,
          username: "string",
          email: "string",
          dignity: "dignity",
          limitations: "limitations",
          stars: "stars",
          text: "string",
          deviceId: 1,
        },
      ],
    },
    {
      _id: 3,
      image: "string",
      title: "string",
      price: 2,
      discount: 0.15,
      rating: 3,
      shortDescr: "string",
      brandId: { _id: 1, name: "brand" },
      typeId: { _id: 1, name: "type" },
      img: "string",
      info: { _id: 3, name: "string", longDescr: "string" },
      comments: [
        {
          _id: 1,
          username: "string",
          email: "string",
          dignity: "dignity",
          limitations: "limitations",
          stars: "stars",
          text: "string",
          deviceId: 1,
        },
        {
          _id: 1,
          username: "string",
          email: "string",
          dignity: "dignity",
          limitations: "limitations",
          stars: "stars",
          text: "string",
          deviceId: 1,
        },
      ],
    },
  ];

  return (
    <div
      className={cn("page-content", "admin-devices", { active: index === activePage })}
      data-index={index}
    >
      <h4 className="page-content__title">Товари</h4>
      <div className="admin-devices__items">
        {devices.map((device) => (
          <AdminDevice key={device._id} device={device} />
        ))}
      </div>
    </div>
  );
};

export default AdminDevices;
