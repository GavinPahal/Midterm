"use client";
import { useState } from "react";
import Header from "../src/components/organisms/Header";
import PictureDisplay from "../src/components/molecules/PictureDisplay";

export default function Page() {
  const [pictureContents, setPictureContents] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchPictures() {
    setLoading(true);
    const API_URL = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5";
    const response = await fetch(API_URL);
    const data = await response.json();
    setPictureContents(data);
    setLoading(false);
  }

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
