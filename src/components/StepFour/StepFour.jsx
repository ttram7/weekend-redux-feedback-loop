import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function StepFour() {
    const [commentsInput, setCommentsInput] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleInputFour = (event) => {
        event.preventDefault();
        dispatch({ type: 'SET_COMMENTS', payload: commentsInput });
        //setCommentsInput('');
        history.push('/step/review')
    }

    const goBack = () => {
        history.goBack();
    }

    return (
        <>
            <h1>Any comments you want to leave?</h1>
            <form onSubmit={handleInputFour} className="add-feedback-form">
                <input 
                type="text" 
                value={commentsInput}
                onChange={(event) => setCommentsInput(event.target.value)}
                />
            <button onClick={() => goBack()}>Prev</button>  
            <button type="submit">Next</button>
            </form>
    
        

            
        </>
    )
}
export default StepFour;