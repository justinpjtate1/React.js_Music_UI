import pencil from './edit-pencil.png'

function Playlist_list_items(props) {
    return(
        <>
        <li className="playlist-item" id={props.value} onClick={(e) => props.playlistToDisplay(e)}>
            {props.name}
            <img id="edit-pencil"src={pencil} />
        </li>
        </>
    )
}

export default Playlist_list_items