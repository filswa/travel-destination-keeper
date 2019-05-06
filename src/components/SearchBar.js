import React from 'react'

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
		this.setState({ [name]: value})
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
			</div>
		)
	}
}
export default SearchBar
