import birdsData from '../assets/birds';
import {NEW_GAME, NEXT_LEVEL, NOT_SUCCESS_GUESS, SUCCESS_GUESS} from "./actionCreators";

let randomBird = Math.floor(Math.random() * 6);

const initialState = {
    birds: birdsData.length,
    birdCategory: 0,
    score: 0,
    secretBird: birdsData[0][randomBird],
    randomBird: randomBird,
    attemptCount: 0,
    guessed: false,
    gameOver: false,
    birdGroup: birdsData[0],
    clicked: []
};


function birdsReducer(state = initialState, action) {

    switch (action.type) {
        case SUCCESS_GUESS:
            if(!state.guessed) {
                let score = (state.score + 5 - state.attemptCount > 0)
                    ? state.score + 5 - state.attemptCount
                    : 0;

                return {
                    ...state,
                    score: score,
                    guessed: true
                }
            } else { return state }

        case NOT_SUCCESS_GUESS:
            if(!state.clicked.includes(action.birdName)) {
                let attemptCount = state.attemptCount > 5 ? 5 : ++state.attemptCount;
                return {
                    ...state,
                    attemptCount: attemptCount,
                    clicked: [...state.clicked, action.birdName]

                }
            } else {return state}

        case NEXT_LEVEL:
            let randomBird = Math.floor(Math.random() * 6);
            let nextCategory = state.birdCategory + 1;
            if (state.birds  < nextCategory + 1) {
                return {
                    ...initialState,
                    score: state.score,
                    gameOver: true

            }}

            return {
                ...initialState,
                birdCategory: nextCategory,
                score: state.score,
                secretBird: birdsData[nextCategory][randomBird],
                birdGroup: birdsData[nextCategory],
                randomBird: randomBird


            };

        case NEW_GAME:
            return {
                ...initialState
            };


        default:
            return state;
    }
}

export default birdsReducer;