import Card from '../lib/Card';
import { IElevation, ISize } from '../lib/theme';
import { CenterText, variants, ShowInline } from './Layout';

const Cards = () => {
  const elevations: IElevation[] = [1, 2, 3, 4];
  const sizes: ISize[] = ['sm', 'md', 'lg', 'xl', 'xxl'];

  const elevatedCards = elevations.map((elevation) => (
    <>
      <h3>Shadow colors with elevation {elevation}</h3>
      <ShowInline>
        {variants.map((shadowVariant) => (
          <Card elevation={elevation} shadowVariant={shadowVariant}>
            <CenterText>
              Card default with shadowVariant {shadowVariant}
            </CenterText>
          </Card>
        ))}
      </ShowInline>
    </>
  ));

  const elevatedInteractiveCards = elevations.map((elevation) => (
    <>
      <h3>Interactive with elevation {elevation}</h3>
      <ShowInline>
        {variants.map((shadowVariant) => (
          <Card
            elevation={elevation}
            interactive={true}
            shadowVariant={shadowVariant}
          >
            <CenterText>
              Card interactive with shadowVariant {shadowVariant}
            </CenterText>
          </Card>
        ))}
      </ShowInline>
    </>
  ));

  const sizedCards = sizes.map((size) => (
    <article>
      <h3>Card with size {size}</h3>
      <Card size={size}>
        <CenterText>{size}</CenterText>
      </Card>
    </article>
  ));

  return (
    <section>
      <h2>Cards</h2>
      <article>
        <h3>Default</h3>
        <Card>
          <CenterText>Card default</CenterText>
        </Card>
      </article>
      {sizedCards}
      <article>{elevatedCards}</article>
      <article>{elevatedInteractiveCards}</article>
    </section>
  );
};

export default Cards;
