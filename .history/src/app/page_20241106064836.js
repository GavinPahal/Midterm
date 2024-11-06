"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [characterData, setCharacterData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to fetch data from Rick and Morty API
  async function fetchCharacters() {
    setLoading(true);
    const API_URL = "https://rickandmortyapi.com/api/character/?page=1";
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setCharacterData(data.results.slice(0, 5)); // Fetch only the first 5 results
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  // Function to clear the displayed data
  function clearCharacters() {
    setCharacterData(null);
  }

  const Header = () => (
    <header className="text-center my-4">
      <h1 className="text-3xl font-bold">Rick and Morty Characters</h1>
      <div className="mt-
