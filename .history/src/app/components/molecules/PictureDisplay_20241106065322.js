export default function PictureDisplay({ dataContents }) {
  if (dataContents.length === 0) {
    return <p>No characters fetched</p>;
  }

  return (
    <section className="picture-display">
      {dataContents.map((character) => (
        <article key={character.id} className="character-card">
          <img src={character.image} alt={character.name} className="character-image" />
          <h2>{character.name}</h2>
        </article>
      ))}
    </section>
  );
}
