import styled from 'styled-components';

const PageContent = styled.div`
  margin: 0 auto;
  max-width: 600px;
  padding: ${props => props.theme.dimensions.baseSize}px;
`;

export default PageContent;
