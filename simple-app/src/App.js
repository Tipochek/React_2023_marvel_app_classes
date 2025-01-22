import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import CharactersInfoPage from './pages/characterInfoPage';
import LandingPage from './pages/landingPage';
import Navigation from './components/navigation';
import MarvelDataContext from './components/MarvelDataContext';

function App() {
    const [marvelData, setMarvelData] = useState(null);
    const value = { marvelData, setMarvelData };

    return (
        <>
            <header id="header" className="container">
                <Navigation />
            </header>

            <main className="container">
                <MarvelDataContext.Provider value={value}>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/characters" element={<CharactersInfoPage />} />
                    </Routes>
                </MarvelDataContext.Provider>
            </main>

            <footer id="footer" className="container">
                some footer data
            </footer>
        </>
    );
}

export default App;
