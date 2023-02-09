import React from "react";
import { IBrand } from "../../device/types";
import { Button } from "../../other";

interface AdminBrandProps {
  brand: IBrand;
}

const AdminBrand: React.FC<AdminBrandProps> = ({ brand }) => {
  const { name, value } = brand;

  return (
    <div className="admin-brand">
      <span className="admin-brand__num">1</span>
      <p className="admin-brand__name">{name}</p>
      <p className="admin-brand__value">{value}</p>
      <div className="admin-brand__btn">
        <Button outlined onClick={() => {}}>
          Опції
        </Button>
      </div>
    </div>
  );
};

export default AdminBrand;
