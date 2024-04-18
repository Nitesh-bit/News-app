import { useState } from "react";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";

function App() {
  const [category, setCategory] = useState("");
  const [countryCode, setCountryCode] = useState("in");

  return (
    <div>
      <Navbar setCategory={setCategory} setCountryCode={setCountryCode} />
      <NewsBoard category={category} countryCode={countryCode} />
    </div>
  );
}

export default App;
