import Card from '../lib/Card';
import Skeleton from '../lib/Skeleton';
import { ShowInline, variants } from './Layout';

const Skeletons = () => {
  const blockSpinners = variants.map((variant) => (
    <Skeleton key={variant} variant={variant} />
  ));

  const usage = (
    <Card>
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
        <h4>Default</h4>
        <Skeleton />
        <h4>Variants</h4>
        <ShowInline>{blockSpinners}</ShowInline>
        <h4>Circle</h4>
        <Skeleton type={'circle'} height={'7rem'} />
        <h4>Block</h4>
        <Skeleton type={'block'} height={'5rem'} />
        <h4>Paragraph</h4>
        <Card>
          {
            '<Skeleton\n\ttype={"paragraph"}\n\theight={"1rem"}\n\tlines={3}\n/>'
          }
        </Card>
        <br />
        <Skeleton type={'paragraph'} height={'1rem'} lines={3} />
      </article>
    </section>
  );
};

export default Skeletons;
