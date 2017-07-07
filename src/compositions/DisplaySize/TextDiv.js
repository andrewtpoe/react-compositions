import styled from 'styled-components';

const TextDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  color: ${props => props.theme.colors.secondaryLight};
  font-size: ${props => props.theme.dimensions.xlFont}px;
  font-weight: 600;
`;

export default TextDiv;
