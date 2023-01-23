import React, { Component } from "react";

class Search_result extends Component {
    render() {
        return(
            <div className="search-result">
                <div>{this.props.result.trackName}</div>
                <img src={this.props.result.artwork} />
                <div>{this.props.result.artistName}</div>
                <div>{this.props.result.album}</div>
            </div>
        )
    }
}

export default Search_result