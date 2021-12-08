import { useState } from 'react';
import Input from '../lib/Input';
import Card from '../lib/Card';

const Inputs = () => {
  const [value, setValue] = useState('');

  const usage = (
    <Card size={'lg'}>
      {
        'import Input from "noby-ui-kit/Input"\n...\n<Input variant={\'success\'} onChange={event => setValue(event.target.value)} />'
      }
    </Card>
  );

  return (
    <section>
      <h2>Buttons</h2>
      <article>
        <h3>Usage</h3>
        <pre>{usage}</pre>
        <h3>Default</h3>
        <Input
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </article>
      <article>
        <h3>Disabled</h3>
        <Input value={value} disabled={true} />
      </article>
    </section>
  );
};

export default Inputs;
