import propTypes from 'prop-types';
import { useState } from 'react';
import { snakes, arrows } from '../../game/info';
import { generateDiceValue } from '../../utilities/generateDiceValue';

const exceptions = { ...snakes, ...arrows };

const Move = ({ gameStart, setGameStart, qty, setQty, currPos, setPos, dice, diceRoll, rollsHistoryState, rollsHistoryUpdate, movesHistory, setMovesHistory }) => {
    const [currentPositionExceptional, setCurrentPositionExceptional] = useState(0);
    const [exceptionalDiceArray, setExceptionalDiceArray] = useState([]);

    const defineGameFinish = (position, fromRedirection = false) => {
        console.log('!!! GAME FINISHED !!!', fromRedirection ? 'from redirection' : 'ordinary');
        setGameStart(false);
        setPos(() => position);
        // TODO: save game log as separate chunk
        alert('!!! GAME FINISHED !!!');
    };

    const makeStep = () => {
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!   Step   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');

        // add step
        setQty(qty + 1);

        // make dice roll
        const diceValue = generateDiceValue();
        diceRoll(diceValue);

        // check game start
        if (!gameStart && diceValue === 6) {
            setGameStart(true);
            setPos(diceValue);
            console.log('---------------------------------------------');
            console.log('----------- GAME WAS STARTED ----------------');
            console.log('---------------------------------------------');
            setExceptionalDiceArray([...exceptionalDiceArray, diceValue]);
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
                setExceptionalDiceArray([]);
            } else {
                // check if dice = 6
                if (diceValue === 6) {
                    console.log(`---  6  ---`);
                    if (!exceptionalDiceArray.length) {
                        setCurrentPositionExceptional(currPos);
                    }
                    setExceptionalDiceArray([...exceptionalDiceArray, diceValue]);
                } else {
                    setExceptionalDiceArray([]);
                }

                if (newPositionValue > 72) return;

                // GAME FINISHING
                if (newPositionValue === 68 && diceValue !== 6) {
                    defineGameFinish(newPositionValue);
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
                            defineGameFinish(68, true);
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
        <button className="dice" onClick={makeStep}>
            {dice || 'start'}
        </button>
    );
};

Move.propTypes = {
    gameStart: propTypes.bool,
    setGameStart: propTypes.func,
    qty: propTypes.number,
    setQty: propTypes.func,
    currPos: propTypes.number,
    setPos: propTypes.func,
    dice: propTypes.number,
    diceRoll: propTypes.func,
    rollsHistoryState: propTypes.array,
    rollsHistoryUpdate: propTypes.func,
    movesHistory: propTypes.array,
    setMovesHistory: propTypes.func,
};

export default Move;
