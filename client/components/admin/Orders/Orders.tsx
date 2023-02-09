import React from "react";
import cn from "classnames";
import Order from "./Order";

interface OrdersProps {
  index: number;
  activePage: number;
}

const Orders: React.FC<OrdersProps> = ({ index, activePage }) => {
  const orders = [
    { _id: 1, user: "1", devices: "Samsung" },
    { _id: 2, user: "2", devices: "Iphone" },
  ];

  return (
    <div
      className={cn("page-content", "orders", { active: index === activePage })}
      data-index={index}
    >
      <h4 className="page-content__title">Замовлення</h4>
      <div className="orders__items">
        {orders.map((order) => (
          <Order key={order._id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
