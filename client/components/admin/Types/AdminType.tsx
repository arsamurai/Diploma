import React from "react";
import { IType } from "../../device/types";
import { Button } from "../../other";

interface AdminTypeProps {
  type: IType;
}

const AdminType: React.FC<AdminTypeProps> = ({ type }) => {
  const { name, value } = type;

  return (
    <div className="admin-type">
      <span className="admin-type__num">1</span>
      <p className="admin-type__name">{name}</p>
      <p className="admin-type__value">{value}</p>
      <div className="admin-type__btn">
        <Button outlined onClick={() => {}}>
          Опції
        </Button>
      </div>
    </div>
  );
};

export default AdminType;
