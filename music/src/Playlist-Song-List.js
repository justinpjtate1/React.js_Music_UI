import Playlist_song from "./Playlist-song"

function Playlist_song_list(props) {
    const allSongs = props.playlistSongs.map((song, index) => <Playlist_song item={song} key={index} number={index} removeFromPlaylist={(num) => props.removeFromPlaylist(num)}/>)
    return(
        <div className="playlist-song-list" id="playlist-song-list">
            <div>Selected Playlist: {props.nameOfPlaylistToDisplay}</div>
            <div className="playlist-titles" id="playlist-titles">
                <div>Title</div>
                <div>Artist</div>
                <div>length</div>
                <button onClick={() => props.removeAllFromPlaylist()}>Clear All</button>
            </div>
            {allSongs}
        </div>
    )
}

export default Playlist_song_list