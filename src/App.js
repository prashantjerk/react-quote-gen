import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  let url = `https://type.fit/api/quotes`;
  async function generate() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.length)
    const randomIndex = Math.floor(Math.random() * data.length);
    setQuote(data[randomIndex].text);
    setAuthor(data[randomIndex].author);
    console.log(data[randomIndex].text);
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
        <p className="quote-block">{quote}<br/>{author}</p>
      </div>
    </div>
  );
}

export default App;
