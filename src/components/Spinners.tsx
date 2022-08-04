import React from 'react';

import Spinner from '../lib/Spinner';
import { Article, ShowInline, UsageCard, variants } from './Layout';

const Spinners = () => {
  const defaultSpinners = variants.map((variant) => (
    <Spinner variant={variant} key={variant} />
  ));

  const usage = (
    <UsageCard size={'lg'}>
      {
        'import { Spinner } from "noby-ui-kit"\n...\n<Spinner variant={"success"} />'
      }
    </UsageCard>
  );

  return (
    <section>
      <h2>Spinners</h2>
      <Article>
        <h3>Usage</h3>
        <pre>{usage}</pre>
        <h3>Examples</h3>
        <ShowInline>{defaultSpinners}</ShowInline>
      </Article>
    </section>
  );
};

export default Spinners;
