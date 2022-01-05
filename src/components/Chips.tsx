import { useState } from 'react';
import Button from '../lib/Button';
import Card from '../lib/Card';
import Chip from '../lib/Chip';
import { ShowInline, variants } from './Layout';

const Chips = () => {
  const [isActive, setIsActive] = useState(true);
  const [isInteractive, setIsInteractive] = useState(false);

  const defaultChips = variants.map((variant) => (
    <Chip
      variant={variant}
      text={variant}
      interactive={isInteractive}
      active={isActive}
    />
  ));

  const usage = (
    <Card size={'lg'}>
      {'import { Chip } from "noby-ui-kit"\n...\n<Chip text={"Pringles"} />'}
    </Card>
  );

  const interactiveToggle = (
    <Button
      title={'toggle interactive'}
      onClick={() => setIsInteractive(!isInteractive)}
    >
      {isInteractive ? 'Interactive' : 'Not interactive'}
    </Button>
  );

  const activeToggle = (
    <Button title={'toggle active'} onClick={() => setIsActive(!isActive)}>
      {isActive ? 'Active' : 'Inactive'}
    </Button>
  );

  return (
    <section>
      <h2>Chips</h2>
      <article>
        <h3>Usage</h3>
        <pre>{usage}</pre>
        <h3>Examples</h3>
        <ShowInline min={'15rem'}>
          <h4>Interactive:</h4>
          {interactiveToggle}
        </ShowInline>
        <br />
        <ShowInline min={'15rem'}>
          <h4>Active:</h4>
          {activeToggle}
        </ShowInline>
        <br />
        <ShowInline>{defaultChips}</ShowInline>
      </article>
    </section>
  );
};

export default Chips;
