// src/components/molecules/PictureCard.js
"use client";
import Image from "next/image";

export default function PictureCard({ picture }) {
  return (
    <article className="p-4 border rounded shadow">
      <Image src={picture.url} alt={picture.title} width={400} height={300} />
      <h2 className="text-xl font-semibold mt-2">{picture.title}</h2>
      <p>{picture.explanation}</p>
    </article>
  );
}
// src/components/organisms/PictureDisplay.js
"use client";
import PictureCard from "../molecules/PictureCard";

export default function PictureDisplay({ pictureContents, loading, error }) {
  if (error) return <section className="text-red-600">{error}</section>;

  if (loading) return <section>Loading...🚀</section>;

  if (pictureContents.length > 0) {
    return (
      <section className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {pictureContents.map((picture, i) => (
          <PictureCard key={i} picture={picture} />
        ))}
      </section>
    );
  }

  return <section>No pictures have been fetched 🔭</section>;
}

