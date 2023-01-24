function Playlist_song(props) {
    return(
        <div className="playlist-song" id="playlist-song">
            <div className="song-title" id="song-title-playlist">{props.item.trackName}</div>
            <div className="song-artist" id="song-artist-playlist">{props.item.artistName}</div>
            <div className="song-length" id="song-length-playlist">{props.item.minutes}m {props.item.seconds}s</div>
            <img src="/trash-icon.png" />
        </div>
    )
}

export default Playlist_song