import Skeleton from '../lib/Skeleton';
import { Article, ShowInline, UsageCard, variants } from './Layout';

const Skeletons = () => {
  const blockSpinners = variants.map((variant) => (
    <Skeleton key={variant} variant={variant} />
  ));

  const usage = (
    <UsageCard size={'lg'}>
      {
        'import { Skeleton } from "noby-ui-kit"\n...\n<Skeleton variant={"success"} />'
      }
    </UsageCard>
  );

  return (
    <section>
      <h2>Skeletons</h2>
      <Article>
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
        <UsageCard size={'lg'}>
          {
            '<Skeleton\n\ttype={"paragraph"}\n\theight={"1rem"}\n\tlines={3}\n/>'
          }
        </UsageCard>
        <br />
        <Skeleton type={'paragraph'} height={'1rem'} lines={3} />
      </Article>
    </section>
  );
};

export default Skeletons;
