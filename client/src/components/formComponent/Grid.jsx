import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Select from './Select'

const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridTemplateRows: '1fr 1fr 1fr',
        gap: '3%',
        padding: '3%'
    },
    formControl: {
        height: '33%'
    }
}));

/**
 * @desc created the 9 parts of sudoku
 */
const Grid = props => {
    const { nameGrid, register } = props;
    const classes = useStyles();
    const selectArray = [];
    let j = 0;

    for (j = 0; j < 9; j += 1) {
        selectArray.push(<Select key={`select${j}`} nameBoxe={`${nameGrid}-${j}`} register={register} />)
    }

    return (
        <Paper className={classes.paper} elevation={3}>
            {selectArray}
        </Paper>
    );
}

export default Grid;