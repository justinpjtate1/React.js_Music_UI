import React, { Component } from "react";
import Add_To_Playlist from "./Add-To-Playlist";

class Search_result extends Component {
    render() {
        return(
            <div className="search-result">
                <h2 className="song-title" id="song-title-search">{this.props.result.trackName}</h2>
                <img src={this.props.result.artwork} className="song-artwork" id="song-artwork-search"/>
                <h4 className="song-album" id="song-album-search">{this.props.result.album}</h4>
                <h3 className="song-artist" id="song-artist-search">{this.props.result.artistName}</h3>
                <Add_To_Playlist resultChecked={() => this.props.resultChecked(this.props.value)} resultUnchecked={() => this.props.resultUnchecked(this.props.value)} />
            </div>
        )
    }
}

export default Search_result