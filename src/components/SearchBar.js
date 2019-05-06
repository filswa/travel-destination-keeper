import React from 'react'
import PlaceContainer from './PlaceContainer'
import Map from './Map'

class SearchBar extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			searchText: ""
		}
	}

	componentDidMount(){}

	handleChange = (event) => {
		const {name, value} = event.target
		console.log(this.state.searchText)
		this.setState({ [name]: value})
	}

	handleSubmit = (event) =>{
		
	}
	render(){

		return(
			<div id="searchBarDiv">
					<input
						id="searchBar"
						type="search"
						name="searchText"
						placeholder="Search for place..."
						value={this.state.searchText}
						onChange={this.handleChange}
					/>
					<button
						id="addButton"
						type="submit"
						onSubmit={this.handleSubmit}
					>Add</button>
			</div>
		)
	}
}
export default SearchBar
