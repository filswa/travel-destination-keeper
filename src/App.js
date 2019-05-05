import React from 'react';
import './App.css';
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
          <SearchBar />
          <Map />
      </main>
    )
  }
}

export default App
