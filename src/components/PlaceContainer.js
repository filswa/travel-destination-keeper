import React from 'react';
import Place from './Place'

class PlaceContainer extends React.Component {

	constructor() {
		super();
		this.state = {
			places: [
        {
          id: 1,
          name: "La Valette, Malta",
          pos: {lat: 35.896166, lon: 14.509160}
        },
        {
          id: 2,
          name: "Morijim, Goa, India",
          pos: {lat: 15.620607, lon: 73.731076}
        },
        {
          id: 3,
          name: "Marmaris, Turkey",
          pos: {lat: 36.850528, lon: 28.278004}
        }
      ]
		}
	}

  handleDelete = (index) => {
    const places = Object.assign([], this.state.places)
    places.splice(index, 1)
    this.setState({places:places})
  }

  render(){
  	const places =
  		this.state.places.map((place, index) =>
  			<Place
  				key={place.id}
  				name={place.name}
          pos={place.pos}
          handleDelete={this.handleDelete.bind(this, index)}
  			/>)

  	return (
        <div className="places">
          <h1>Places to Visit</h1>
          {places}
        </div>
  	)
  }
}
export default PlaceContainer;
