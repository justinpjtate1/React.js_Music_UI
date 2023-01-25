import React, { Component } from 'react'
import pencil from './edit-pencil.png'

class Playlist_list_items extends Component {

    render() {
        return(
            <>
            <li className="playlist-item" id={this.props.value} onClick={(e) => this.props.playlistToDisplay(e)}>
                {this.props.name}
            </li>
            <img className="edit-pencil" id={this.props.value} src={pencil} onClick={() => this.props.editPlaylistName(this.props.value)}/>
            </>
        )
    }
    
}

export default Playlist_list_items