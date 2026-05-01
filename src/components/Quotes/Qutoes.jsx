import { useState, useEffect } from "react";

function Quotes() {
  const [quotes, setQuotes] = useState("");
  const [author, setAuthor] = useState("");
  useEffect(() => {
    async function getQuoteAPI() {
      try {
        const response = await fetch("https://dummyjson.com/quotes/random");
        if (!response.ok) return;

        const { quote: text, author: fetchAuthor } = await response.json();
        // const data = await response.json();
        // console.log(data);
        setQuotes(text);
        setAuthor(fetchAuthor);
      } catch (err) {
        console.error("Failed to fetch quote:", err);
      }
    }
    setInterval(getQuoteAPI, 1000 * 60 * 60);
    getQuoteAPI();
  }, []);
  return (
    <blockquote id="quote-OTD">
      <p className="quote">{quotes}</p>
      <p className="author">-{author}</p>
    </blockquote>
  );
}

export default Quotes;
