import ThemeContext from './lib/ThemeContext';
import { theme } from './lib/theme';
import Buttons from './components/Buttons';
import Spinners from './components/Spinners';
import Cards from './components/Cards';
import Page from './lib/Page';

const App = () => (
  <ThemeContext.Provider value={theme}>
    <Page>
      <h1>Component showcase</h1>
      <Buttons />
      <Spinners />
      <Cards />
    </Page>
  </ThemeContext.Provider>
);

export default App;
