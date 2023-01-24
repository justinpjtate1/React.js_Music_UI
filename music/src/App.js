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
      searchResults: [],
      resultsChecked: [],
      songsToAddToPlaylist: [],
      playlistSongs: [] 
    }
  }

  handleSearch = (e) => {
    this.setState({
      searchInput: e.target.value
    })
  }

  handleSearchClick = () => {
    fetch(`https://itunes.apple.com/search?term=${this.state.searchInput}&media=music&limit=5`)
      .then(response => response.json())
      .then(response => {
        let resultsArr = response.results.map(value => {
          return(
            {
              trackName: value.trackName,
              artistName: value.artistName,
              artwork: value.artworkUrl60,
              album: value.collectionName,
              minutes: Math.floor(value.trackTimeMillis/60000),
              seconds: Math.floor((value.trackTimeMillis/1000) % 60)
            }
          )  
        });
        this.setState({
          searchResults: resultsArr
        })
        
      })
  }

  resultChecked = (indexOfResults) => {
    const newArr = this.state.resultsChecked;
    this.setState({
      resultsChecked: [...newArr, indexOfResults]
    })
  }

  resultUnchecked = (indexOfResults) => {
    const newArr = this.state.resultsChecked
    this.setState({
      resultsChecked: newArr.filter(value => value !== indexOfResults)
    })
  }

  // this.state.songsToAddToPlaylist.some(value => this.state.playlistSongs.indexOf(value) >= 0


  queueToPlaylist = () => {
      this.setState({
        playlistSongs: this.state.playlistSongs.concat(this.state.songsToAddToPlaylist)
      })
  }

  addToPlaylist = () => {
    const newArr = this.state.searchResults.filter((value, index) => this.state.resultsChecked.includes(index))
    this.setState({
      songsToAddToPlaylist: [...newArr],
      
      }, this.queueToPlaylist
    )

  }

  render() {
    return (
      <>
      <h1>Create your best playlists</h1>
      <input type="text" placeholder='Search song or artist...' onChange={this.handleSearch}/>
      <button onClick={this.handleSearchClick}>Search!</button>
      <button onClick={this.addToPlaylist} >Add To Playlist</button>
      {/* <select id="dropdown" onChange={this.addToPlaylist}>
        <option value="" defaultValue hidden>Select Playlist</option>
        <option value="playlist 1">Playlist 1</option>
        <option value="playlist 2">Playlist 2</option>
      </select> */}
      <Search searchResults={this.state.searchResults} resultChecked={this.resultChecked} resultUnchecked={this.resultUnchecked} />
      <Playlist_container playlistSongs={this.state.playlistSongs}/>
      <Discovery />
      </>
    );
  }
  
}

export default App;