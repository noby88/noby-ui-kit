import Card from '../lib/Card';
import { ShowInline, variants } from './Layout';

const Chips = () => {
  const defaultSpinners = variants.map((variant) => <></>);

  const usage = (
    <Card size={'lg'}>
      {
        'import { Spinner } from "noby-ui-kit"\n...\n<Spinner variant={"success"} />'
      }
    </Card>
  );

  return (
    <section>
      <h2>Chips</h2>
      <article>
        <h3>Usage</h3>
        <pre>{usage}</pre>
        <h3>Examples</h3>
        <ShowInline>{defaultSpinners}</ShowInline>
      </article>
    </section>
  );
};

export default Chips;
