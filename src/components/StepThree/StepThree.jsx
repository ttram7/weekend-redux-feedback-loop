import {useState} from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function StepThree() {
    const [supportInput, setSupportInput] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleInputThree = (event) => {
        event.preventDefault();
        dispatch({ type: 'SET_SUPPORT_SCORE', payload: supportInput });
        //setSupportInput('');
        history.push('/step/four')
    }

    const goBack = () => {
        history.goBack();
    }

    return (
        <>
            <h1>How well are you being supported?</h1>
            <form onSubmit={handleInputThree} className="add-feedback-form">
                <input 
                required 
                type="number" 
                value={supportInput}
                onChange={(event) => setSupportInput(event.target.value)}
                />
            <button onClick={() => goBack()}>Prev</button> 
            <button type="submit">Next</button>
            </form>
    
        

            
        </>
    )
}
export default StepThree;