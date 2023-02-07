import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ProgressBar from '../ProgressBar/ProgressBar';

// page four
function StepFour() {
    const comments = useSelector(store => store.comments); // getter
    const dispatch = useDispatch();
    const history = useHistory();

    // user input sent to reducer
    const handleInputFour = (event) => {
        event.preventDefault();
        dispatch({ type: 'SET_COMMENTS', payload: event.target.value });
    }

    // clicking next button will direct user to next page even with empty input
    const goReviewPage = () => {
        history.push('/step/review'); 
    }

    // clicking 'prev' button will direct users to previous page
    const goBack = () => {
        history.goBack();
    }

    return (
        <>
            <ProgressBar progress={100} />
            <h1>Any comments you want to leave?</h1>
            <TextField required id="outlined-required" label="optional"
                type="text"  
                value={comments} onChange={handleInputFour}size="small" variant="outlined" helperText="Enter comments" />
            <Button onClick = {() => goBack()} variant="contained" type="submit">Prev</Button>
            <Button onClick = {() => goReviewPage()} variant="contained" type="submit">Next</Button> 
        </>
    )
}
export default StepFour;