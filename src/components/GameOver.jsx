import React from 'react';
import connect from "react-redux/es/connect/connect";
import {newGame} from "../redux/actionCreators";


const GameOver = (props) => {
    return (
        <div className='game-over' style={{display: props.gameOver ? 'flex' : 'none'}}>
            <div className='game-over-text'>
                <h1>Поздравляем!!!</h1>
                <p>вы набрали <strong>{props.score}</strong> из <strong>30</strong> возможных баллов</p>
            </div>
            <button onClick={props.newGame} className='btn-nextLevel game-over-btn' type="button" value="Next Level"
                    disabled={!props.gameOver}>Next level
            </button>
        </div>
    )
};

const mapStateToProps = state => ({
    gameOver: state.gameOver,
    score: state.score

});

const mapDispatchToProps = {
    newGame
};

export default connect(mapStateToProps, mapDispatchToProps)(GameOver);