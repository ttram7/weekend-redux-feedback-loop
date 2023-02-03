import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function ReviewPage() {
    const feelingScore = useSelector(store => store.feelingScore);
    const understandScore = useSelector(store => store.understandScore);
    const supportScore = useSelector(store => store.supportScore);
    const comments = useSelector(store => store.comments);

    return (
        <>
            <h1>Review Your Feedback</h1>
            <p>Feelings: {feelingScore}</p>
            <p>Understanding: {understandScore}</p>
            <p>Support: {supportScore}</p>
            <p>Comments: {comments}</p>
            <button>Submit</button>
        </>
    )
}
export default ReviewPage;