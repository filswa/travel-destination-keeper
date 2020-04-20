import React from 'react'

class SearchBar extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			autocomplete: this.props.autocomplete,
			city: "",
			query: "BIESZCZADY",
		}
	}

	componentDidMount(){
		setTimeout(()=>{
			this.setState({
				autocomplete: this.props.autocomplete,
				city: "",
				query: "BIESZCZADY"
			});
		}, 1000)
	}

	handleChange = (event) => {
		const {name, value} = event.target
		this.setState({ [name]: value},()=>{
		})
	}

	handleClick = () => {
		this.props.handleAddPlace(this.state.query)
		this.setState({
			query: "",
		},()=>{
			console.log(this.state);
		})
	}

	handlePlaceSelect = () => {
		console.log("place selected")

		// Extract City From Address Object
		const addressObject = this.state.autocomplete.getPlace();
		const address = addressObject.address_components;
		
		// Check if address is valid
		if (address) {
		  // Set State
		  this.setState(
			{
			  city: address[0].long_name,
			  query: addressObject.formatted_address,
			},()=>{
				console.log(this.state);
			}
		  );
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
