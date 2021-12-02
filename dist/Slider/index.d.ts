/// <reference types="react" />
import { IVariant } from '../theme';
declare type IElement = string | number;
interface IProps {
    variant?: IVariant;
    values: IElement[];
    selected: IElement;
    onChange: ((value: string) => void) | ((value: number) => void);
    showStepBullets?: boolean;
    showLabels?: boolean;
    labelVariant?: IVariant;
    labelTransform?: ((value: string) => any) | ((value: number) => any);
}
declare const Slider: (props: IProps) => JSX.Element;
export default Slider;
