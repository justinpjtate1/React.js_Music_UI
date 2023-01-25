import Playlist_list_items from "./playlist-list-item"

function Playlist_items(props) {
    const allPlaylists = props.playlists.map((item, index) => {
        return <Playlist_list_items name={item.name} 
                                    key={index} 
                                    value={index} 
                                    playlistToDisplay={(e) => props.playlistToDisplay(e)} 
                                    editPlaylistName={(index) => props.editPlaylistName(index)}
                                    editingInProgress={props.editingInProgress}
                />
        } 
    )

    return(
        <>
        <ul id="playlists">
            {allPlaylists}
        </ul>
        <button onClick={() => props.addNewPlaylist()}>Add Playlist</button>
        <div id="name-playlist">Playlist Name:
            <input type="text" onChange={(e) => props.newPlaylistInput(e)}/>
        </div>
        </>
    )
}

export default Playlist_items