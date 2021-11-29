import Card from '../lib/Card';
import Slider from '../lib/Slider';
import { variants } from './Layout';

const Sliders = () => {
  const usage = (
    <Card size={'lg'}>
      {'import Slider from "noby-ui-kit/Slider"\n...\n<Slider />'}
    </Card>
  );

  const sliders = variants.map((variant) => (
    <>
      <h4>{variant}</h4>
      <Slider variant={variant} />
    </>
  ));

  return (
    <section>
      <h2>Spinners</h2>
      <article>
        <h3>Usage</h3>
        <pre>{usage}</pre>
        <h3>Examples</h3>
        {sliders}
      </article>
    </section>
  );
};

export default Sliders;
