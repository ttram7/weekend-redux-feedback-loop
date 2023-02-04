import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function ReviewPage() {
    const feelingScore = useSelector(store => store.feelingScore);
    const understandScore = useSelector(store => store.understandScore);
    const supportScore = useSelector(store => store.supportScore);
    const comments = useSelector(store => store.comments);

    const handleSubmit = () => {
        // handle post request and history.push(/newpage)
        axios.post('/feedback', newFeedback)
        .then(response => {
            console.log('successful post', response)
        getFeedback();
    })
    }

    return (
        <>
            <h1>Review Your Feedback</h1>
            <p>Feelings: {feelingScore}</p>
            <p>Understanding: {understandScore}</p>
            <p>Support: {supportScore}</p>
            <p>Comments: {comments}</p>
            <button onClick = {() => handleSubmit()} className="button">Submit</button>
        </>
    )
}
export default ReviewPage;