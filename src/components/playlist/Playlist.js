import React, { useState } from 'react';
import Track from '../track/Track';

const Playlist = ({ playlistTracks, removeTrackFromPlaylist }) => {
  const [playlistName, setPlaylistName] = useState('');

  const handlePlaylistNameChange = (event) => {
    setPlaylistName(event.target.value); // Update playlist name state when input value changes
  };


  return (
    <div>
      
      <input
          type="text"
          value={playlistName} // Bind input value to playlist name state
          onChange={handlePlaylistNameChange} // Handle input changes
          placeholder="Enter playlist name"
       />
      <h2>
        {playlistName ? playlistName : "New Playlist"} {/* if playlist has a value then use it otherwise just call it New playlist*/}
      </h2>
      <div>
        {playlistTracks.map((track) => (
          <div key={track.id} onClick={() => removeTrackFromPlaylist(track.id)}>
            <Track
              key={track.id}
              name={track.name}
              artist={track.artist}
              album={track.album}
              id={track.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;


