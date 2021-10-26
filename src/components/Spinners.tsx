import Spinner from '../lib/Spinner';
import { ShowInline, variants } from './Layout';

const Spinners = () => {
  const defaultSpinners = variants.map((variant) => (
    <Spinner variant={variant} key={variant} />
  ));

  return (
    <section>
      <h2>Spinners</h2>
      <article>
        <h3>Default</h3>
        <ShowInline>{defaultSpinners}</ShowInline>
      </article>
    </section>
  );
};

export default Spinners;
