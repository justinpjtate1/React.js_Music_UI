import Playlist_list_items from "./playlist-list-item"

function Playlist_items(props) {
    const allPlaylists = props.playlists.map((item, index) => <Playlist_list_items name={item.name} key={index} value={index} displayPlaylist={(e) => props.displayPlaylist(e)} />)
    return(
        <>
        {/* <select name="playlists" id="playlists" multiple>
            {allPlaylists}
        </select> */}
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