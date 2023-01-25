function Playlist_dropdown_options(props) {
    return(
        <>
        <option value={props.playlistNumber} >{props.playlistName}</option>
        </>
    )
}

export default Playlist_dropdown_options