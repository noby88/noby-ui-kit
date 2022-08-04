import React, { useState } from 'react';
import Toggle from '../lib/Toggle';
import { Article, ShowInline, UsageCard, variants } from './Layout';

const Toggles = () => {
  const [isOn, setIsOn] = useState(true);

  const defaultToggles = variants.map((variant) => (
    <Toggle
      value={isOn}
      onValueChange={setIsOn}
      variant={variant}
      label={variant}
      key={variant}
    />
  ));

  const coloredLabelToggles = variants.map((variant) => (
    <Toggle
      value={isOn}
      onValueChange={setIsOn}
      variant={variant}
      labelVariant={variant}
      label={variant}
      key={variant}
    />
  ));

  const disabledToggles = variants.map((variant) => (
    <Toggle
      value={isOn}
      onValueChange={setIsOn}
      variant={variant}
      label={variant}
      disabled={true}
      key={variant}
    />
  ));

  const usage = (
    <UsageCard size={'lg'}>
      {
        'import { Toggle } from "noby-ui-kit"\n...\n<Spinner variant={"success"} />'
      }
    </UsageCard>
  );

  return (
    <section>
      <h2>Toggles</h2>
      <Article>
        <h3>Usage</h3>
        <pre>{usage}</pre>
        <h3>Examples</h3>
        <ShowInline>{defaultToggles}</ShowInline>
        <h3>Colored label</h3>
        <ShowInline>{coloredLabelToggles}</ShowInline>
        <h3>Disabled</h3>
        <ShowInline>{disabledToggles}</ShowInline>
      </Article>
    </section>
  );
};

export default Toggles;
