import React, { Component } from "react";
import Playlist_items from "./Playlist-items";
import Playlist_song_list from "./Playlist-Song-List";

class Playlist_container extends Component {
    render() {
        return(
            <div id="playlist-container">
            <Playlist_items addNewPlaylist={() => this.props.addNewPlaylist()}
                            playlists={this.props.playlists}
                            newPlaylistInput={(e) => this.props.newPlaylistInput(e)}
                            playlistToDisplay={(e) => this.props.playlistToDisplay(e)}
                            editPlaylistName={(index) => this.props.editPlaylistName(index)}
                            playlistDisplayed={this.props.playlistDisplayed}
                            />
            <Playlist_song_list playlistSongs={this.props.playlistSongs}
                                removeFromPlaylist={(num) => this.props.removeFromPlaylist(num)}
                                removeAllFromPlaylist={() => this.props.removeAllFromPlaylist()}
                                nameOfPlaylistToDisplay={this.props.nameOfPlaylistToDisplay}
                                />
            </div>
        )
    }
}

export default Playlist_container