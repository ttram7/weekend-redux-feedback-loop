import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import * as React from 'react';
import Button from '@mui/material/Button';

function ReviewPage() {
    const feelingScore = useSelector(store => store.feelingScore);
    const understandScore = useSelector(store => store.understandScore);
    const supportScore = useSelector(store => store.supportScore);
    const comments = useSelector(store => store.comments);

    const history = useHistory();

    // handle post request and route user to success page
    const handleSubmit = (event) => {
        const newFeedback = {feelingScore, understandScore, supportScore, comments}
        axios.post('/feedback', newFeedback)
        .then(response => {
            console.log('successful post', response)
        }).catch(err => {
            console.log('error', err)
        })
        history.push('/step/success')
}
    // display all inputs on this page
    return (
        <>
            <h1>Review Your Feedback</h1>
            <p>Feelings: {feelingScore}</p>
            <p>Understanding: {understandScore}</p>
            <p>Support: {supportScore}</p>
            <p>Comments: {comments}</p>
            <Button onClick = {() => handleSubmit()} variant="contained" type="submit">Submit</Button>
        </>
    )
}
export default ReviewPage;