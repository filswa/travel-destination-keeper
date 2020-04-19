import React from 'react';
import './App.css';

import PlaceContainer from "./components/PlaceContainer"
import SearchBar from "./components/SearchBar"
import Map from "./components/Map"


class App extends React.Component {
  constructor(){
    super()
    this.state = {}
  }

  render(){
    return(
      <main>
          <PlaceContainer />
          <Map />
      </main>
    )
  }
}

export default App
