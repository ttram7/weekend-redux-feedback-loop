import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function StepThree() {
    const supportScore = useSelector(store => store.supportScore); // getter
    const dispatch = useDispatch();
    const history = useHistory();

    const handleChangeThree = (event) => {
        dispatch({ type: 'SET_SUPPORT_SCORE', payload: event.target.value });
    }

    return (
        <>
            <h1>How well are you being supported?</h1>
            <input value = {supportScore} onChange={handleChangeThree}className="input" type="number" />
            <button onClick = {() => history.push('/step/four')} className="button">Next</button>
    
        

            
        </>
    )
}
export default StepThree;