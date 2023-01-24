import Playlist_song from "./Playlist-song"

function Playlist_song_list(props) {
    const allSongs = props.playlistSongs.map((song, index) => <Playlist_song item={song} key={index}/>)
    return(
        <div className="playlist-song-list" id="playlist-song-list">
            <div className="playlist-titles" id="playlist-titles">
                <div>Title</div>
                <div>Artist</div>
                <div>length</div>
            </div>
            {allSongs}
        </div>
    )
}

export default Playlist_song_list