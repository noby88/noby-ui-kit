import { useState } from 'react';
import Button from '../lib/Button';

import Card from '../lib/Card';
import { IElevation, ISize } from '../lib/theme';
import { CenterText, variants, ShowGrid, ShowInline } from './Layout';

const elevations: IElevation[] = [0, 1, 2, 3, 4];
const sizes: ISize[] = ['sm', 'md', 'lg', 'xl', 'xxl', 'full'];

const Cards = () => {
  const [cardElevation, setCardElevation] = useState(elevations[1]);
  const [cardsSize, setCardsSize] = useState(sizes[1]);
  const [isInteractive, setIsInteractive] = useState(true);

  const cards = (
    <ShowGrid>
      {variants.map((shadowVariant) => (
        <Card
          key={shadowVariant}
          elevation={cardElevation}
          size={cardsSize}
          shadowVariant={shadowVariant}
          interactive={isInteractive}
        >
          <CenterText>Card with {shadowVariant} shadow</CenterText>
        </Card>
      ))}
    </ShowGrid>
  );

  const elevationsSelector = (
    <select
      value={cardElevation}
      onChange={(event) =>
        setCardElevation(event.target.value as unknown as IElevation)
      }
    >
      {elevations.map((elevation) => (
        <option key={elevation} value={elevation}>
          Elevation level {elevation}
        </option>
      ))}
    </select>
  );

  const sizeSelector = (
    <select
      value={cardsSize}
      onChange={(event) => setCardsSize(event.target.value as unknown as ISize)}
    >
      {sizes.map((size) => (
        <option key={size} value={size}>
          {size.toUpperCase()} card size
        </option>
      ))}
    </select>
  );

  const interactiveToggle = (
    <Button
      title={'toggle interactive'}
      onClick={() => setIsInteractive(!isInteractive)}
    >
      {isInteractive ? 'Interactive' : 'Not interactive'}
    </Button>
  );

  const usage = (
    <Card size={'lg'}>
      {
        'import Card from "noby-ui-kit/Card"\n...\n<Card elevation={2}>\n\t<Content />\n</Card>'
      }
    </Card>
  );

  return (
    <section>
      <h2>Cards</h2>
      <article>
        <h3>Usage</h3>
        <pre>{usage}</pre>
        <h3>Examples</h3>
        <ShowInline>
          {elevationsSelector}
          {sizeSelector}
          {interactiveToggle}
        </ShowInline>
        <br />
        {cards}
      </article>
    </section>
  );
};

export default Cards;
