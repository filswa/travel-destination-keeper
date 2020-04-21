import React from 'react'

class SearchBar extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			autocomplete: this.props.autocomplete,
			city: "",
			query: "",
		}
	}

	componentDidMount(){
		setTimeout(()=>{
			this.setState({
				autocomplete: this.props.autocomplete,
				city: "",
				query: ""
			});
			this.state.autocomplete.addListener('place_changed', this.handlePlaceSelect); 
		}, 500)
	}

	handleChange = (event) => {
		const {value} = event.target
		this.setState({ query: value })
	}

	handleClick = () => {
		this.props.handleAddPlace(this.state.query)
		this.setState({
			query: "",
		})
	}

	handlePlaceSelect = () => {
		const addressObject = this.state.autocomplete.getPlace();
		const address = addressObject.address_components;
		
		// TODO: get LAT/LON and save to state
		if (address) {
		  this.setState(
			{
			  city: address[0].long_name,
			  query: addressObject.formatted_address,
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
					placeholder="Your next holiday destination..."
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
