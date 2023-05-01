import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");

  async function generate() {
    const response = await fetch("https://zenquotes.io/api/random");
    const data = await response.json();
    setQuote(data[0]);
  }
  useEffect(() => {
    generate();
  }, []);

  function submitRequest() {
    generate();
  }
  return (
    <div className="main">
      <div className="quote-generator">
        <button onClick={submitRequest}>Generate Quote</button>
        {quote}
      </div>
    </div>
  );
}

export default App;
