import Playlist_list_items from "./playlist-list-item"

function Playlist_items(props) {
    const allPlaylists = props.playlists.map((item, index) => {
        return <Playlist_list_items name={item.name} 
                                    key={index} 
                                    value={index} 
                                    playlistToDisplay={(e) => props.playlistToDisplay(e)} 
                                    editPlaylistName={(index) => props.editPlaylistName(index)}
                                    playlistDisplayed={props.playlistDisplayed}
                />
        } 
    )

    return(
        <div id="list-of-playlists">
            <ul id="playlists">
            {allPlaylists}
            </ul>
            <button onClick={() => props.addNewPlaylist()}>+</button>
            <input type="text" id="name-playlist" onChange={(e) => props.newPlaylistInput(e)}/>
        </div>
    )
}

export default Playlist_items