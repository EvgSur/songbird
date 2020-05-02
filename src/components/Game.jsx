import React from 'react';
import {connect} from 'react-redux';
import {nextLevel, notSuccessGuess, successGuess} from "../redux/actionCreators";
import sound from '../utils/Audio';
import ok from '../assets/sounds/ok.wav';
import error from '../assets/sounds/error.wav';


const Game = (props) => {
    const checkAnswer = (e, birdName) => {
        if (birdName === props.secretBird.name) {
            e.target.classList.add('success');
            props.successGuess();
            sound(ok);

        }
        else {
            e.target.classList.add('error');
            props.notSuccessGuess(birdName);
            sound(error);
        }
    };

    let birdGroupNames = props.birdGroup.map(bird =>
        <li className='game-list__item' key={bird.name} onClick={(e) => checkAnswer(e, bird.name)}>{bird.name}</li>);

    return (<div style={{display: props.gameOver ? 'none' : 'block'}}>
            <div className='game-container'>
                <ul className='game-list'>
                    {birdGroupNames}
                </ul>

                <div className='game-info'>
                    <div style={{display: props.guessed ? 'none': 'block'}}>Угадай птицу чувак</div>


                    <div style={{display: props.guessed ? 'block': 'none'}}>
                    <div className='game-info__top-container' >

                        <img src={props.secretBird.image} alt="bird" className='bird'/>
                        <ul>
                            <li><h2>{props.secretBird.name}</h2></li>
                            <li>{props.secretBird.species}</li>
                            <li>
                                <audio src={props.secretBird.audio} controls/>
                            </li>
                        </ul>
                    </div>

                    <div>
                        {props.secretBird.description}
                    </div>

                </div>
                </div>


            </div>
            <button onClick={props.nextLevel} className='btn-nextLevel' type="button" value="Next Level"
                    disabled={!props.guessed}>Next level
            </button>
        </div>
    )
};

const mapStateToProps = state => ({
    birdGroup: state.birdGroup,
    secretBird: state.secretBird,
    guessed: state.guessed,
    gameOver: state.gameOver
});

const mapDispatchToProps = {
    successGuess,
    notSuccessGuess,
    nextLevel
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);