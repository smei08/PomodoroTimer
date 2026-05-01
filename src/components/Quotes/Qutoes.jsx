import { useState, useEffect } from "react";

function Quotes() {
  const [quotes, setQuotes] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("savedData"));
    let quoteInterval;

    if (savedData !== null) {
      setQuotes(savedData.quotes);
      setAuthor(savedData.author);
    } else {
      async function getQuoteAPI() {
        try {
          const response = await fetch("https://dummyjson.com/quotes/random");
          if (!response.ok) return;

          const { quote: text, author: fetchAuthor } = await response.json();

          setQuotes(text);
          setAuthor(fetchAuthor);
        } catch (err) {
          console.error("Failed to fetch quote:", err);
        }
      }
      quoteInterval = setInterval(getQuoteAPI, 1000 * 60 * 60);
      getQuoteAPI();
    }
    return () => clearInterval(quoteInterval);
  }, []);

  useEffect(() => {
    if (quotes === "" && author === "") return;

    localStorage.setItem(
      "savedData",
      JSON.stringify({
        quotes,
        author,
      }),
    );
  }, [quotes, author]);

  return (
    <blockquote id="quote-OTD">
      <p className="quote">{quotes}</p>
      <p className="author">-{author}</p>
    </blockquote>
  );
}

export default Quotes;
