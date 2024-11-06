
"use client";

export default function PictureDisplay({ pictureContents, loading }) {
  

  if (pictureContents.length > 0) {
    return (
      <section>
        {pictureContents.map((picture, i) => (
          <article key={i}>
            <img src={picture.url} alt={`${picture.code}`} />
            <h2>HTTP {picture.code}</h2>
          </article>
        ))}
      </section>
    );
  }

  return <section>No pictures have been fetched</section>;
}
