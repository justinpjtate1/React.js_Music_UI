# React.js_Music_UI

The user should be able to search for songs, add them to a playlist and discover new songs that can also be added to playlists.

In the MVP I will have the search and playlists on the same page.

I will use the iTunes search API (20 calls limit per minute) for the initial MVP features, but will explore other APIs for music lyrics and events - I have some in mind, but I’m not sure how to connect using oAuth.

Wireframes: (As I think Lyrics and Events are extra features, I haven't designed them yet)

user stories:
- As a user I should be able to search songs by song name or by artist
- As a user, I should be able to create playlists
- As a user, I should be able to add searched songs to playlist(s) of choice.
- As a user, I want to see other recommended songs that can be added to my playlist(s)
- As a user, I want to remove songs from my playlist
- As a user, I want to edit the order of my playlist
- As a user, I want to clear all songs in a playlist
Components required:
* Base app
* Search container
* Search result
* Discovery items
* Playlist container
* List item for each playlist
* list item for each song added
States:
* search results
* All Playlists (object)
* Songs in each playlist (array)
* Songs to discover (array)
[Wireframes - Project 2 V1.pdf](https://github.com/justinpjtate1/React.js_Music_UI/files/10480485/Wireframes.-.Project.2.V1.pdf)
