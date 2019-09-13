# inConcert-api

Discover new music and see great bands live at the same time.

With inConcert, you can search for upcoming gigs in your city and create a Spotify playlist of the artists.
Listen to your playlist to find out if there's a great band you never even knew about playing in your city.

This is the backend repo for inConcert. You can see the frontend here: https://github.com/max-powell/inConcert-client

## About inConcert
With inConcert, I'm trying to take on as many new challenges/technologies as possible (we'll see how that goes):
* Node/Express server
* TDD w/ Jest and React Testing Library
* OAuth
* Typescript
* SASS
* ..anything else I can get my hands on

## Done
* Server can query Songkick for city id
* Server can query Songkick for upcoming gigs in a city
* Server can get authorisation to manage user's Spotify playlists
* Designed landing page
* Landing page redirects to Spotify for user login
* Client can pass Spotify authorisation code to server and receive access token

## Todo
* Allow users to search a city and receive upcoming gigs
* Use gig list to get artists' top tracks
* Create Spotify playlist in user's account
* Build out full frontend
