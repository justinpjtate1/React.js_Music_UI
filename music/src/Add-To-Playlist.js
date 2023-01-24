import React, { Component } from "react";

class Add_To_Playlist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            check: false
        }
    }

    check = () => {
        this.setState({
                check: !this.state.check
            },
            () => {
                    if(this.state.check === true) {
                        this.props.resultChecked()
                    } else if(this.state.check === false) {
                        this.props.resultUnchecked()
                    }         
            }
        )
    
    }

    render() {
        return(
            <>
                <input type="checkbox"  className="song-checkbox" id="song-checkbox-search" onClick={this.check}/>
            </>
        )
    }
}

export default Add_To_Playlist;