import {useState} from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function StepTwo() {
    const [understandInput, setUnderstandInput] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleInputTwo = (event) => {
        event.preventDefault();
        dispatch({ type: 'SET_UNDERSTAND_SCORE', payload: understandInput });
        setUnderstandInput('');
        history.push('/step/three')
    }


    return (
        <>
            <h1>How well are you understanding the content?</h1>
            <form onSubmit={handleInputTwo} className="add-feedback-form">
                <input 
                required
                type="number"  
                value={understandInput}
                onChange={(event) => setUnderstandInput(event.target.value)}
                /> 
            <button type="submit">Next</button>
            </form>
    
        

            
        </>
    )
}
export default StepTwo;