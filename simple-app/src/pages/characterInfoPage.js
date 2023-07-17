import { useState } from "react";
import MarvelService from "../services/service";
import CharacterList from "../components/characterList";

function CharactersInfoPage () {
    const [active, setActive] = useState(false);
    const [data, setData] = useState(null);
    const activeClass = active ? 'active' : '';

    function loadData () {
        MarvelService().then((res) => {
            setActive(true);
            setData(res);
        })
    }

    return (
        <>
            <h1 className={activeClass}>Characters Info-Page</h1>
            <button onClick={() => loadData()}>get characters</button>
            <hr />
            <CharacterList data={data} />
        </>
    )
}

export default CharactersInfoPage;