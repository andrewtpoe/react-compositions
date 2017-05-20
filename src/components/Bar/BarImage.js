import styled from 'styled-components';

const BarImage = styled.div`
  position: absolute;
  transform: translate(-50%, 50%);
  bottom: 0;
  left: 50%;
  img {
    position: relative;
    max-height: 200px;
    max-width: 200px;
  }
`;

export default BarImage;
