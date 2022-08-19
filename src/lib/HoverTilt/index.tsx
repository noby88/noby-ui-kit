import { FC, useState } from 'react';
import { Cell, Container, Content } from './styles';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const cellArray = [1, 2, 3, 4, 5];

const HoverTilt: FC<IProps> = ({ children }) => {
  const cells = cellArray.map((row) =>
    cellArray.map((column) => (
      <Cell key={`${row}${column}`} row={row} column={column} />
    ))
  );

  return (
    <Container>
      {cells}
      <Content>{children}</Content>
    </Container>
  );
};

export default HoverTilt;
