import { useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import myTheme from './utils/material-Theme';
import { useFetch } from './hooks/useFetch';

import Title from './components/Title';
import Footer from './components/Footer';
import Sudoku from './components/Sudoku';

import './styles/app.css';


const App = () => {
  const { sendRequest } = useFetch();

  useEffect(() => {
    sendRequest(`${process.env.REACT_APP_BACKEND_URL}/api`)
      .then(response => console.log(response))
      .catch(error => console.log(error));

  }, [sendRequest]);

  return (
    <MuiThemeProvider theme={myTheme}>
        <Title />
        <Sudoku />
        <Footer />
        {/* <p>backend url = {process.env.REACT_APP_BACKEND_URL}</p> */}
    </MuiThemeProvider>
  );
}

export default App;
