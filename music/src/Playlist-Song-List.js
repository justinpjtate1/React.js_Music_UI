import Playlist_song from "./Playlist-song"

function Playlist_song_list(props) {
    const allSongs = props.playlistSongs.map((song, index) => <Playlist_song item={song} key={index}/>)
    return(
        <>
        {allSongs}
        </>
    )
}

export default Playlist_song_list