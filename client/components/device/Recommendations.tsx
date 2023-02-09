import React from "react";
import { MainDeviceItem } from "../main";

// Import Swiper settings
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { IDevice } from "../../models/IDevice";

interface RecommendationsProps {
  title: string;
}

const Recommendations: React.FC<RecommendationsProps> = ({ title }) => {
	const recommendations = [
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
      info: {	_id: 1, name: "string", longDescr: "string" },
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
					_id: 2,
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
      info: { _id: 2, name: "string", longDescr: "string" },
      comments: [
        {
					_id: 3,
          username: "string",
          email: "string",
          dignity: "dignity",
          limitations: "limitations",
          stars: "stars",
          text: "string",
          deviceId: 1,
        },
        {
					_id: 4,
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
      info: { _id: 3, name: "string", longDescr: "string" },
      comments: [
        {
					_id: 5,
          username: "string",
          email: "string",
          dignity: "dignity",
          limitations: "limitations",
          stars: "stars",
          text: "string",
          deviceId: 1,
        },
        {
					_id: 6,
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
      _id: 1,
      image: "string",
      title: "string",
      price: 2,
      discount: 0.15,
      rating: 3,
      shortDescr: "string",
      brandId: { _id: 1, name: "brand" },
      typeId: { _id: 1, name: "type" },
      info: {	_id: 1, name: "string", longDescr: "string" },
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
					_id: 2,
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
      info: { _id: 2, name: "string", longDescr: "string" },
      comments: [
        {
					_id: 3,
          username: "string",
          email: "string",
          dignity: "dignity",
          limitations: "limitations",
          stars: "stars",
          text: "string",
          deviceId: 1,
        },
        {
					_id: 4,
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
      info: { _id: 3, name: "string", longDescr: "string" },
      comments: [
        {
					_id: 5,
          username: "string",
          email: "string",
          dignity: "dignity",
          limitations: "limitations",
          stars: "stars",
          text: "string",
          deviceId: 1,
        },
        {
					_id: 6,
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
      _id: 1,
      image: "string",
      title: "string",
      price: 2,
      discount: 0.15,
      rating: 3,
      shortDescr: "string",
      brandId: { _id: 1, name: "brand" },
      typeId: { _id: 1, name: "type" },
      info: {	_id: 1, name: "string", longDescr: "string" },
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
					_id: 2,
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
      info: { _id: 2, name: "string", longDescr: "string" },
      comments: [
        {
					_id: 3,
          username: "string",
          email: "string",
          dignity: "dignity",
          limitations: "limitations",
          stars: "stars",
          text: "string",
          deviceId: 1,
        },
        {
					_id: 4,
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
      info: { _id: 3, name: "string", longDescr: "string" },
      comments: [
        {
					_id: 5,
          username: "string",
          email: "string",
          dignity: "dignity",
          limitations: "limitations",
          stars: "stars",
          text: "string",
          deviceId: 1,
        },
        {
					_id: 6,
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
    <div className="recommendations">
      <h3 className="recommendations__title">{title}</h3>
      <div className="recommendations__body">
        <Swiper
          modules={[Navigation]}
          navigation
					slidesPerView={1.35}
					breakpoints={{
						450: {
							slidesPerView: 2.35,
						},
						576: {
							slidesPerView: 3.35,
						},
						768: {
							slidesPerView: 4.35,
						},
						991: {
							slidesPerView: 5.35,
						},
						1200: {
							slidesPerView: 6.35,
						},
					}}
        >
          {recommendations.map((device) => {
            return (
              <SwiperSlide>
                <MainDeviceItem key={device._id} device={device} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Recommendations;
