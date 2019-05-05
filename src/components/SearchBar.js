import React from 'react'

class SearchBar extends React.Component {
	
	constructor(props){
		super()
		this.state = {
			searchText: ""
		}
	}

	render(){
		return(
			<div id="searchBarDiv">
				<input id="searchBar" type="search" placeholder="Search for place..."></input>
			</div>
		)
	}
}
export default SearchBar