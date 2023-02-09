import React from "react";
import cn from "classnames";
import { IUser } from "../../account/types";
import AdminUser from "./AdminUser";

interface AdminUsersProps {
  index: number;
  activePage: number;
}

const AdminUsers: React.FC<AdminUsersProps> = ({ index, activePage }) => {
  const users: IUser[] = [
    {
      _id: 1,
      login: "Artur",
      name: "Артур",
      surname: "Мусієнко",
			byFather: "Олександрович",
			email: "musart@gmail.com",
			phoneNumber: "+380997580121",
			imgPath: "dede",
			roles: []
    },
		{
      _id: 2,
      login: "Artur",
      name: "Артур",
      surname: "Мусієнко",
			byFather: "Олександрович",
			email: "musart@gmail.com",
			phoneNumber: "+380997580121",
			imgPath: "dede",
			roles: []
    },
  ];

  return (
    <div
      className={cn("page-content", "admin-users", { active: index === activePage })}
      data-index={index}
    >
      <h4 className="page-content__title">Товари</h4>
      <div className="admin-users__items">
        {users.map((user) => (
          <AdminUser key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default AdminUsers;
