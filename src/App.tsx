import ThemeContext from './lib/ThemeContext';
import { theme } from './lib/theme';
import Buttons from './components/Buttons';
import Spinners from './components/Spinners';
import Cards from './components/Cards';

const App = () => (
  <ThemeContext.Provider value={theme}>
    <main>
      <h1>Component showcase</h1>
      <Buttons />
      <Spinners />
      <Cards />
    </main>
  </ThemeContext.Provider>
);

export default App;
