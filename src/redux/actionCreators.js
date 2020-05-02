export const SUCCESS_GUESS = 'SUCCESS_GUESS';
export const NOT_SUCCESS_GUESS = 'NOT_SUCCESS_GUESS';
export const NEXT_LEVEL = 'NEXT_LEVEL';
export const NEW_GAME = 'NEW_GAME'


export const successGuess = () => {
    return {type: SUCCESS_GUESS}
};

export const notSuccessGuess = (birdName) => {
    return {type: NOT_SUCCESS_GUESS, birdName}
};

export const nextLevel = () => {
    return {type: NEXT_LEVEL}
};

export const newGame = () => {
    return {type: NEW_GAME}
};
