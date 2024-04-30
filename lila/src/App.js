import { useState } from 'react';
import Field from './components/field'
import Move from './components/move';

const App = () => {
    const [gameStart, setGameStart] = useState(false);
    const [qty, setQty] = useState(0);
    const [currPosition, setCurrPosition] = useState();
    const [diceRoll, makeDiceRoll] = useState();
    const [rollsHistory, setRollsHistory] = useState([]);
    const [movesHistory, setMovesHistory] = useState([]);

    const  firstSixIndex = rollsHistory.indexOf(6);
    return (
        <>
            <header>
                {gameStart ? <h3>Current position: {currPosition}</h3> : "Game hasn't started yet, roll 6 !"}
                <br />
                <Move
                    gameStart={gameStart}
                    setGameStart={setGameStart}
                    qty={qty}
                    setQty={setQty}
                    currPos={currPosition}
                    setPos={setCurrPosition}
                    dice={diceRoll}
                    diceRoll={makeDiceRoll}
                    rollsHistoryState={rollsHistory}
                    rollsHistoryUpdate={setRollsHistory}
                    movesHistory={movesHistory}
                    setMovesHistory={setMovesHistory}
                />
                <hr />
                <h3>General quantity of rolls: {qty}</h3>
                <h3>Quantity of rolls before game starts: {firstSixIndex > -1 ? firstSixIndex + 1 : null }</h3>
                <h3>Rolls history: {rollsHistory.toString()}</h3>
            </header>

            <main>
                <Field
                    currPos={currPosition}
                />
            </main>
        </>
    )
}

export default App;