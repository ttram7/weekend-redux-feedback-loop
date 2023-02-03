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
            {/* <p>Feeling?</p> */}
            <input value = {understandScore} onChange={handleChangeTwo}className="input" type="number" />
            <button onClick = {() => history.push('/step/three')} className="button">Next</button>
            {/* <form>
                Feeling?
                <input type ="number"/>
            </form> */}
        

            
        </>
    )
}
export default StepTwo;