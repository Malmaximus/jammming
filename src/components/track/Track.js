

const Track = ({ name, artist, album, id, uri }) => {
  return (
    <div key={id}>
      <h3>{name}</h3>
      <p>{artist} - {album}</p>
      <h4>{uri}</h4>
    </div>
  );
};

export default Track;