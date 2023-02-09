import React from "react";
import {
  BasketPerson,
  BasketInfo,
  BasketDelivery,
} from "../../components/basket";
import { SimpleLayout } from "../../layouts";

interface BasketProps {}

const Basket: React.FC<BasketProps> = () => {
  return (
    <SimpleLayout>
      <div className="basket">
        <h3 className="basket__title title">Оформлення замовлення</h3>
        <div className="basket__step">
          <h5 className="basket__step-title basket__contacts-title">Ваші контактні дані:</h5>
          <BasketPerson />
        </div>
        <div className="basket__step">
          <h5 className="basket__step-title basket__delivery-title">Адреса доставки:</h5>
          <BasketDelivery />
        </div>
        <div className="basket__step">
          <h5 className="basket__step-title">Ваше замовлення:</h5>
          <BasketInfo confirm />
        </div>
      </div>
    </SimpleLayout>
  );
};

export default Basket;
