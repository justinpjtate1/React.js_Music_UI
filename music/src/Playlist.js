import React, { Component } from "react";
import Playlist_item from "./Playlist-item";
import Playlist_song_list from "./Playlist-Song-List";

class Playlist_container extends Component {
    render() {
        return(
            <>
            <Playlist_item />
            <Playlist_song_list playlistSongs={this.props.playlistSongs} removeFromPlaylist={(num) => this.props.removeFromPlaylist(num)}/>
            </>
        )
    }
}

export default Playlist_container

// removeFromPlaylist={(num) => this.props.removeFromPlaylist(num)}