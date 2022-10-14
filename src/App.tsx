import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/theme';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Greetings from './components/Greetings';
import Projects from './components/Projects';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header />
        <Greetings />
        <Projects />
      </div>
    </ThemeProvider>
  );
}
