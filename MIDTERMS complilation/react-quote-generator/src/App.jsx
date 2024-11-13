import { useState } from 'react'
import './App.css';
import Header from './Header';
import Footer from './Footer';
import QuoteGenerator from './QuoteGenerator';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <QuoteGenerator />
      <Footer />
    </>
  );
}

export default App;
