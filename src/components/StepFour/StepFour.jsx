import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function StepFour() {
    //const [commentsInput, setCommentsInput] = useState('');
    const comments = useSelector(store => store.comments); // getter
    const dispatch = useDispatch();
    const history = useHistory();

    const handleInputFour = (event) => {
        event.preventDefault();
        dispatch({ type: 'SET_COMMENTS', payload: event.target.value });
        //setCommentsInput('');
    }

    const goReviewPage = () => {
        history.push('/step/review'); 
    }

    const goBack = () => {
        history.goBack();
    }

    return (
        <>
            <h1>Any comments you want to leave?</h1>
            {/* <form onSubmit={handleInputFour} className="add-feedback-form">
                <input 
                type="text" 
                value={commentsInput}
                onChange={(event) => setCommentsInput(event.target.value)}
                />
            <button onClick={() => goBack()}>Prev</button>  
            <button type="submit">Next</button>
            </form> */}
            <TextField required id="outlined-required" label="optional"
                type="text"  
                value={comments} onChange={handleInputFour}size="small" variant="outlined" helperText="Enter comments" />
                <Button onClick = {() => goBack()} variant="contained" type="submit">Prev</Button>
                <Button onClick = {() => goReviewPage()} variant="contained" type="submit">Next</Button>
    
        

            
        </>
    )
}
export default StepFour;