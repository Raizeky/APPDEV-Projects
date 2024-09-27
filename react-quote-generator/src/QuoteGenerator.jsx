import React, { useState } from 'react';
const quoteSocrates = [
  "1. The only true wisdom is in knowing you know nothing. -Socrates", "2. When the debate is lost, slander becomes the tool of the loser. -Socrates",
  "3. I cannot teach anybody anything. I can only make them think. -Socrates", "4. Awareness of ignorance is the beginning of wisdom. -Socrates",
  "5. An unexamined life is not worth living. -Socrates", "6. If you want to be wrong then follow the masses. -Socrates",
  "7. To find yourself, think yourself. -Socrates", "8. In every person there is a sun. Just let them shine. -Socrates",
  "9. There is only one good, knowledge, and one evil, ignorance. -Socrates",   
];

const quoteRandom = ["1. Experience is the name everyone gives to their mistakes.", "2. In order to be irreplaceable, one must always be different.", 
  "3. The best way to predict your future is to create it.", "4. Knowledge is power.", "5. The biggest adventure you can take is to live the life of your dreams.", 
  "6. The biggest risk is not taking any risk.", "7. The biggest adventure you can take is to live the life of your dreams.", 
  "8. The future belongs to those who believe in the beauty of their dreams."
];

export default function QuoteGenerator() {
  const [quote, setQuote] = useState(quoteSocrates[0]);

  function getRandomQuote() {
    return quoteSocrates[Math.floor(Math.random() * quoteSocrates.length)];
  }

  function getRandomQuoteRandom() {
    return quoteRandom[Math.floor(Math.random() * quoteRandom.length)];
  }

  function getRandomQuoteAll() {
    const allQuotes = [...quoteSocrates, ...quoteRandom];
    return allQuotes[Math.floor(Math.random() * allQuotes.length)];
  }

  function randomQuoteChange() {
    setQuote(getRandomQuote());
  }

  function randomQuoteRandomChange() {
    setQuote(getRandomQuoteRandom());
  }

  function randomQuoteAllChange() {
    setQuote(getRandomQuoteAll());
  }

  return (
    <>
      <div className="Quote-Generator-container">
        <h1>Quote Generator</h1>
        <div className="color-display" style={{ backgroundColor: getRandomColor() }}>
          <p>{quote}</p>
        </div>
        <div className="button-container">
          <button className="randomize" onClick={randomQuoteChange}>
            Socrates
          </button>
          <button className="randomize" onClick={randomQuoteRandomChange}>
            Inspirational
          </button>
          <button className="randomize" onClick={randomQuoteAllChange}>
            Random
          </button>
        </div>
      </div>
    </>
  );
}

function getRandomColor() {
  const colors = ["#68aefa", "#38b689", "#f646ef", "#bd9156", "#a6e7ff", "#7fff00",  "#ff0000", 
    "#00ff00", "#0000ff", "#bfff00", "#00b7eb", "#b9f2ff","#39ff14"];


  return colors[Math.floor(Math.random() * colors.length)];
}