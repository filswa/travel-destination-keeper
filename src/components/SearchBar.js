import React from 'react'

class SearchBar extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			searchText: ""
		}
	}

	componentDidMount(){

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
