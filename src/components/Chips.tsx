import Card from '../lib/Card';
import Chip from '../lib/Chip';
import { ShowInline, variants } from './Layout';

const Chips = () => {
  const defaultChips = variants.map((variant) => (
    <Chip variant={variant} text={variant} />
  ));

  const usage = (
    <Card size={'lg'}>
      {'import { Chip } from "noby-ui-kit"\n...\n<Chip text={"Pringles"} />'}
    </Card>
  );

  return (
    <section>
      <h2>Chips</h2>
      <article>
        <h3>Usage</h3>
        <pre>{usage}</pre>
        <h3>Examples</h3>
        <ShowInline>{defaultChips}</ShowInline>
      </article>
    </section>
  );
};

export default Chips;
