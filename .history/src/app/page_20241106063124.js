// src/page.js
"use client";
import { useState } from "react";
import Header from "./components/molecules/Header";
import PictureDisplay from "./components/molecules/PictureDisplay";

export default function Page() {
  const [dataContents, setDataContents] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch data from NASA API or any API you choose
  async function fetchData() {
    setLoading(true);
    const API_URL = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5";
    const response = await fetch(API_URL);
    const data = await response.json();
    setDataContents(data);
    setLoading(false);
  }

  // Clear the displayed data
  function clearData() {
    setDataContents([]);
  }

  return (
    <div>
      <Header loading={loading} fetchData={fetchData} clearData={clearData} />
      <PictureDisplay dataContents={dataContents} loading={loading} />
    </div>
  );
}
