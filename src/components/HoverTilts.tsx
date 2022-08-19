import React from 'react';

import HoverTilt from '../lib/HoverTilt';
import { Article, UsageCard } from './Layout';

const HoverTilts = () => {
  const usage = (
    <UsageCard size={'lg'}>
      {
        'import { HoverTilt } from "noby-ui-kit"\n...\n<HoverTilt>\n\t...\n</HoverTilt>'
      }
    </UsageCard>
  );

  return (
    <section>
      <h2>Grouping</h2>
      <Article>
        <h3>Usage</h3>
        <pre>{usage}</pre>
        <h3>Examples</h3>
        <h4>The usage Card it self</h4>
        <HoverTilt>
          <pre>{usage}</pre>
        </HoverTilt>
      </Article>
    </section>
  );
};

export default HoverTilts;
