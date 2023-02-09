import React from "react";
import { CreateDevice, AdminDevices, PageTitle, CreateBrand, AdminBrands, CreateType, AdminTypes, AdminUsers, AddRole, CreateRole, Orders } from "../../components/admin";

const tabsTitles = [
"Create device", "Devices", "Orders", "Create Brand", "Brands", "Create Type", "Types", "Create role", "Add role", "Users"
]


interface AdminProps {}

const Admin: React.FC<AdminProps> = ({}) => {
	const [ activePage, setActivePage ] = React.useState(1);
	
	const openPage = (e: any) => {
		setActivePage(+e.target.dataset.index);
	}

  return (
    <div className="admin">
      <div className="container">
        <div className="wrapper">
          <h3 className="admin__title title">Admin</h3>
					<div className="admin__pages">
						<ul className="admin__pages-titles">
							{
								tabsTitles.map((title, index) => <PageTitle index={index} activePage={activePage} openPage={openPage} title={title} /> )
							}
						</ul>
						<div className="admin__pages-content">
							<CreateDevice index={0} activePage={activePage} />
							<AdminDevices index={1} activePage={activePage} />
							<Orders index={1} activePage={activePage} />
							<CreateBrand index={2} activePage={activePage} />
							<AdminBrands index={3} activePage={activePage} />
							<CreateType index={4} activePage={activePage} />
							<AdminTypes index={5} activePage={activePage} />
							<CreateRole index={6} activePage={activePage} />
							<AddRole index={7} activePage={activePage} />
							<AdminUsers index={8} activePage={activePage} />
						</div>
					</div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
