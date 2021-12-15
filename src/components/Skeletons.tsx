import Card from '../lib/Card';
import Skeleton from '../lib/Skeleton';
import { ShowInline, variants } from './Layout';

const Skeletons = () => {
  const blockSpinners = variants.map((variant) => <Skeleton key={variant} />);

  const usage = (
    <Card size={'lg'}>
      {
        'import Skeleton from "noby-ui-kit/Skeleton"\n...\n<Skeleton variant={"success"} />'
      }
    </Card>
  );

  return (
    <section>
      <h2>Skeletons</h2>
      <article>
        <h3>Usage</h3>
        <pre>{usage}</pre>
        <h3>Examples</h3>
        <ShowInline>{blockSpinners}</ShowInline>
      </article>
    </section>
  );
};

export default Skeletons;
