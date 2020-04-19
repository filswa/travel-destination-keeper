import React from 'react'

class SearchBar extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			searchText: props.searchText,
		}
	}

	componentDidMount(){}

	handleChange = (event) => {
		const {name, value} = event.target
		this.setState({ [name]: value},()=>{
		})
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
					onClick={this.props.handleAddPlace}
				>Add</button>
			</div>
		)
	}
}
export default SearchBar
