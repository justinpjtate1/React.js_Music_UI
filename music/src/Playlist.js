import React, { Component } from "react";
import Playlist_items from "./Playlist-items";
import Playlist_song_list from "./Playlist-Song-List";

class Playlist_container extends Component {
    render() {
        return(
            <>
            <Playlist_items addNewPlaylist={() => this.props.addNewPlaylist()} playlists={this.props.playlists} newPlaylistInput={(e) => this.props.newPlaylistInput(e)} displayPlaylist={(e) => this.props.displayPlaylist(e)}/>
            <Playlist_song_list playlistSongs={this.props.playlistSongs} removeFromPlaylist={(num) => this.props.removeFromPlaylist(num)} removeAllFromPlaylist={() => this.props.removeAllFromPlaylist()} />
            </>
        )
    }
}

export default Playlist_container

// removeFromPlaylist={(num) => this.props.removeFromPlaylist(num)}