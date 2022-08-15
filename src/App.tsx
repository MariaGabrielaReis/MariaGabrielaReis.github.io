import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/theme';

import GlobalStyle from './styles/global';
import Header from './components/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
