import Card from '../lib/Card';
import Slider from '../lib/Slider';

const Sliders = () => {
  const usage = (
    <Card size={'lg'}>
      {'import Slider from "noby-ui-kit/Slider"\n...\n<Slider />'}
    </Card>
  );

  return (
    <section>
      <h2>Spinners</h2>
      <article>
        <h3>Usage</h3>
        <pre>{usage}</pre>
        <h3>Examples</h3>
        <Slider />
      </article>
    </section>
  );
};

export default Sliders;
