import React from 'react';
import Track from '../track/Track';

const Playlist = ({ playlistTracks, removeTrackFromPlaylist }) => {
  return (
    <div>
      <h2>Playlist</h2>
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


