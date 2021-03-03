import Resolve from './formComponent/Resolve';
import Grid from './formComponent/Grid';
import Typography from '@material-ui/core/Typography';
import { useForm } from 'react-hook-form';
import positionSudoku from '../utils/positionSudoku';
import { useFetch } from '../hooks/useFetch';

import { useTranslation } from 'react-i18next';
import '../styles/sudoku.css';

/**
 * @desc Sudoku part of application. User inserts values of Sudoku to resolve
 */
const Sudoku = () => {
    const { t } = useTranslation();
    const { register, handleSubmit } = useForm();
    const { sendRequest } = useFetch();
    const paperArray = [];
    let i = 0;

    for (i = 0; i < 9; i += 1) {
        paperArray.push(<Grid key={i} nameGrid={`${i}`} register={register} />);
    }

    const onSubmit = data => {
        let i = 0;
        const valueSudoku = [];

        for (i = 0; i < 9; i++) {
            valueSudoku[i] = new Array(9);
        }

        for (const key in data) {
            const [line, column] = positionSudoku(key);

            valueSudoku[line][column] = parseInt(data[key]);
        }
        console.log(valueSudoku)

        sendRequest(process.env.REACT_APP_API_URL, 'POST', { sudoku: valueSudoku }, { 'Content-Type': 'application/json' })
            .then(response => console.log(response))
            .catch(error => console.log(error));
       
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div  className='sudoku'>
                <div className="sudoku-grid">
                    {paperArray}
                </div>
                <Typography className="sudoku-text" variant="body1" color="primary">
                    {t('gridEnter')}
                </Typography>
                <Resolve />
            </div>
        </form>        
    );
};

export default Sudoku;
