
"use client";
import Button from "../atoms/Button";

export default function Header({ loading, fetchPictures, clearPictures }) {
  return (
    <header>
      <h1>Random HTTP Response Codes</h1>
      <Button onClick={fetchPictures} disabled={loading}>
        {loading ? "Loading..." : "Fetch Pictures"}
      </Button>
      <Button onClick={clearPictures}>Clear</Button>
    </header>
  );
}
