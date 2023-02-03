import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function StepTwo() {
    const understandScore = useSelector(store => store.understandScore); // getter
    const dispatch = useDispatch();
    const history = useHistory();

    const handleChangeTwo = (event) => {
        dispatch({ type: 'SET_UNDERSTAND_SCORE', payload: event.target.value });
    }

    return (
        <>
            <h1>How well are you understanding the content?</h1>
            <input value = {understandScore} onChange={handleChangeTwo}className="input" type="number" />
            <button onClick = {() => history.push('/step/three')} className="button">Next</button>
    
        

            
        </>
    )
}
export default StepTwo;