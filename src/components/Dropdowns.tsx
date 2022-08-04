import React, { useState } from 'react';
import styled from 'styled-components';
import Dropdown from '../lib/Dropdown';
import Spinner from '../lib/Spinner';
import { IVariant } from '../lib/theme';
import { Article, ShowInline, UsageCard, variants } from './Layout';

const CustomItems = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: flex-start;
  gap: 1rem;
`;

const CustomOption = ({ variant }: { variant: IVariant }) => (
  <CustomItems>
    <Spinner size={10} variant={variant} />
    <strong>{variant.toUpperCase()}</strong> Spinner
  </CustomItems>
);

const Dropdowns = () => {
  const [value, setValue] = useState<string | number>('');

  const placeholderText = 'Select an options';

  const options = [
    { value: 1, content: 'First' },
    { value: 2, content: 'Second' },
    { value: 3, content: 'Third' },
  ];

  const customOptions = [
    { value: 1, content: <CustomOption variant={'primary'} /> },
    { value: 2, content: <CustomOption variant={'secondary'} /> },
    { value: 3, content: <CustomOption variant={'danger'} /> },
  ];

  const colorDropdowns = variants.map((variant) => (
    <Dropdown
      key={variant}
      variant={variant}
      placeholder={placeholderText}
      placeholderVariant={variant}
      options={options}
      selectedValue={value}
      onSelect={setValue}
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

  const customItemsUsage = (
    <UsageCard size={'lg'}>
      {
        "<Dropdown\n\t...\n\toptions={[\n\t\t{ value: 1, content: <CustomOption variant={'primary'} /> },\n\t\t{ value: 2, content: <CustomOption variant={'secondary'} /> },\n\t\t{ value: 3, content: <CustomOption variant={'danger'} /> },\n\t]}\n/>"
      }
    </UsageCard>
  );

  return (
    <section>
      <h2>Dropdowns</h2>
      <Article>
        <h3>Usage</h3>
        <pre>{usage}</pre>
        <h3>Default</h3>
        <Dropdown
          placeholder={placeholderText}
          options={options}
          selectedValue={value}
          onSelect={setValue}
        />
        <h3>Disabled</h3>
        <Dropdown
          placeholder={placeholderText}
          options={options}
          selectedValue={value}
          onSelect={setValue}
          disabled={true}
        />
        <h3>Custom chevron</h3>
        <pre>{customChevronUsage}</pre>
        <Dropdown
          placeholder={placeholderText}
          chevron={<div>◒</div>}
          options={options}
          selectedValue={value}
          onSelect={setValue}
        />
        <h3>Colors</h3>
        <ShowInline>{colorDropdowns}</ShowInline>
        <h3>Custom options</h3>
        <pre>{customItemsUsage}</pre>
        <Dropdown
          placeholder={placeholderText}
          options={customOptions}
          selectedValue={value}
          onSelect={setValue}
        />
      </Article>
    </section>
  );
};

export default Dropdowns;
