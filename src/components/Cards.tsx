import { useState } from 'react';
import Button from '../lib/Button';

import Card from '../lib/Card';
import Slider from '../lib/Slider';
import { IElevation, ISize } from '../lib/theme';
import {
  CenterText,
  variants,
  ShowGrid,
  ShowInline,
  UsageCard,
  Article,
} from './Layout';

const elevations: IElevation[] = [0, 1, 2, 3, 4];
const sizes: ISize[] = ['sm', 'md', 'lg', 'xl', 'xxl', 'full'];

const Cards = () => {
  const [cardElevation, setCardElevation] = useState<number>(elevations[1]);
  const [cardsSize, setCardsSize] = useState<string>(sizes[1]);
  const [isInteractive, setIsInteractive] = useState(true);

  const cards = (
    <ShowGrid>
      {variants.map((shadowVariant) => (
        <Card
          key={shadowVariant}
          elevation={cardElevation as IElevation}
          size={cardsSize as ISize}
          shadowVariant={shadowVariant}
          interactive={isInteractive}
        >
          <CenterText>Card with {shadowVariant} shadow</CenterText>
        </Card>
      ))}
    </ShowGrid>
  );

  const elevationsSelector = (
    <Slider
      values={elevations}
      selected={cardElevation}
      onChange={setCardElevation}
    />
  );

  const sizeSelector = (
    <Slider
      values={sizes}
      selected={cardsSize}
      onChange={setCardsSize}
      labelTransform={(value: string) => value.toUpperCase()}
    />
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
    <UsageCard size={'lg'}>
      {
        'import { Card } from "noby-ui-kit"\n...\n<Card elevation={2}>\n\t<Content />\n</Card>'
      }
    </UsageCard>
  );

  return (
    <section>
      <h2>Cards</h2>
      <Article>
        <h3>Usage</h3>
        <pre>{usage}</pre>
        <h3>Examples</h3>
        <ShowInline min={'15rem'}>
          <h4>Elevation:</h4>
          {elevationsSelector}
        </ShowInline>
        <ShowInline min={'15rem'}>
          <h4>Card size:</h4>
          {sizeSelector}
        </ShowInline>
        <ShowInline min={'15rem'}>
          <h4>Animate on hover:</h4>
          {interactiveToggle}
        </ShowInline>
        <br />
        {cards}
      </Article>
    </section>
  );
};

export default Cards;
