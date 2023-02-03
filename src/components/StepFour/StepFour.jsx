import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function StepFour() {
    const comments = useSelector(store => store.comments); // getter
    const dispatch = useDispatch();
    const history = useHistory();

    const handleChangeFour = (event) => {
        dispatch({ type: 'SET_COMMENTS', payload: event.target.value });
    }

    return (
        <>
            <h1>Any comments you want to leave?</h1>
            <input value = {comments} onChange={handleChangeFour}className="input" type="text" />
            <button onClick = {() => history.push('/step/review')} className="button">Next</button>
    
        

            
        </>
    )
}
export default StepFour;