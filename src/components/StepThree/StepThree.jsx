import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ProgressBar from '../ProgressBar/ProgressBar';

// third page
function StepThree() {
    const supportScore = useSelector(store => store.supportScore); // getter
    const dispatch = useDispatch();
    const history = useHistory();

    // input value gets sent to reducer
    const handleInputThree = (event) => {
        event.preventDefault();
        dispatch({ type: 'SET_SUPPORT_SCORE', payload: event.target.value });  
    }

    // user will be given alert or directed to next page after button click
    const goPageFour = () => {
        if (supportScore === '') {
            alert('Please provide input');
        } else {
            history.push('/step/four');
        }
    }

    // clicking 'prev' button will direct user to previous page
    const goBack = () => {
        history.goBack();
    }

    return (
        <>
            <ProgressBar progress={75} />
            <h1>How well are you being supported?</h1>
            <TextField required id="outlined-required" label="required"
                type="number"  
                value={supportScore} onChange={handleInputThree}size="small" variant="outlined" helperText="Enter value as a number" />
            <Button onClick = {() => goBack()} variant="contained" type="submit">Prev</Button>
            <Button onClick = {() => goPageFour()} variant="contained" type="submit">Next</Button>  
        </>
    )
}
export default StepThree;