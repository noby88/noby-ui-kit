import { FC } from 'react';
import { IElevation, IVariant, ISize } from '../theme';
interface IProps {
    elevation?: IElevation;
    interactive?: boolean;
    shadowVariant?: IVariant;
    size?: ISize;
}
declare const Card: FC<IProps>;
export default Card;
