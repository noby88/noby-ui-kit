import { useState } from 'react';
import Input from '../lib/Input';
import { Article, ShowInline, UsageCard, variants } from './Layout';

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
    <UsageCard size={'lg'}>
      {
        'import { Input } from "noby-ui-kit"\n...\n<Input\n\tvariant={\'success\'}\n\tonChange={\n\t\t(event) => setValue(event.target.value)\n\t}\n/>'
      }
    </UsageCard>
  );

  return (
    <section>
      <h2>Inputs</h2>
      <Article>
        <h3>Usage</h3>
        <pre>{usage}</pre>
        <h3>Default</h3>
        <Input
          label={'Default'}
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <h3>Disabled</h3>
        <Input label={'Disabled'} value={value} disabled={true} />
        <h3>Full colored</h3>
        <ShowInline min={'15rem'}>{colorInputs}</ShowInline>
      </Article>
    </section>
  );
};

export default Inputs;
