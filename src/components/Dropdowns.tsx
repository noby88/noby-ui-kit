import { useState } from 'react';
import Dropdown from '../lib/Dropdown';
import { Article, ShowInline, UsageCard, variants } from './Layout';

const Dropdowns = () => {
  const [value, setValue] = useState('');

  const placeholderText = 'Select an options';

  const colorDropdowns = variants.map((variant) => (
    <Dropdown
      variant={variant}
      placeholder={placeholderText}
      placeholderVariant={variant}
    />
  ));

  const usage = (
    <UsageCard size={'lg'}>
      {
        'import { Dropdown } from "noby-ui-kit"\n...\n<Dropdown\n\tvariant={\'success\'}\n\toptions={}\n\tonChange={\n\t\t(item) => setValue(item.value)\n\t}\n/>'
      }
    </UsageCard>
  );

  const customChevronUsage = (
    <UsageCard size={'lg'}>
      {'<Dropdown\n\t...\n\tchevron={<div>◒</div>}\n/>'}
    </UsageCard>
  );

  return (
    <section>
      <h2>Dropdowns</h2>
      <Article>
        <h3>Usage</h3>
        <pre>{usage}</pre>
        <h3>Default</h3>
        <Dropdown placeholder={placeholderText} />
        <h3>Custom chevron</h3>
        <pre>{customChevronUsage}</pre>
        <Dropdown placeholder={placeholderText} chevron={<div>◒</div>} />
        <h3>Colors</h3>
        <ShowInline>{colorDropdowns}</ShowInline>
      </Article>
    </section>
  );
};

export default Dropdowns;
