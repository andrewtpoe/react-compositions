import styled from 'styled-components';

import Item from './Item';

const Card = styled.div`
  border: 1px solid #999999;
  border-radius: 2px;
  box-shadow: 0 2px 2px rgba(50, 50, 50, 0.4);
`;

Card.Item = Item;

export default Card;
