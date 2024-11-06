"use client";
import { useState } from "react";
import Header from "./components/molecules/Header";
import PictureDisplay from "./components/molecules/PictureDisplay";

export default function Page() {
  const [dataContents, setDataContents] = useState([]);
  const [error, setError] = useState("");

  async function toggleData() {
    if (dataContents.length > 0) {
      setDataContents([]);
      setError("");
    } else {
      const API_URL = "https://rickandmortyapi.com/api/character";
      const response = await fetch(API_URL);

      if (!response.ok) {
        setError("Failed to fetch data");
        return;
      }

      const data = await response.json();
      setDataContents(data.results.slice(0, 5));
      setError("");
    }
  }

  return (
    <div className="page-container">
      <Header toggleData={toggleData} isDataDisplayed={dataContents.length > 0} />
      {error && <p className="error-message">{error}</p>}
      <PictureDisplay dataContents={dataContents} />
    </div>
  );
}
