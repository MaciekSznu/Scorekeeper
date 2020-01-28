import React from 'react';
import './App.css';
import PlayersList from './components/PlayersList/PlayersList';

class App extends React.Component {

  state = {
    players: [
      {
        name: 'Kunegunda',
        score: 5,
      },
      {
        name: 'Antoś',
        score: 0,
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <PlayersList players={this.state.players} />
      </div>
    );
  }
}

export default App;