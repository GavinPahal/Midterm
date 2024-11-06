// src/components/organisms/PictureDisplay.js
"use client";

export default function PictureDisplay({ pictureContents, loading }) {
  if (loading) return <section>Loading...</section>;

  if (pictureContents.length > 0) {
    return (
      <section>
        {pictureContents.map((picture, i) => (
          <article key={i}>
            <img src={picture.url} alt={picture.explanation} />
            <h2>{picture.title}</h2>
            <p>{picture.explanation}</p>
          </article>
        ))}
      </section>
    );
  }

  return <section>No pictures have been fetched</section>;
}
