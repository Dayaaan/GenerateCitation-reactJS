import React, { Component } from 'react';
import '../App.css';
import citations from '../citations';
import Citation from './Citation';

class App extends Component {
  state = {
  };

  //juste avant que le component soit monté  on affiche une citation au hasard /

  componentWillMount() {
    this.genererCitation();
  }
  //function generation de citation

  genererCitation = event => {
    // On transforme les citations en Array 

    const keyArray = Object.keys(citations);
    console.log(keyArray);

    // Une citation au hasard 

    const randomKey = keyArray[Math.floor(Math.random() * keyArray.length)];

    if (this.state.citation === citations[randomKey].citation) {
      this.genererCitation();
      return;
    }

    console.log(randomKey);

    this.setState(citations[randomKey]);

  }
  render() {
    return (
      <div className="App">
          <h5>Generateur de Citations : </h5>
          <Citation details={this.state} />
          <button onClick={e => this.genererCitation(e)}>Une autre citation !</button>
      </div>
    );
  }
}

export default App;
