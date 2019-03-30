import React, { Component } from 'react';
import MovieCrawl from '../MovieCrawl/MovieCrawl';
import Controls from '../Controls/Controls';
import CardContainer from '../CardContainer/CardContainer';

class App extends Component {
  render() {
    return (
      <div>
        <h1>SWapiBox: A Star Wars Story</h1>
        <MovieCrawl />
        <Controls />
        <CardContainer />
      </div>
    );
  }
}

export default App;
