import React from 'react';
import logo from "../assets/images/logo.svg";
import { connect } from 'react-redux';


const Header = (props) => {
    const birdsCategory = [
        { id: 0, category: 'Разминка' },
        { id: 1, category: 'Воробьиные' },
        { id: 2, category: 'Лесные птицы' },
        { id: 3, category: 'Певчие птицы' },
        { id: 4, category: 'Хищные птицы' },
        { id: 5, category: 'Морские птицы' }
    ];
    const birdsCategories = birdsCategory.map(item => (
        <li className={props.birdCategory === item.id ? 'pagination__item active' : 'pagination__item'} key={item.id}>
        <span className="pagination_span">
          {item.category}
        </span>
        </li>
    ));
    return (
        <div>
            <div className='header'>
                <div className='top-panel'>
                    <img src={logo} alt='logo' className='top-panel__logo'/>
                    <h2>Score: {props.score}</h2>
                </div>

                <ul className='pagination'>
                    {birdsCategories}
                </ul>

            </div>


        </div>
    )
};

const mapStateToProps = state => ({
    birds: state.birds,
    birdCategory: state.birdCategory,
    score: state.score,
});


export default connect(mapStateToProps)(Header);
