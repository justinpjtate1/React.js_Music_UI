import pencil from './edit-pencil.png'

function Playlist_list_items(props) {
        return(
            <div>
            <li className="playlist-item" id={props.value} onClick={(e) => props.playlistToDisplay(e)} >
                {props.name}
            </li>
            <img className="edit-pencil" id={props.value} src={pencil} onClick={() => props.editPlaylistName(props.value)}/>
            </div>
        )
    }

export default Playlist_list_items