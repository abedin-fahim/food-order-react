import {Fragment} from 'react';
import HeaderCartButton from './HeaderCartButton';

import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const header = (props) => {
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton onShowCartHandler={props.onShowCartHandler}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='A table full of delicious food!' />
            </div>
        </Fragment>        
    );
};
export default header;