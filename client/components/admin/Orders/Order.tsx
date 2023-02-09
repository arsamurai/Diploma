import React from "react";
import { IBrand } from "../../device/types";
import { Button } from "../../other";

interface OrderProps {
  order: any;
}

const Order: React.FC<OrderProps> = ({ order }) => {
  const { user, devices } = order;

  return (
    <div className="order">
      <span className="order__num">1</span>
      <p className="order__name">{user}</p>
      <p className="order__value">{devices}</p>
      <div className="order__btn">
        <Button outlined onClick={() => {}}>
          Опції
        </Button>
      </div>
    </div>
  );
};

export default Order;
