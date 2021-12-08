import Input from '../lib/Input';
import Card from '../lib/Card';

const Inputs = () => {
  const usage = (
    <Card size={'lg'}>
      {'import Input from "noby-ui-kit/Input"\n...\n<Input />'}
    </Card>
  );

  return (
    <section>
      <h2>Buttons</h2>
      <article>
        <h3>Usage</h3>
        <pre>{usage}</pre>
        <h3>Default</h3>
        <Input placeholder={'Placeholder'} />
      </article>
      <article>
        <h3>Disabled</h3>
      </article>
    </section>
  );
};

export default Inputs;
