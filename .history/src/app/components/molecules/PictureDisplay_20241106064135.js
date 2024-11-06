export default function PictureDisplay({ dataContents }) {
  if (dataContents.length === 0) {
    return <p>No characters fetched</p>;
  }

  return (
    <section>
      {dataContents.map((character) => (
        <article key={character.id}>
          <img src={character.image} alt={character.name} />
          <h2>{character.name}</h2>
          <p>Status: {character.status}</p>
        </article>
      ))}
    </section>
  );
}
