export default function Header({ fetchData, clearData }) {
  return (
    <header>
      <h1>Rick and Morty Characters</h1>
      <button onClick={fetchData}>Fetch Characters</button>
      <button onClick={clearData}>Clear</button>
    </header>
  );
}
