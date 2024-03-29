import React from 'react';

import Button from '../lib/Button';
import Card from '../lib/Card';
import Group from '../lib/Group';
import { Article, UsageCard } from './Layout';

const Groups = () => {
  const groupedButtons = (
    <Group>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Group>
  );

  const groupedCards = (
    <Group direction={'vertical'}>
      <Card size={'md'}>
        <p>Button 1</p>
      </Card>
      <Card size={'md'}>
        <p>Button 2</p>
      </Card>
      <Card size={'md'}>
        <p>Button 3</p>
      </Card>
    </Group>
  );

  const usage = (
    <UsageCard size={'lg'}>
      {
        'import { Group } from "noby-ui-kit"\n...\n<Group>\n\t<Button>Button 1</Button>\n\t<Button>Button 2</Button>\n\t<Button>Button 3</Button>\n</Group>'
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
        <h4>Grouped Buttons</h4>
        {groupedButtons}
        <h4>Grouped Cards</h4>
        {groupedCards}
      </Article>
    </section>
  );
};

export default Groups;
