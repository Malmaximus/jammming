import React, { useState } from 'react';
import Track from '../track/Track';

const Playlist = ({ playlistTracks, removeTrackFromPlaylist }) => {
  const [playlistName, setPlaylistName] = useState('');
  const [isEditingName, setIsEditingName] = useState(false);

  const handlePlaylistNameChange = (event) => {
    setPlaylistName(event.target.value); // Update playlist name state when input value changes
  };

   // Function to toggle editing mode
   const toggleEditingName = () => {
    setIsEditingName(!isEditingName);
  };


  return (
    <div>
      <div>
        {/* Conditionally render input field or h2 based on editing mode */}
        {isEditingName ? (
          <input
            type="text"
            value={playlistName} // Bind input value to playlist name state
            onChange={handlePlaylistNameChange}  // Handle input changes
            onBlur={toggleEditingName} // Exit editing mode on blur
            autoFocus // Focus input field on render 
          />
        ) : (
          <h2 onClick={toggleEditingName}>{playlistName ? playlistName : "New Playlist"}</h2> /* if playlist has a value then use it otherwise just call it New playlist*/
        )}
      </div>
  
      <div>
        {playlistTracks.map((track) => (
          <div key={track.id} onClick={() => removeTrackFromPlaylist(track.id)}>
            <Track
              key={track.id}
              name={track.name}
              artist={track.artist}
              album={track.album}
              id={track.id}
              uri={track.uri}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;


