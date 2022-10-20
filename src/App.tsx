import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/theme';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Greetings from './components/Greetings';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header />
        <div style={{ scrollBehavior: 'smooth' }}>
          <Greetings />
          <Projects />
          <Contact />
        </div>
      </div>
    </ThemeProvider>
  );
}
