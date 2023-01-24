import trash from './trash-icon.png';

function Playlist_song(props) {
    return(
        <div className="playlist-song" id="playlist-song">
            <div className="song-title" id="song-title-playlist">{props.item.trackName}</div>
            <div className="song-artist" id="song-artist-playlist">{props.item.artistName}</div>
            <div className="song-length" id="song-length-playlist">{props.item.minutes}m {props.item.seconds}s</div>
            <img className="remove-song" id="remove-song-playlist" src={trash} onClick={() => props.removeFromPlaylist(props.number)}/>
        </div>
    )
}

export default Playlist_song

// onClick={props.removeFromPlaylist(props.indexx)}