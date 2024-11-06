// app/page.js
"use client";
import { useState } from "react";
import Header from "../src/components/organisms/Header";
import PictureDisplay from "../src/components/organisms/PictureDisplay";

export default function Page() {
  const [pictureContents, setPictureContents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchPictures() {
    setLoading(true);
    setError(null);

    try {
      const API_URL = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5";
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Failed to fetch data.");
      const data = await response.json();
      setPictureContents(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  function clearPictures() {
    setPictureContents([]);
  }

  return (
    <div className="m-8">
      <Header loading={loading} fetchPictures={fetchPictures} clearPictures={clearPictures} />
      <PictureDisplay pictureContents={pictureContents} loading={loading} error={error} />
    </div>
  );
}
