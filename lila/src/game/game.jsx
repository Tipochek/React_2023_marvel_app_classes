import { useState } from 'react';
import Field from '../components/gameField/gameField';
import Move from '../components/gameMove/gameMove';

const Game = () => {
    const [gameStart, setGameStart] = useState(false);
    const [stepQuantity, setStepQuantity] = useState(0);
    const [currentPosition, setCurrentPosition] = useState();
    const [diceRoll, setDiceRoll] = useState();
    const [rollsHistory, setRollsHistory] = useState([]);
    const [movesHistory, setMovesHistory] = useState([]);

    const firstSixIndex = rollsHistory.indexOf(6);

    return (
        <>
            <header>
                {gameStart ? <h3>Current position: {currentPosition}</h3> : "Game hasn't started yet, roll 6 !"}
                <br />
                <Move
                    gameStart={gameStart}
                    setGameStart={setGameStart}
                    qty={stepQuantity}
                    setQty={setStepQuantity}
                    currPos={currentPosition}
                    setPos={setCurrentPosition}
                    dice={diceRoll}
                    diceRoll={setDiceRoll}
                    rollsHistoryState={rollsHistory}
                    rollsHistoryUpdate={setRollsHistory}
                    movesHistory={movesHistory}
                    setMovesHistory={setMovesHistory}
                />
                <hr />
                <h3>General quantity of rolls: {stepQuantity}</h3>
                <h3>Quantity of rolls before game starts: {firstSixIndex > -1 ? firstSixIndex + 1 : null }</h3>
                <h3>Rolls history: {rollsHistory.toString()}</h3>
            </header>

            <main>
                <Field
                    currentPosition={currentPosition}
                />
            </main>
        </>
    )
}

export default Game;