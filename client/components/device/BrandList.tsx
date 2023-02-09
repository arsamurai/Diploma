import React, { useRef } from "react";
import { SortPopup } from "../other";
import { wrapper } from "../../store";
import { IBrand } from "../../models/IBrand";

interface BrandListProps {
  activeItem: string;
  onSelectBrand: (index: object) => void;
}

const brands: IBrand[] = [{ name: "samsung", value: "samsung" }, { name: "iphone", value: "iphone" }, { name: "xiomi", value: "xiomi" }];

const BrandList: React.FC<BrandListProps> = React.memo(function BrandList({
  activeItem = "brand",
  onSelectBrand,
}) {
	const brandListRef = useRef(null);

  return (
    <SortPopup title={"Бренд"} activeItem={activeItem} onSelectSortBy={onSelectBrand} sortItems={brands} sortRef={brandListRef} className="brands-list" />
  );
});

export default BrandList;


export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
	//const dispatch = store.dispatch;
	const brands = await fetch('http://localhost:5000/brands',{method: 'GET'});
	//dispatch(setTypes(types));
	console.log(brands);
	return {
		props: {}
	}
})
