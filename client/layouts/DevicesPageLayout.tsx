import React, { useState } from "react";
import DeviceItems from "../components/device/DeviceItems";
import Image from "next/image";
import { BrandList, SortList } from "../components/device";
import { Button, CatalogModal } from "../components/other";
import catalogIcon from "../assets/images/icons/catalog.png";
import { useRouter } from "next/router";
import { IDevice } from "../models/IDevice";

interface DevicesPageLayoutProps {
  title: string;
  devices: IDevice[];
}

const DevicesPageLayout: React.FC<DevicesPageLayoutProps> = ({
  title,
  devices,
}) => {

	const [activeCatalog, setActiveCatalog] = useState(false);
	const history = useRouter();

	const backHandler = () => {
    history.back()
  };

	const catalogHandler = () => {
    setActiveCatalog(true);
  };
	
  return (
    <div className="devices-page">
      <div className="devices-page__buttons">
        <Button simplified onClick={backHandler}>Назад</Button>
        <Button outlined className="devices-page__catalog-btn" onClick={catalogHandler}>
          <Image src={catalogIcon} alt="catalog" className="catalog-icon" />
          <span>Каталог</span>
        </Button>
      </div>
      <h3 className="devices-page__title title">{title}</h3>
      <div className="devices-page__filters">
        <SortList activeItem={"name"} onSelectSortBy={() => {}} />
        <BrandList activeItem={"samsung"} onSelectBrand={() => {}} />
      </div>
      <div className="devices-page__body">
        <DeviceItems devices={devices} />
      </div>
			<CatalogModal active={activeCatalog} setActive={setActiveCatalog} />
    </div>
  );
};

export default DevicesPageLayout;