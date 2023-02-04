import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function SuccessPage () {
    const history = useHistory();

    const feelingScore = useSelector(store => store.feelingScore);
    const understandScore = useSelector(store => store.understandScore);
    const supportScore = useSelector(store => store.supportScore);
    const comments = useSelector(store => store.comments);

    const routeToHome = () => {
        // feelingScore === '';
        // understandScore === '';
        // supportScore === '';
        // comments === '';
        history.push('/')
    }

    return (
        <>
            <h1>Thank you! Your feedback has been submitted.</h1>
            <button onClick={() => routeToHome()}>Leave New Feedback</button>
        </>
    )
}

export default SuccessPage;