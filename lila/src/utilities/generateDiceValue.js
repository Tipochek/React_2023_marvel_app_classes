export function generateDiceValue (min = 1, max = 6) {
    const diceValue = Math.floor(Math.random() * (max - min + 1) + min);

    // return diceValue > 3 ? diceValue : 6;
    return diceValue;
};