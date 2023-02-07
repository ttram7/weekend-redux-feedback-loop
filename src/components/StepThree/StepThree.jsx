import {useState} from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ProgressBar from '../ProgressBar/ProgressBar';

function StepThree() {
    //const [supportInput, setSupportInput] = useState('');
    const supportScore = useSelector(store => store.supportScore); // getter
    const dispatch = useDispatch();
    const history = useHistory();

    const handleInputThree = (event) => {
        event.preventDefault();
        dispatch({ type: 'SET_SUPPORT_SCORE', payload: event.target.value });
        //setSupportInput('');
        
    }

    const goPageFour = () => {
        if (supportScore === '') {
            alert('Please provide input');
        } else {
            history.push('/step/four');
        }
    }

    const goBack = () => {
        history.goBack();
    }

    return (
        <>
            <ProgressBar progress={75} />
            <h1>How well are you being supported?</h1>
            {/* <form onSubmit={handleInputThree} className="add-feedback-form">
                <input 
                required 
                type="number" 
                value={supportInput}
                onChange={(event) => setSupportInput(event.target.value)}
                />
            <button onClick={() => goBack()}>Prev</button> 
            <button type="submit">Next</button>
            </form> */}
            <TextField required id="outlined-required" label="required"
                type="number"  
                value={supportScore} onChange={handleInputThree}size="small" variant="outlined" helperText="Enter value as a number" />
                <Button onClick = {() => goBack()} variant="contained" type="submit">Prev</Button>
                <Button onClick = {() => goPageFour()} variant="contained" type="submit">Next</Button>
    
        

            
        </>
    )
}
export default StepThree;