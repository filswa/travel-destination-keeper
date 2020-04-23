import React from 'react'
import { geocodeByAddress, getLatLng } from '../util/GeocodeByAdress';

class SearchBar extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			autocomplete: this.props.autocomplete,
			query: "",
			pos: {}
		}
	}

	componentDidMount(){
		setTimeout(()=>{
			this.setState({
				autocomplete: this.props.autocomplete,
				query: ""
			});
			this.state.autocomplete.addListener('place_changed', this.handlePlaceSelect); 
		}, 1000)
	}

	handleChange = (event) => {
		const {value} = event.target
		this.setState({ query: value })
	}

	handleClick = () => {
		let placeData = {
			name: this.state.query,
			pos: this.state.pos
		}
		this.props.handleAddPlace(placeData)
		this.setState({
			query: "",
			pos: {}
		})
	}

	getPos = async address => {
		let result = await geocodeByAddress(address)
		.then(async geocode => {
			return await getLatLng(geocode[0])
		})
		.then(latLng => {
			return latLng
		})
		return result
	}

	handlePlaceSelect = async () => {
		const address = this.state.autocomplete.getPlace().formatted_address;
		const pos = await this.getPos(address)

		if (address) {
		  this.setState(
			{
			  query: address,
			  pos: pos
			})
		}
	}
	
	render(){
		return(
			<div id="searchBarDiv">
				<input
					id="searchBar"
					type="search"
					name="query"
					placeholder="Search for places to visit..."
					value={this.state.query}
					onChange={this.handleChange}
				/>
				
				<button
					id="addButton"
					type="submit"
					onClick={this.handleClick}
				>Add</button>
			</div>
		)
	}
}
export default SearchBar
