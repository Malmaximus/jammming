import React from 'react';
import Track from '../track/Track';

const TrackList = ({ tracks, addTrackToPlaylist }) => {
 
  return (
    <div>
      {tracks.map((track) => (
        <div key={track.id} onClick={()=>addTrackToPlaylist(track)}>
          <Track
            name={track.name}
            artist={track.artist}
            album={track.album}
            id={track.id}
            uri={track.uri}
          />
        </div>
      ))}
    </div>
  );
};

export default TrackList;
