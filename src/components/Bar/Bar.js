import styled from 'styled-components';

const Bar = styled.div`
  position: relative;
  min-height: 150px;
  margin-bottom: 150px;
  width: 100%;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.lightText};
`;

Bar.displayName = 'Bar';

export default Bar;
