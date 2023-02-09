import {ChangeEvent, useEffect, useState} from 'react';
import { useDebounce } from '../../hooks/useDebounce';
import { useAppSelector, useTDispatch } from '../../hooks/redux';
import { searchReducer } from '../../redux/application/actions';
import { Link } from 'react-router-dom';
import NameInput from "../NameInput";

interface SearchModalProps {
	active: boolean;
}

const SearchModal:React.FC<SearchModalProps> = ({active}) => {
	const dispatch = useTDispatch();
	const [searchPattern, setSearchPattern] = useState<string>();
	const { searchResults } = useAppSelector(state => state.application);
	const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchPattern(e.target.value);
		if(!e.target.value){
			dispatch(searchReducer(''));
		}
	}
	const debouncedSearchTerm = useDebounce(searchPattern, 500);
	useEffect(() => {
		if(debouncedSearchTerm && searchPattern){
			dispatch(searchReducer(searchPattern));
		}
		// if(searchPattern === ' ') setSearchPattern('');
	}, [debouncedSearchTerm, active]);
	return (
		<div className="dropdown-menu dropdown-menu__search p-0">
			<div>
				<div className="form-inline border-bottom">
					{active &&
					<NameInput
						key={+active}
						forceFocus={active}
						className="form-group mb-0 search_input"
						name="search-input"
						type="text"
						onChange={onSearch}
						value={searchPattern}
						placeholder="Search"
					/>
					}
				</div>
			</div>
			{searchResults &&
				<>
					{!!searchResults.growers.length &&
						<div style={{border: 'none'}} className="card-body pl-24 pr-24 pt-0 pb-0">
							<div className="mini txt--gray pt-12">Growers</div>
							{searchResults.growers.map(e => (
								<Link key={e.id} to={`/grower/${e.id}`} className="description mt-1">
									{/*<span>BC</span> ЭТО НУЖНО, УДАЛЯТЬ НЕ БУДУ*/}
									<div className="border-bottom pb-12 pt-12">{e.name}</div>
								</Link>
							))}
						</div>
					}
					{!!searchResults.strains.length &&
						<div style={{border: 'none'}} className="card-body pl-24 pr-24 pt-0 pb-0">
							<div className="mini txt--gray pt-12">Strains</div>
							{searchResults.growers.map(e => (
								<Link key={e.id} to={`/product-page/${e.id}`} className="description mt-1">
									<div className="border-bottom pb-12 pt-12">{e.name}</div>
								</Link>
							))}
						</div>
					}
				</>
			}
		</div>
	)
}
export default SearchModal;