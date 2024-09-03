import React, {useState, useEffect, useCallback} from 'react'
import { geocodeByAddress, getLatLng } from '../util/GeocodeByAdress';

const SearchBar = ({autocomplete, handleAddPlace}) => {
	const [query, setQuery] = useState("");
	const [pos, setPos] = useState({});

	const handlePlaceSelect = useCallback(async () => {
		const address = autocomplete.getPlace().formatted_address;
		const pos = await getPos(address)

		if (address) {
			setQuery(address);
			setPos(pos);
		}
	}, [autocomplete])
	
    useEffect(() => {
        setTimeout(()=>{
			setQuery("");
			autocomplete && autocomplete.addListener('place_changed', handlePlaceSelect); 
		}, 1000)
    },[autocomplete, handlePlaceSelect]);

	const handleChange = (event) => {
		setQuery(event.tartget);
	}

	const handleClick = () => {
		let placeData = {
			name: query,
			pos: pos
		}
		handleAddPlace(placeData);
		setQuery("");
		setPos({})
	}

	const getPos = async address => {
		let result = await geocodeByAddress(address)
		.then(async geocode => {
			return await getLatLng(geocode[0])
		})
		.then(latLng => {
			return latLng
		})
		return result
	}

	return(
		<div id="searchBarDiv">
			<input
				id="searchBar"
				type="search"
				name="query"
				placeholder="Search for places to visit..."
				value={query}
				onChange={handleChange}
			/>
			
			<button
				id="addButton"
				type="submit"
				onClick={handleClick}
			>Add</button>
		</div>
	)
}
export default SearchBar
