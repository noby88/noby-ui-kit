import { StyledButton } from './styles';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = (props: IProps) => {
  return <StyledButton {...props} />;
};

export default Button;
