

const Track = ({ name, artist, album, id }) => {
  return (
    <div key={id}>
      <h3>{name}</h3>
      <p>{artist} - {album}</p>
    </div>
  );
};

export default Track;