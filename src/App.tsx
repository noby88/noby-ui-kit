import styled from 'styled-components';

import ThemeContext from './lib/ThemeContext';
import { theme } from './lib/theme';
import Buttons from './components/Buttons';
import Inputs from './components/Inputs';
import Spinners from './components/Spinners';
import Cards from './components/Cards';
import Page from './lib/Page';
import Groups from './components/Groups';
import Sliders from './components/Sliders';
import Skeletons from './components/Skeletons';
import Chips from './components/Chips';
import Toggles from './components/Toggles';

const Container = styled(Page)`
  background-color: hsl(0 0% 99% / 0.5);
`;

const App = () => (
  <ThemeContext.Provider value={theme}>
    <Container>
      <h1>Component showcase</h1>
      <Buttons />
      <Inputs />
      <Spinners />
      <Toggles />
      <Chips />
      <Sliders />
      <Cards />
      <Groups />
      <Skeletons />
    </Container>
  </ThemeContext.Provider>
);

export default App;
