import {ThemeProvider} from "styled-components";
import {Reset} from 'styled-reset'
import theme from "./styles/theme";
import GlobalStyle from './styles/global';

import Home from "./pages/Home";
import './App.css';

function App() {
    return (
        <div className="App">
            <GlobalStyle/>
            <ThemeProvider theme={theme}>
                <Reset/>
                <Home></Home>
            </ThemeProvider>
        </div>
    );
}

export default App;
