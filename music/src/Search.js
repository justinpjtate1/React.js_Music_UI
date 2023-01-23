import React, { Component } from "react";
import Search_result from "./Search-result";


class Search extends Component {
    render() {
        const allResults = this.props.searchResults.map((value, index) => {
            return <Search_result result={value} key={index} />})
        return(
            <>
            {allResults}
            </>
        )
    }
}

export default Search

