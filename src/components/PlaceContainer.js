import React from 'react';
import Place from './Place'
import SearchBar from './SearchBar';

const  PlaceContainer = (props) => {
  const places =
    props.places.map((place, index) =>
      <Place
        map={props.map}
        key={place.id}
        name={place.name}
        pos={place.pos}
        handleDelete={props.handleDeletePlace.bind(this, index)}
      />)

  return (
    <div>
      <SearchBar 
        autocomplete ={props.autocomplete}
        handleAddPlace={props.handleAddPlace}
      />
    
      <div className="places">
        <h1>Places to Visit</h1>
        {places}
      </div>
    </div>
  )
};

export default PlaceContainer;
