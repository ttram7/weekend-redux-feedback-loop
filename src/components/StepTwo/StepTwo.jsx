import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ProgressBar from '../ProgressBar/ProgressBar';

// second page
function StepTwo() {
    const understandScore = useSelector(store => store.understandScore); // getter
    const dispatch = useDispatch();
    const history = useHistory();

    // input data sent to reducer
    const handleInputTwo = (event) => {
        event.preventDefault();
        dispatch({ type: 'SET_UNDERSTAND_SCORE', payload: event.target.value });
    }

    // user will be given alert if no input entered or directed to page three after button click
    const goPageThree = () => {
        if (understandScore === '') {
            alert('Please provide input');
        } else {
            history.push('/step/three');
        }
    }

    // click 'prev' button will direct users to previous page
    const goBack = () => {
        history.goBack();
    }


    return (
        <>
            <ProgressBar progress={50} />
            <h1>How well are you understanding the content?</h1>
            <TextField required id="outlined-required" label="required"
                type="number"  
                value={understandScore} onChange={handleInputTwo}size="small" variant="outlined" helperText="Enter value as a number" />
            <Button onClick = {() => goBack()} variant="contained" type="submit">Prev</Button>
            <Button onClick = {() => goPageThree()} variant="contained" type="submit">Next</Button>    
        </>
    )
}
export default StepTwo;