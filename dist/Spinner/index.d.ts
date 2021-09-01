/// <reference types="react" />
import { IVariant } from '../theme';
interface IProps {
    variant?: IVariant;
    size?: number;
}
declare const Spinner: ({ variant, size }: IProps) => JSX.Element;
export default Spinner;
