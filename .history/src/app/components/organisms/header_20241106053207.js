// src/components/organisms/Header.js
"use client";
import Button from "../atoms/Button";
import Heading from "../atoms/Heading";

export default function Header({ loading, fetchPictures, clearPictures }) {
  return (
    <header className="text-center mb-4">
      <Heading>NASA Astronomy Pictures</Heading>
      <div className="mt-2">
        <Button
          onClick={fetchPictures}
          disabled={loading}
          className="border-blue-600 shadow-lg mx-2"
        >
          {loading ? "Loading..." : "Fetch Pictures"}
        </Button>
        <Button onClick={clearPictures} className="border-gray-400 shadow mx-2">
          Clear
        </Button>
      </div>
    </header>
  );
}
