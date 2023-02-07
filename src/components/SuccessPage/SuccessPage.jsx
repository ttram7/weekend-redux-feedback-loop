import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import * as React from 'react';
import Button from '@mui/material/Button';

function SuccessPage () {
    const history = useHistory();
    const dispatch = useDispatch();

    const feelingScore = useSelector(store => store.feelingScore);
    const understandScore = useSelector(store => store.understandScore);
    const supportScore = useSelector(store => store.supportScore);
    const comments = useSelector(store => store.comments);

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