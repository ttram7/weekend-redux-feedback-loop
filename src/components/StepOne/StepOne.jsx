import {useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ProgressBar from '../ProgressBar/ProgressBar';

// first page
function StepOne() {
    const feelingScore = useSelector(store => store.feelingScore); // getter
    const dispatch = useDispatch();
    const history = useHistory();

    // input will be dispatched to reducer when user enter inputs
    const handleInputOne = event => {
        event.preventDefault();
        dispatch({ type: 'SET_FEELING_SCORE', payload: event.target.value });
    }

    // alert will display if user doesn't enter input
    // if there is input, user will be directed to page two after button click
    const goPageTwo = () => {
        if (feelingScore === '') {
            alert('Please provide input');
        } else {
            history.push('/step/two');
        }
    }
    
    return (
        <>
            <ProgressBar progress={25} />
            <h1>How are you feeling today?</h1>
            <TextField required id="outlined-required" label="required"
                type="number"  
                value={feelingScore} onChange={handleInputOne}size="small" variant="outlined" helperText="Enter value as a number" />
            <Button onClick = {() => goPageTwo()} variant="contained" type="submit">Next</Button>
        </>
    )
}
export default StepOne;