import styled from 'styled-components';
import { Row } from 'styled-components-reactive-grid';

const FullHeightRow = styled(Row)`
  height: calc(100vh - ${props => props.theme.dimensions.gapPx});
`

export default FullHeightRow;
