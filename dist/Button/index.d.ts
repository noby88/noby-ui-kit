/// <reference types="react" />
import { IVariant } from '../theme';
interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: IVariant;
    loading?: boolean;
}
declare const Button: ({ variant, children, loading, ...rest }: IProps) => JSX.Element;
export default Button;
