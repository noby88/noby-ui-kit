import Spinner from '../lib/Spinner';
import { ShowInline, UsageCard, variants } from './Layout';

const Spinners = () => {
  const defaultSpinners = variants.map((variant) => (
    <Spinner variant={variant} key={variant} />
  ));

  const usage = (
    <UsageCard size={'lg'}>
      {
        'import { Spinner } from "noby-ui-kit"\n...\n<Spinner variant={"success"} />'
      }
    </UsageCard>
  );

  return (
    <section>
      <h2>Spinners</h2>
      <article>
        <h3>Usage</h3>
        <pre>{usage}</pre>
        <h3>Examples</h3>
        <ShowInline>{defaultSpinners}</ShowInline>
      </article>
    </section>
  );
};

export default Spinners;
