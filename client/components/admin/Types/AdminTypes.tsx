import React from "react";
import cn from "classnames";
import AdminType from "./AdminType";

interface AdminTypesProps {
  index: number;
  activePage: number;
}

const AdminTypes: React.FC<AdminTypesProps> = ({ index, activePage }) => {
  const types = [
    { _id: 1, name: "Samsung", value: "Samsung" },
    { _id: 2, name: "Iphone", value: "Iphone" },
  ];

  return (
    <div
      className={cn("page-content", "admin-types", { active: index === activePage })}
      data-index={index}
    >
      <h4 className="page-content__title">Бренди</h4>
      <div className="admin-types__items">
        {types.map((type) => (
          <AdminType key={type._id} type={type} />
        ))}
      </div>
    </div>
  );
};

export default AdminTypes;
