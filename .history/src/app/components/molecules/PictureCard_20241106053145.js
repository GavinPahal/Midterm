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
