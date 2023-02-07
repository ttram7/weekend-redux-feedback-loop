import * as React from 'react';
import LinearProgressWithLabel from '@mui/material/LinearProgress';

// displays certain width of progress as user answers questions
function ProgressBar({progress}) {
    return (
        <>
            <LinearProgressWithLabel variant="determinate" value={progress} />
        </>
    )
}

export default ProgressBar;