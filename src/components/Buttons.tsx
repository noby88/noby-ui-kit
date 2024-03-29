import React from 'react';

import Button from '../lib/Button';
import { Article, ShowInline, UsageCard, variants } from './Layout';

const Buttons = () => {
  const onPress = (button: string) =>
    console.log(
      `Clicked the %c${button}%c button`,
      'font-weight:bold',
      'font-weight:normal'
    );

  const defaultButtons = variants.map((variant) => (
    <Button
      variant={variant}
      key={variant}
      onClick={() => onPress(`default ${variant}`)}
    >
      {variant}
    </Button>
  ));

  const disabledButtons = variants.map((variant) => (
    <Button
      variant={variant}
      key={variant}
      disabled={true}
      onClick={() => onPress(`disabled ${variant}`)}
    >
      {variant}
    </Button>
  ));

  const loadingButtons = variants.map((variant) => (
    <Button
      variant={variant}
      key={variant}
      loading={true}
      onClick={() => onPress(`disabled ${variant}`)}
    >
      {variant}
    </Button>
  ));

  const usage = (
    <UsageCard size={'lg'}>
      {
        'import { Button } from "noby-ui-kit"\n...\n<Button\n\tvariant={"success"}\n\tonClick={handleOnclick}\n>\n\tText\n</Button>'
      }
    </UsageCard>
  );

  return (
    <section>
      <h2>Buttons</h2>
      <Article>
        <h3>Usage</h3>
        <pre>{usage}</pre>
        <h3>Default</h3>
        <ShowInline>{defaultButtons}</ShowInline>
        <h3>Disabled</h3>
        <ShowInline>{disabledButtons}</ShowInline>
        <h3>Loading</h3>
        <ShowInline>{loadingButtons}</ShowInline>
      </Article>
    </section>
  );
};

export default Buttons;
