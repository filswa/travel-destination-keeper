import React from 'react';
import Place from './Place'

function PlaceList(props){
  	const places =
  		props.places.map((place, index) =>
  			<Place
  				key={place.id}
  				name={place.name}
          pos={place.pos}
          handleDelete={props.handleDelete}
  			/>)

  	return (
        <div className="places">
          <h1>Places to Visit</h1>
          {places}
        </div>
  	)
}
export default PlaceList;
