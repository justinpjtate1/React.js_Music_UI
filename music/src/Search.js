import React, { Component } from "react";
import Search_result from "./Search-result";


class Search extends Component {
    render() {
        const allResults = this.props.searchResults.map((value, index) => {
            return <Search_result result={value} key={index} value={index} resultChecked={(indexOfResult) => this.props.resultChecked(indexOfResult)} resultUnchecked={(indexOfResult) => this.props.resultUnchecked(indexOfResult)} />})
        return(
            <div id="search-container">
            {allResults}
            </div>
        )
    }
}

export default Search

