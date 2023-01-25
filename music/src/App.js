import './App.css';
import React, { Component } from 'react'
import Search from './Search';
import Playlist_container from './Playlist';
import Discovery from './Discovery';
import Playlist_dropdown_options from './Playlist-dropdown-options';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: "",
      searchResults: [],
      resultsChecked: [],
      songsToAddToPlaylist: [],
      playlistSongs: [],
      playlists: [{
        name: "Default Playlist",
        songs: []
      }], 
      playlistInput: "",
      playlistSelected: 0,
      playlistDisplayed: 0,
      nameOfPlaylistToDisplay: ""
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

  addToAlreadyDisplayedPlaylist = () => {
    if(this.state.playlistDisplayed === this.state.playlistSelected && this.state.playlistSelected !== "") {
      this.setState({
        playlistSongs: this.state.playlists[this.state.playlistSelected].songs
      })
    }
  }

  updateSelectedPlaylist = (e) => {
    this.setState({
      playlistSelected: +(e.target.value)
    })
  }

  addToSelectedPlaylist = () => {
    const newArr = this.state.playlists[this.state.playlistSelected].songs.concat(this.state.songsToAddToPlaylist)
    const arr1 = this.state.playlists.filter((value, index) => index !== this.state.playlistSelected)
    const newObj = {name: this.state.playlists[this.state.playlistSelected].name, songs: [...newArr]}
    arr1.splice(this.state.playlistSelected, 0, newObj)

    this.setState({
      playlists: arr1

      }, this.addToAlreadyDisplayedPlaylist)
  }

  addToPlaylist = () => {
    const newArr = this.state.searchResults.filter((value, index) => this.state.resultsChecked.includes(index))
    this.setState({
      songsToAddToPlaylist: [...newArr],
      
      }, this.addToSelectedPlaylist
    )

  }

  removeFromPlaylist = (num) => {
    const newArr3 = this.state.playlists.filter((value, index) => index !== this.state.playlistDisplayed)
    const newArr = this.state.playlists[this.state.playlistDisplayed].songs
    const newArr2 = newArr.filter((value, index) => index !== num)
    const newObj = {name: this.state.playlists[this.state.playlistDisplayed].name, songs: newArr2}
    newArr3.splice(this.state.playlistDisplayed, 0, newObj)

    this.setState({
      playlists: newArr3
    }, this.showPlaylist)
  }

  removeAllFromPlaylist = () => {
    const arr1 = this.state.playlists.filter((value, index) => index !== this.state.playlistDisplayed)
    const newObj = {name: this.state.playlists[this.state.playlistDisplayed].name, songs: []}
    arr1.splice(this.state.playlistSelected, 0, newObj)
    this.setState({
      playlists: arr1
    }, this.showPlaylist)
  }

  newPlaylistInput = (e) => {
    this.setState({
      playlistInput: e.target.value
    })
  }

  addNewPlaylist = () => {
    this.setState({
      playlists: this.state.playlists.concat({name: this.state.playlistInput, songs: []})
    })
  }

  playlistToDisplay = (e) => {
    this.setState({
      playlistDisplayed: +(e.target.id),
      nameOfPlaylistToDisplay: this.state.playlists[+(e.target.id)].name
    }, this.showPlaylist)
  }

  showPlaylist = () => {
    this.setState({
      playlistSongs: this.state.playlists[this.state.playlistDisplayed].songs
    })
  }

  editPlaylistName = (index) => {
    const newName = prompt('new playlist name')
    const arr1 = this.state.playlists
    console.log(arr1)
    const playlistToModify = arr1[index]
    playlistToModify.name = newName
    const arr2 = arr1.filter((value, index) => index !== index)
    arr2.splice(index, 0, playlistToModify)

    this.setState({
      playlists: arr1
    })
  }

  render() {
    const allPlaylistDropdowns = this.state.playlists.map((value, index) => <Playlist_dropdown_options playlistName={value.name} key={index} playlistNumber={index} />)
    return (
      <>
      <h1>Create your best playlists</h1>
      <input type="text" placeholder='Search song or artist...' onChange={this.handleSearch}/>
      <button onClick={this.handleSearchClick}>Search!</button>
      
      <main>
        <Search searchResults={this.state.searchResults} 
                resultChecked={this.resultChecked}
                resultUnchecked={this.resultUnchecked} 
        />
        <Playlist_container playlistSongs={this.state.playlistSongs}
                            removeFromPlaylist={this.removeFromPlaylist}
                            removeAllFromPlaylist={this.removeAllFromPlaylist}
                            addNewPlaylist={this.addNewPlaylist}
                            playlists={this.state.playlists}
                            newPlaylistInput={this.newPlaylistInput}
                            playlistToDisplay={this.playlistToDisplay}
                            editPlaylistName={this.editPlaylistName}
                            nameOfPlaylistToDisplay={this.state.playlists[this.state.playlistDisplayed].name}
                            playlistDisplayed={this.state.playlistDisplayed}
        />
      </main>
      <select id="dropdown" onChange={this.updateSelectedPlaylist}>
        {allPlaylistDropdowns}
      </select>
      <button onClick={this.addToPlaylist} >Add To Playlist</button>
      
      <Discovery />
      </>
    );
  }
  
}

export default App;