import React from 'react';
import Place from './Place'

const PlaceList = ({places, handleDelete}) => {
  	const placesList =
  		places.map((place) =>
  			<Place
  				key={place.id}
  				name={place.name}
          		pos={place.pos}
          		handleDelete={handleDelete}
  			/>)

  	return (
        <div className="places">
          <h1>Places to Visit</h1>
          {placesList}
        </div>
  	)
}
export default PlaceList;
