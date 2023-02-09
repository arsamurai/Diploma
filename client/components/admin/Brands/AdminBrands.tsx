import React from "react";
import cn from "classnames";
import AdminBrand from "./AdminBrand";

interface AdminBrandsProps {
  index: number;
  activePage: number;
}

const AdminBrands: React.FC<AdminBrandsProps> = ({ index, activePage }) => {
  const brands = [
    { _id: 1, name: "Samsung", value: "Samsung" },
    { _id: 2, name: "Iphone", value: "Iphone" },
  ];

  return (
    <div
      className={cn("page-content", "admin-brands", { active: index === activePage })}
      data-index={index}
    >
      <h4 className="page-content__title">Бренди</h4>
      <div className="admin-brands__items">
        {brands.map((brand) => (
          <AdminBrand key={brand._id} brand={brand} />
        ))}
      </div>
    </div>
  );
};

export default AdminBrands;
