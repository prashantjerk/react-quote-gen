import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  let url = `https://type.fit/api/quotes`;

  async function generate() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.length);
    const randomIndex = Math.floor(Math.random() * data.length);
    setQuote(data[randomIndex].text);
    setAuthor(data[randomIndex].author);
  }

  useEffect(() => {
    generate();
  }, []);

  function submitRequest() {
    generate();
  }

  return (
    <div className="main">
      <div className="hero">
        <p className="quote-block">
          {quote}
          <br />- {author}
        </p>
        <button onClick={submitRequest} className="generate-btn">
          Generate Quote
        </button>
      </div>
    </div>
  );
}

export default App;
