import styled, { keyframes } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

const scrollHeightAnimation = keyframes`
  from {
    height: 0%;
    opacity: 0;
  },
  to {
    max-height: 583px;
    opacity: 1;
  }
`;

const Scroll = styled(PerfectScrollbar)`
  max-height: 583px;
  padding-right: 40px;
  width: 100%;

  display: flex;
  align-items: flex-start;

  .ps__rail-y {
    margin: 32px 0px;
    opacity: 1 !important;
    width: 4px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    animation: ${scrollHeightAnimation} 1s;
    animation-delay: 2s;

    &:hover {
      opacity: 1;
      background: inherit;

      > .ps__thumb-y {
        width: 4px;
      }
    }

    .ps__thumb-y {
      background: #33ff7a;
      width: 4px;
      height: 60px;
      right: 0px;

      &:hover {
        width: 4px;
      }
    }
  }
`;

export default Scroll;