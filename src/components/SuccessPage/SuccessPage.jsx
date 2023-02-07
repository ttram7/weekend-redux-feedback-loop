import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import * as React from 'react';
import Button from '@mui/material/Button';

// success page displays message that feedback has been submitted
// clicking button will route user back to first question
function SuccessPage () {
    const history = useHistory();
    const dispatch = useDispatch();

    // clicking button will dispatch action to clear all reducer data so user can enter new input
    const routeToHome = () => {
        dispatch({ type: 'CLEAR_ALL'});
        history.push('/')
    }

    return (
        <>
            <h1>Thank you! Your feedback has been submitted.</h1>
            <Button onClick = {() => routeToHome()} variant="contained" type="submit">Leave New Feedback</Button>
            
        </>
    )
}

export default SuccessPage;