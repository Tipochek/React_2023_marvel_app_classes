const getDiceValue = (min = 1, max = 6) => {
    const diceValue = Math.floor(Math.random() * (max - min + 1) + min);

    // return diceValue > 3 ? diceValue : 6;
    return diceValue;
};

export const snakes = {
    12: 8,
    16: 4,
    24: 7,
    29: 6,
    44: 9,
    52: 35,
    55: 3,
    61: 13,
    63: 2,
    72: 51,
};

export const arrows = {
    10: 23,
    17: 69,
    20: 32,
    22: 60,
    27: 41,
    28: 50,
    37: 66,
    45: 67,
    46: 62,
    54: 68,
};

const exceptions = { ...snakes, ...arrows };

let currentPositionExceptional = 0;
let exceptionalDiceArray = [];

const Move = (props) => {
    const { gameStart, setGameStart, qty, setQty, currPos, setPos, dice, diceRoll, rollsHistoryState, rollsHistoryUpdate, movesHistory, setMovesHistory } = props;

    const gameFinish = (position, fromRedirection = false) => {
        console.log('!!! GAME FINISHED !!!', fromRedirection ? 'from redirection' : 'ordinary');
        setGameStart(false);
        setPos(() => position);
        // TODO: save game log as separate chunk
        alert('!!! GAME FINISHED !!!');
    }

    const move = () => {
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!   Move   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');

        // add step
        setQty(qty + 1);

        // make dice roll
        const diceValue = getDiceValue();
        diceRoll(diceValue);

        // check game start
        if (!gameStart && diceValue === 6) {
            setGameStart(true);
            setPos(diceValue);
            console.log('---------------------------------------------');
            console.log('----------- GAME WAS STARTED ----------------');
            console.log('---------------------------------------------');
            exceptionalDiceArray.push(diceValue);
        }

        //put in history dice rolls
        const rollsHistoryNewState = [...rollsHistoryState, diceValue];
        rollsHistoryUpdate(rollsHistoryNewState);

        // GAME STARTED
        if (gameStart) {
            // new position
            const newPositionValue = currPos + diceValue;

            // put in history moves
            const positionHistoryChange = [...movesHistory, `${currPos} -- +${diceValue} --> ${newPositionValue}`];
            setMovesHistory(positionHistoryChange);
            console.log(positionHistoryChange);

            //check exception 6+6+6
            if (diceValue !== 6 && exceptionalDiceArray.length === 3) {
                console.log('!!! EXCEPTION !!!');
                const move = `${newPositionValue} -- EXCEPTION --> ${currentPositionExceptional + diceValue}`;
                console.log(move);
                setPos(() => currentPositionExceptional + diceValue);
                setMovesHistory(() => [...positionHistoryChange, move]);
                exceptionalDiceArray = [];
            } else {
                // check if dice = 6
                if (diceValue === 6) {
                    console.log(`---  6  ---`);
                    if (!exceptionalDiceArray.length) {
                        currentPositionExceptional = currPos;
                    }
                    exceptionalDiceArray.push(diceValue);
                } else {
                    exceptionalDiceArray = [];
                }

                if (newPositionValue > 72) return;

                // GAME FINISHING
                if (newPositionValue === 68 && diceValue !== 6) {
                    gameFinish(newPositionValue)
                    return;
                }

                setPos(() => newPositionValue);

                //check Arrows & Snakes
                for (let key in exceptions) {
                    if (+key === newPositionValue) {
                        const move = `${newPositionValue} -- move --> ${exceptions[key]}`;
                        console.log(move);
                        // GAME FINISHING
                        if (+key === 54) {
                            gameFinish(68, true)
                            return;
                        }
                        setPos(() => exceptions[key]);
                        setMovesHistory(() => [...positionHistoryChange, move]);
                    }
                }
            }
        }
    };

    return (
        <button className="dice" onClick={move}>
            {dice ? dice : 'start'}
        </button>
    );
};

export default Move;