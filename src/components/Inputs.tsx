import { useState } from 'react';
import Input from '../lib/Input';
import Card from '../lib/Card';
import { ShowInline, variants } from './Layout';

const Inputs = () => {
  const [value, setValue] = useState('');

  const colorInputs = variants.map((variant) => (
    <Input
      key={variant}
      label={variant}
      labelVariant={variant}
      value={value}
      textVariant={variant}
      onChange={(event) => setValue(event.target.value)}
      variant={variant}
      placeholder={'Placeholder'}
      placeholderVariant={variant}
    />
  ));

  const usage = (
    <Card size={'lg'}>
      {
        'import Input from "noby-ui-kit/Input"\n...\n<Input variant={\'success\'} onChange={(event) => setValue(event.target.value)} />'
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
          label={'Default'}
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <h3>Full colored</h3>
        <ShowInline min={'15rem'}>{colorInputs}</ShowInline>
        <h3>Disabled</h3>
        <Input label={'Disabled'} value={value} disabled={true} />
      </article>
    </section>
  );
};

export default Inputs;
