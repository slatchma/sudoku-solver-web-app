import Typography from '@material-ui/core/Typography';

import '../styles/title.css';

/**
 * @desc Title of application
 */
const Title = () => {
    return (
        <div className='title'>
            <Typography variant="h1" color="primary">
               SUDOKU - Solver
            </Typography>
        </div>
    );
};

export default Title;