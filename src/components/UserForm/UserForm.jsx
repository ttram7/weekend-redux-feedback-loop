import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const UserForm = ({ input, handleInput, nextPage }) => {
    return (
        <>
            <TextField required id="outlined-required" label="required"
                type="number"  
                value={input} onChange={handleInput}size="small" variant="outlined" helperText="Enter value as a numnber" />
                <Button onClick = {() => {nextPage}} variant="contained" type="submit">Next</Button>
        </>
    );
}

export default UserForm;