import { useState } from 'react';
import Slider from '../lib/Slider';
import { Article, ShowInline, UsageCard, variants } from './Layout';

const Sliders = () => {
  const [selected, setSelected] = useState(2);

  const usage = (
    <UsageCard size={'lg'}>
      {
        'import { Slider } from "noby-ui-kit"\n...\n<Slider\n\tvalues={[1, 2, 3, 4, 5]}\n\tselected={selected}\n\tonChange={setSelected}\n/>'
      }
    </UsageCard>
  );

  const sliders = variants.map((variant) => (
    <div key={variant}>
      <h5>{variant}</h5>
      <Slider
        variant={variant}
        values={[1, 2, 3, 4, 5]}
        selected={selected}
        onChange={setSelected}
      />
    </div>
  ));

  return (
    <section>
      <h2>Spinners</h2>
      <Article>
        <h3>Usage</h3>
        <pre>{usage}</pre>
        <h3>Examples</h3>
        <h4>Default</h4>
        <ShowInline>{sliders}</ShowInline>
        <h4>With step bullets</h4>
        <Slider
          showStepBullets={true}
          values={[1, 2, 3, 4, 5]}
          selected={selected}
          onChange={setSelected}
        />
        <h4>Without labels</h4>
        <Slider
          showLabels={false}
          values={[1, 2, 3, 4, 5]}
          selected={selected}
          onChange={setSelected}
        />
        <h4>Different color labels</h4>
        <Slider
          labelVariant={'danger'}
          values={[1, 2, 3, 4, 5]}
          selected={selected}
          onChange={setSelected}
        />
        <h4>With transformed labels</h4>
        <Slider
          values={[1, 2, 3, 4, 5]}
          selected={selected}
          onChange={setSelected}
          labelTransform={(value) => `Opt. ${value}`}
        />
      </Article>
    </section>
  );
};

export default Sliders;
