import React from "react";
import { IDevice } from "../device/types";
import MainDeviceItem from "./MainDeviceItem";

interface MainDeviceItemProps {
  title: string;
}

const MainDeviceItems: React.FC<MainDeviceItemProps> = ({ title }) => {

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
      info: {_id: 1, name: "string", longDescr: "string" },
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
      info: {_id: 2, name: "string", longDescr: "string" },
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
      info: {_id: 3, name: "string", longDescr: "string" },
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
      _id: 4,
      image: "string",
      title: "string",
      price: 2,
      discount: 0.15,
      rating: 3,
      shortDescr: "string",
      brandId: { _id: 1, name: "brand" },
      typeId: { _id: 1, name: "type" },
      img: "string",
      info: {_id: 1, name: "string", longDescr: "string" },
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
      _id: 5,
      image: "string",
      title: "string",
      price: 2,
      discount: 0.15,
      rating: 3,
      shortDescr: "string",
      brandId: { _id: 1, name: "brand" },
      typeId: { _id: 1, name: "type" },
      img: "string",
      info: {_id: 1, name: "string", longDescr: "string" },
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
      _id: 6,
      image: "string",
      title: "string",
      price: 2,
      discount: 0.15,
      rating: 3,
      shortDescr: "string",
      brandId: { _id: 1, name: "brand" },
      typeId: { _id: 1, name: "type" },
      img: "string",
      info: {_id: 1, name: "string", longDescr: "string" },
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
      _id: 7,
      image: "string",
      title: "string",
      price: 2,
      rating: 3,
      shortDescr: "string",
      brandId: { _id: 1, name: "brand" },
      typeId: { _id: 1, name: "type" },
      img: "string",
      info: {_id: 1, name: "string", longDescr: "string" },
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
    <div className="main-device-items">
      <h3 className="main-device-items__title">{title}</h3>
      <div className="main-device-items__body">
        {devices.map((device) => {
          return <MainDeviceItem key={device._id} device={device} />;
        })}
      </div>
    </div>
  );
};

export default MainDeviceItems;
