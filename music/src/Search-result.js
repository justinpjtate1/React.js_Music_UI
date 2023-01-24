import React, { Component } from "react";
import Add_To_Playlist from "./Add-To-Playlist";

class Search_result extends Component {
    render() {
        return(
            <div className="search-result">
                <div>{this.props.result.trackName}</div>
                <img src={this.props.result.artwork} />
                <div>{this.props.result.artistName}</div>
                <div>{this.props.result.album}</div>
                <Add_To_Playlist resultChecked={() => this.props.resultChecked(this.props.value)} resultUnchecked={() => this.props.resultUnchecked(this.props.value)}/>
            </div>
        )
    }
}

export default Search_result