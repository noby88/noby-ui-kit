import React from 'react';

import HoverTilt from '../lib/HoverTilt';
import { Article, UsageCard } from './Layout';

const HoverTilts = () => {
  const usage = (
    <UsageCard size={'lg'}>
      {
        'import { HoverTilt } from "noby-ui-kit"\n\n<HoverTilt>\n\t<YourContent />\n\t<SomeMoreContent />\n</HoverTilt>'
      }
    </UsageCard>
  );

  const repelUsage = (
    <UsageCard size={'lg'}>
      {
        'import { HoverTilt } from "noby-ui-kit"\n\n<HoverTilt pointerEffect={"repel"}>\n\t<YourContent />\n\t<SomeMoreContent />\n</HoverTilt>'
      }
    </UsageCard>
  );

  const forceUsage = (
    <UsageCard size={'lg'}>
      {
        'import { HoverTilt } from "noby-ui-kit"\n\n<HoverTilt force={50}>\n\t<YourContent />\n\t<SomeMoreContent />\n</HoverTilt>'
      }
    </UsageCard>
  );

  return (
    <section>
      <h2>Hover Tilting</h2>
      <Article>
        <h3>Usage</h3>
        <pre>{usage}</pre>
        <h3>Examples</h3>
        <h4>The usage Card it self</h4>
        <HoverTilt>
          <pre>{usage}</pre>
        </HoverTilt>
        <h4>Repel pointer effect</h4>
        <HoverTilt pointerEffect={'repel'}>
          <pre>{repelUsage}</pre>
        </HoverTilt>
        <h4>Custom attraction force</h4>
        <HoverTilt force={50}>
          <pre>{forceUsage}</pre>
        </HoverTilt>
      </Article>
    </section>
  );
};

export default HoverTilts;
