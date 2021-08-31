/// <reference types="react" />
import { IVariant } from '../theme';
interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: IVariant;
}
declare const Button: ({ variant, ...rest }: IProps) => JSX.Element;
export default Button;
