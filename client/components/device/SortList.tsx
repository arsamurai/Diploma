import React, { useRef } from "react";
import { SortPopup } from "../other";

export interface ISortItem {
	_id: number,
	name: string,
	value: string,
	order: string
}

interface SortListProps {
  activeItem: string;
  onSelectSortBy: (object: object) => void;
}

const sortItems: ISortItem[] = [
	{ _id: 1, name: "Популярністю", value: "rating", order: "desc" },
	{ _id: 2, name: "Алфавітом", value: "name", order: "asc" },
	{ _id: 3, name: "Ціною", value: "price", order: "asc" },
];

const SortList: React.FC<SortListProps> = React.memo(function SortList({ activeItem = "name", onSelectSortBy }) {
  const sortListRef = useRef(null);

  return (
		<SortPopup title={"Сортувати за"} activeItem={activeItem} onSelectSortBy={onSelectSortBy} sortItems={sortItems} sortRef={sortListRef} className="sort-list" />
  );
});

export default SortList;
