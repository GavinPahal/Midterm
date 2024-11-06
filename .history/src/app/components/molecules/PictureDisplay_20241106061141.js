// src/components/molecules/PictureDisplay.js
"use client";

export default function PictureDisplay({ pictureContents, loading }) {
  if (loading) return <section>Loading...</section>;

  if (pictureContents.length > 0) {
    return (
      <section>
        {pictureContents.map((picture, i) => (
          <article key={i}>
            <img src={picture.url} alt={`HTTP ${picture.code}`} />
            <h2>HTTP {picture.code}</h2>
          </article>
        ))}
      </section>
    );
  }

  return <section>No pictures have been fetched</section>;
}
