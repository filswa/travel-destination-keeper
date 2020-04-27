import React from 'react';
import './App.css';

import WelcomeInfo from './components/WelcomeInfo';
import MainContainer from './components/MainContainer';

class App extends React.Component {
  render(){
    return (
    	<div>
	    	<WelcomeInfo />
	    	<MainContainer />
    	</div>
    )
  }
}

export default App
