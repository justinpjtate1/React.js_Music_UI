import './App.css';
import React, { Component } from 'react'
import Search from './Search';
import Playlist_container from './Playlist';
import Discovery from './Discovery';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: "",
      searchResults: []
    }
  }

  handleSearch = (e) => {
    this.setState({
      searchInput: e.target.value
    })
  }

  handleClick = (e) => {
    fetch(`https://itunes.apple.com/search?term=${this.state.searchInput}&media=music&limit=5`)
      .then(response => response.json())
      .then(response => {
        let resultsArr = response.results.map(value => {
          return(
            {
              trackName: value.trackName,
              artistName: value.artistName,
              artwork: value.artworkUrl100,
              album: value.collectionName
            }
          )  
        });
        this.setState({
          searchResults: resultsArr
        })
        
      })
  }

  render() {
    return (
      <>
      <h1>Create your best playlists</h1>
      <input type="text" placeholder='Search song or artist...' onChange={this.handleSearch}/>
      <button onClick={this.handleClick}>Search!</button>
      <Search searchResults={this.state.searchResults} />
      <Playlist_container />
      <Discovery />
      </>
    );
  }
  
}

export default App;