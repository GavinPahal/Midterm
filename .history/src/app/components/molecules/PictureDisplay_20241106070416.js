import React from "react";

export default function PictureDisplay({ dataContents }) {
  return (
    <section className="picture-display">
      {dataContents.map((character) => (
        <div key={character.id} className="card">
          <img
            src={character.image}
            alt={character.name}
            className="character-image"
          />
          <h3 className="character-name">{character.name}</h3>
          <p className="character-species">{character.species}</p>
        </div>
      ))}
    </section>
  );
}
