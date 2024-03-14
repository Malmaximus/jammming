import React, { useState}  from 'react';


import logo from './logo.svg';
import './App.css';

import TrackList from '../tracklist/Tracklist.js';
import MockTracks from '../track/MockTracks';
import Playlist from '../playlist/Playlist';


function App() {
  // State for playlist tracks
  const [playlistTracks, setPlaylistTracks] = useState([]);

  // Function to add a track to the playlist
  const addTrackToPlaylist = (track) => {
    setPlaylistTracks([...playlistTracks, track]);
  };

  // Function to remove a track from the playlist
  const removeTrackFromPlaylist = (trackId) => {
    setPlaylistTracks(playlistTracks.filter(track => track.id !== trackId));
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <main>
        <TrackList tracks={MockTracks} addTrackToPlaylist={addTrackToPlaylist}/>
        <Playlist playlistTracks={playlistTracks} removeTrackFromPlaylist={removeTrackFromPlaylist}/>
      </main>
    </div>
  );
}

export default App;
