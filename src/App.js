import React from 'react';
import './App.css';
import Header from "./components/Header";
import RandomBird from "./components/RandomBird";
import Game from "./components/Game";
import Winner from "./components/GameOver";




const App = () => {
    return (
        <div>
            <Header/>
            <RandomBird/>
            <Game/>
            <Winner/>

        </div>
    )
};
export default App;
