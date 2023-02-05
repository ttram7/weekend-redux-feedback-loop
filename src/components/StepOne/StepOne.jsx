import {useState} from 'react'; 
import {useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function StepOne() {
    const feelingScore = useSelector(store => store.feelingScore); // getter
    //const [feelingInput, setFeelingInput] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleInputOne = event => {
        event.preventDefault();
        dispatch({ type: 'SET_FEELING_SCORE', payload: event.target.value });
        //setFeelingInput('');
        //history.push('/step/two')
    }

    const goPageTwo = () => {
        if (feelingScore === '') {
            alert('Please provide input');
        } else {
            history.push('/step/two');
        }
    }
    // how to go back a page without input fields resetting?
    // could there be a form set up without an onChange event?
    // how to pass prop into button onClick function?
    return (
        <>
            <h1>How are you feeling today?</h1>
            {/* <input value = {feelingInput} onChange={handleChangeOne} className="input" type="text" />
            <button onClick = {() => checkInputOne()} className="button">Next</button>  */}
            {/* <form onSubmit={handleInputOne}  className="add-feedback-form">
                <input 
                required
                type="number"  
                value={feelingInput}
                onChange={(event) => setFeelingInput(event.target.value)}
                />  */}
                <TextField required id="outlined-required" label="required"
                type="number"  
                value={feelingScore} onChange={handleInputOne}size="small" variant="outlined" helperText="Enter value as a numnber" />
                <Button onClick = {() => goPageTwo()} variant="contained" type="submit">Next</Button>
            {/* </form> */}
        </>
    )
}
export default StepOne;