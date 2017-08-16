import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

const MODIFIER_CONFIG = {
  brand: ({ theme }) => ({
    styles: `
      color: ${theme.colors.primary};
    `,
  }),
};

const Item = styled.div`
  padding: 8px;
  ${applyStyleModifiers(MODIFIER_CONFIG)}
`;

export default Item;
