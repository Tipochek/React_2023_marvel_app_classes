import { Route, Routes } from "react-router-dom"
import CharactersInfoPage from "./pages/characterInfoPage";
import LandingPage from "./pages/landingPage";
import Navigation from "./components/navigation";

function App() {
  return (
    <>
      <header id="header" className="container">
        <Navigation/>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/characters" element={<CharactersInfoPage />} />
        </Routes>
      </main>

      <footer id="footer" className="footer">

      </footer>
    </>
  );
}

export default App;
