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
            <input type="text" id="name-playlist" placeholder='Create new playlist...' onChange={(e) => props.newPlaylistInput(e)}/>
            <button onClick={() => props.addNewPlaylist()}>+</button>
        </div>
    )
}

export default Playlist_items