import { useState, useContext } from 'react';
import MarvelService from '../services/service';
import CharacterList from '../components/characterList';
import MarvelDataContext from '../components/MarvelDataContext';

function CharactersInfoPage() {
    const [active, setActive] = useState(false);
    const { marvelData, setMarvelData } = useContext(MarvelDataContext);

    function loadData() {
        MarvelService().then((res) => {
            setActive(true);
            setMarvelData(res);
        });
    }

    return (
        <>
            <h1 className={active ? 'active' : ''}>Characters Info-Page</h1>
            <button onClick={() => loadData()}>get characters</button>
            <hr />
            <CharacterList data={marvelData} />
        </>
    );
}

export default CharactersInfoPage;
