import {useState} from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import UserForm from '../UserForm/UserForm';

import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function StepTwo() {
    //const [understandInput, setUnderstandInput] = useState('');
    const understandScore = useSelector(store => store.understandScore); // getter
    const dispatch = useDispatch();
    const history = useHistory();

    const handleInputTwo = (event) => {
        event.preventDefault();
        dispatch({ type: 'SET_UNDERSTAND_SCORE', payload: event.target.value });
        //setUnderstandInput('');
        //history.push('/step/three')
    }

    const goPageThree = () => {
        if (understandScore === '') {
            alert('Please provide input');
        } else {
            history.push('/step/three');
        }
    }

    const goBack = () => {
        history.goBack();
    }


    return (
        <>
            <h1>How well are you understanding the content?</h1>
            {/* <form onSubmit={handleInputTwo} className="add-feedback-form">
                <input 
                required
                type="number"  
                value={understandInput}
                onChange={(event) => setUnderstandInput(event.target.value)}
                /> 
            <button onClick={() => goBack()}>Prev</button>
            <button type="submit">Next</button>
            </form> */}
            <TextField required id="outlined-required" label="required"
                type="number"  
                value={understandScore} onChange={handleInputTwo}size="small" variant="outlined" helperText="Enter value as a numnber" />
                <Button onClick = {() => goBack()} variant="contained" type="submit">Prev</Button>
                <Button onClick = {() => goPageThree()} variant="contained" type="submit">Next</Button>
            {/* <UserForm input = {understandScore} handleInput = {handleInputTwo} nextPage = {goPageThree()} /> */}
    
        

            
        </>
    )
}
export default StepTwo;