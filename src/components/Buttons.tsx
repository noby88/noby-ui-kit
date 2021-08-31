import React from 'react';

import Button from '../lib/Button';
import { IVariant } from '../lib/theme';
import { ShowInline } from './Layout';

const variants: IVariant[] = [
  'primary',
  'secondary',
  'success',
  'warning',
  'danger',
];

const Buttons = () => {
  const defaultButtons = variants.map((variant) => (
    <Button variant={variant} key={variant}>
      {variant}
    </Button>
  ));

  return (
    <section>
      <h2>Buttons</h2>
      <article>
        <h3>Default</h3>
        <ShowInline>{defaultButtons}</ShowInline>
      </article>
    </section>
  );
};

export default Buttons;
