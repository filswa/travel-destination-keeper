import React from 'react';
import Place from './Place'
import SearchBar from './SearchBar';

const  PlaceContainer = ({map, autocomplete, places, handleAddPlace, handleDeletePlace}) => {
  const placesList =
    places.map((place, index) =>
      <Place
        map={map}
        key={place.id}
        name={place.name}
        pos={place.pos}
        handleDelete={handleDeletePlace.bind(this, index)}
      />)

  return (
    <div>
      <SearchBar 
        autocomplete ={autocomplete}
        handleAddPlace={handleAddPlace}
      />
    
      <div className="places">
        <h1>Places to Visit</h1>
        {placesList}
      </div>
    </div>
  )
};

export default PlaceContainer;
