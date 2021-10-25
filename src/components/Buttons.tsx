import Button from '../lib/Button';
import { ShowInline, variants } from './Layout';

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

  return (
    <section>
      <h2>Buttons</h2>
      <article>
        <h3>Default</h3>
        <ShowInline>{defaultButtons}</ShowInline>
      </article>
      <article>
        <h3>Disabled</h3>
        <ShowInline>{disabledButtons}</ShowInline>
      </article>
      <article>
        <h3>Loading</h3>
        <ShowInline>{loadingButtons}</ShowInline>
      </article>
    </section>
  );
};

export default Buttons;
