"use client";
import { useState } from "react";
import Header from "./components/molecules/Header";
import PictureDisplay from "./components/molecules/PictureDisplay";
import "./styles/style.css"; // Import the CSS file

export default function Page() {
  const [dataContents, setDataContents] = useState([]);

  async function fetchData() {
    const API_URL = "https://rickandmortyapi.com/api/character";
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setDataContents(data.results.slice(0, 5)); // Display only 5 results
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function clearData() {
    setDataContents([]);
  }

  return (
    <div className="container">
      <Header fetchData={fetchData} clearData={clearData} />
      <PictureDisplay dataContents={dataContents} />
    </div>
  );
}
