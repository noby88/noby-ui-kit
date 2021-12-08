import ThemeContext from './lib/ThemeContext';
import { theme } from './lib/theme';
import Buttons from './components/Buttons';
import Inputs from './components/Inputs';
import Spinners from './components/Spinners';
import Cards from './components/Cards';
import Page from './lib/Page';
import Groups from './components/Groups';
import Sliders from './components/Sliders';

const App = () => (
  <ThemeContext.Provider value={theme}>
    <Page>
      <h1>Component showcase</h1>
      <Buttons />
      <Inputs />
      <Spinners />
      <Sliders />
      <Cards />
      <Groups />
    </Page>
  </ThemeContext.Provider>
);

export default App;
