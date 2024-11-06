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
      const response = await fetch("https://rickandmortyapi.com/api/character");

      if (response.ok) {
        const data = await response.json();
        setDataContents(data.results.slice(0, 5));
        setError("");
      } else {
        setError("Failed to fetch data");
      }
    }
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <Header toggleData={toggleData} isDataDisplayed={dataContents.length > 0} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <PictureDisplay dataContents={dataContents} />
    </div>
  );
}
