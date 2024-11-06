// src/page.js
"use client";
import { useState } from "react";
import Header from "./components/molecules/Header";
import PictureDisplay from "./components/molecules/PictureDisplay";

export default function Page() {
  const [pictureContents, setPictureContents] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch 5 random HTTP response code images
  async function fetchPictures() {
    setLoading(true);
    const errorCodes = [400, 401, 403, 404, 500];
    const randomPictures = await Promise.all(
      errorCodes.map(async (code) => {
        const response = await fetch(`https://http.dog/${code}.jpg`);
        return { code, url: response.url }; // Storing the error code and the image URL
      })
    );
    setPictureContents(randomPictures);
    setLoading(false);
  }

  // Clear the displayed images
  function clearPictures() {
    setPictureContents([]);
  }

  return (
    <div>
      <Header loading={loading} fetchPictures={fetchPictures} clearPictures={clearPictures} />
      <PictureDisplay pictureContents={pictureContents} loading={loading} />
    </div>
  );
}
