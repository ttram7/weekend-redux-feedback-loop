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

    const checkInputOne = () => {
        console.log(feelingScore);
        if (feelingScore === '') {
            alert('Please provide input.')
        }else {
            history.push('/step/two')
        }
    }
    

    return (
        <>
            <h1>How are you feeling today?</h1>
            <input value = {feelingScore} onChange={handleChangeOne} className="input" type="text" />
            <button onClick = {() => checkInputOne()} className="button">Next</button>  
        </>
    )
}
export default StepOne;