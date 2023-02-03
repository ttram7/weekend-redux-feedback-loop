import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function StepOne() {
    const feelingScore = useSelector(store => store.feelingScore); // getter
    const dispatch = useDispatch();
    const history = useHistory();

    const handleChangeOne = (event) => {
        // Pass the data to our reducer
        dispatch({ type: 'SET_FEELING_SCORE', payload: event.target.value });
    }

    return (
        <>
            <h1>How are you feeling today?</h1>
            {/* <p>Feeling?</p> */}
            <input value = {feelingScore} onChange={handleChangeOne} className="input" type="text" />
            <button onClick = {() => history.push('/step/two')} className="button">Next</button>
            {/* <form>
                Feeling?
                <input type ="number"/>
            </form> */}
        

            
        </>
    )
}
export default StepOne;