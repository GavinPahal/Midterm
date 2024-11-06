import Button from "../atoms/Button";
import Heading from "../atoms/Heading";

export default function Header({ fetchData, clearData }) {
  return (
    <header className="header">
      <Heading text="Rick and Morty Characters" />
      <div className="button-container">
        <Button onClick={fetchData} label="Fetch Characters" />
        <Button onClick={clearData} label="Clear" />
      </div>
    </header>
  );
}
