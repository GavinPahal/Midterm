
"use client";
import Button from "../atoms/Button";

export default function Header({  fetchPictures, clearPictures }) {
  return (
    <header>
      <h1>Random HTTP Response Codes</h1>
      <Button onClick={fetchPictures}>
      </Button>
      <Button onClick={clearPictures}>Clear</Button>
    </header>
  );
}
