import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function StepOne() {
    const feelingScore = useSelector(store => store.feelingScore); // getter
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <>
            <h1>How are you feeling today?</h1>
            {/* <p>Feeling?</p> */}
            <input value = {feelingScore} className="input" type="number" />
            <button onClick = {() => history.push('/step/two')} className="button">Next</button>
            {/* <form>
                Feeling?
                <input type ="number"/>
            </form> */}
        

            
        </>
    )
}
export default StepOne;