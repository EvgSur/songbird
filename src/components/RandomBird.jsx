import React from 'react';
import bird from "../assets/images/bird.06a46938.jpg";
import { connect } from 'react-redux';


const RandomBird = (props) => {
    return(
        <div className='random-bird' style={{display: props.gameOver ? 'none': 'flex'}}>
            <img src={props.guessed ? props.secretBird.image : bird} alt='bird' className='bird'/>
            <div className='random-bird__inner'>
                <h1 className='random-bird__item'>{props.guessed ? props.secretBird.name : '******'}</h1>
                <div className='random-bird__item'>
                    <audio src={props.secretBird.audio} controls="controls"/>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    birds: state.birds,
    birdCategory: state.birdCategory,
    score: state.score,
    secretBird: state.secretBird,
    secretBirdName: state.secretBirdName,
    guessed: state.guessed,
    gameOver: state.gameOver
});

export default connect(mapStateToProps)(RandomBird);