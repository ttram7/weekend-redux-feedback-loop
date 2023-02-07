import * as React from 'react';
import LinearProgressWithLabel from '@mui/material/LinearProgress';

function ProgressBar({progress}) {
    return (
        <>
            <LinearProgressWithLabel variant="determinate" value={progress} />
        </>
    )
}

export default ProgressBar;