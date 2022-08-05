import React, { useState } from 'react';
import Chip from '../lib/Chip';
import Toggle from '../lib/Toggle';
import { Article, ShowInline, UsageCard, variants } from './Layout';

const Chips = () => {
  const [isActive, setIsActive] = useState(true);
  const [isInteractive, setIsInteractive] = useState(true);

  const defaultChips = variants.map((variant) => (
    <Chip
      key={variant}
      variant={variant}
      text={variant}
      interactive={isInteractive}
      active={isActive}
      onClick={() => console.log(`Clicked a ${variant} chip`)}
    />
  ));

  const preChips = variants.map((variant) => (
    <Chip
      key={variant}
      variant={variant}
      text={variant}
      interactive={isInteractive}
      active={isActive}
      preComponent={<span>&#10084;</span>}
      onClick={() =>
        console.log(`Clicked a ${variant} chip with an icon at the start`)
      }
    />
  ));

  const postChips = variants.map((variant) => (
    <Chip
      key={variant}
      variant={variant}
      text={variant}
      interactive={isInteractive}
      active={isActive}
      postComponent={<span>&#10006;</span>}
      onClick={() =>
        console.log(`Clicked a ${variant} chip with icon on the end`)
      }
    />
  ));

  const usage = (
    <UsageCard size={'lg'}>
      {'import { Chip } from "noby-ui-kit"\n...\n<Chip text={"Pringles"} />'}
    </UsageCard>
  );

  return (
    <section>
      <h2>Chips</h2>
      <Article>
        <h3>Usage</h3>
        <pre>{usage}</pre>
        <h3>Examples</h3>
        <ShowInline>
          <Toggle
            label={'Interactive'}
            value={isInteractive}
            onValueChange={setIsInteractive}
          />
          <Toggle
            label={'Active'}
            value={isActive}
            onValueChange={setIsActive}
          />
        </ShowInline>
        <br />
        <ShowInline>{defaultChips}</ShowInline>
        <h4>With pre component:</h4>
        <ShowInline>{preChips}</ShowInline>
        <h4>With post component:</h4>
        <ShowInline>{postChips}</ShowInline>
      </Article>
    </section>
  );
};

export default Chips;
