import {useState} from 'react'; 
import {useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function StepOne() {
    //const feelingScore = useSelector(store => store.feelingScore); // getter
    const [feelingInput, setFeelingInput] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    // const handleChangeOne = (event) => {
    //     // Pass the data to our reducer
    //     dispatch({ type: 'SET_FEELING_SCORE', payload: event.target.value });
    // }

    const handleInputOne = (event) => {
        event.preventDefault();
        console.log(feelingInput);
        if (feelingInput === '') {
            alert('Please provide input.')
        }else {
            dispatch({ type: 'SET_FEELING_SCORE', payload: feelingInput });
            setFeelingInput('');
            history.push('/step/two')
            //setFeelingInput('');
            //feelingScore === '';
        }
    }
    

    return (
        <>
            <h1>How are you feeling today?</h1>
            {/* <input value = {feelingInput} onChange={handleChangeOne} className="input" type="text" />
            <button onClick = {() => checkInputOne()} className="button">Next</button>  */}
            <form onSubmit={handleInputOne} className="add-feedback-form">
                <input 
                required
                type="number"  
                value={feelingInput}
                onChange={(event) => setFeelingInput(event.target.value)}
                /> 
            <button type="submit">Next</button>
            </form>
        </>
    )
}
export default StepOne;