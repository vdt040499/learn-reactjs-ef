import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';
import { Button, makeStyles } from '@material-ui/core';

CounterFeature.propTypes = {};

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
        color: 'white',
        height: 32,
        padding: '0 30px',
    }
})

function CounterFeature() {
    const classes = useStyles()
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();

    const handleIncreaseClick = () => {
        const action = increase(); //action creator
        dispatch(action);
    }

    const handleDecreaseClick = () => {
        const action = decrease();
        dispatch(action);
    }

    return (
        <div>
            Counter: {counter}

            <div>
                <Button className={classes.root} onClick={handleIncreaseClick}>Increase</Button>
                <Button className={classes.root} onClick={handleDecreaseClick}>Decrease</Button>
            </div>
        </div>
    );
}

export default CounterFeature;