import pencil from './edit-pencil.png'

function Playlist_list_items(props) {
    return(
        <>
        <li id="playlist-item">
            {props.name}
            <img id="edit-pencil"src={pencil} />
        </li>
        </>
    )
}

export default Playlist_list_items