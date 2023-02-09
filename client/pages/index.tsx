//import Head from 'next/head'
import Image from "next/image";
import { MainCatalog, MainDeviceItems } from "../components/main";
import { Button, CatalogModal, MainSlider } from "../components/other";
import { MainLayout } from "../layouts";
import catalogIcon from "../assets/images/icons/catalog.png";
import { useState } from "react";

const Main: React.FC = () => {
  const [activeCatalog, setActiveCatalog] = useState(false);

  const catalogHandler = () => {
    setActiveCatalog(true);
  };

  return (
    <>
      <MainLayout>
        <div className="main">
          <div className="main-catalog__wrapper main-catalog--desktop">
            <MainCatalog />
          </div>
          <div className="main__body">
            <div className="main__slider">
              <MainSlider />
            </div>
            <div className="main-catalog__wrapper main-catalog--mobile">
              <MainCatalog />
            </div>
            <Button className="main-catalog__btn" onClick={catalogHandler}>
              <Image src={catalogIcon} alt="catalog" className="catalog-icon" />
              <span>Каталог товарів</span>
            </Button>
            <div className="main__body-goods">
              <MainDeviceItems title={"Want buy?"} />
              <MainDeviceItems title={"Want buy?"} />
              <MainDeviceItems title={"Want buy?"} />
            </div>
          </div>
          <CatalogModal
            active={activeCatalog}
            setActive={setActiveCatalog}
          />
        </div>
      </MainLayout>
    </>
  );
};

export default Main;