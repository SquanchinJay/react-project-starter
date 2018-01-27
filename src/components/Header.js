import React from 'react';
import styled from 'styled-components';

import { multiple, poppins, smokyBlackToGigas, smokyBlack, mayaBlue, gigas } from './styled/vars';

const Div = styled.div`
  background: ${smokyBlackToGigas};
  color: #fff;
  border-bottom: 3px solid ${gigas};
  padding: 2rem;
  box-shadow: 0 1px 4px ${mayaBlue};

  h1 {
    font-size: 4rem;
    font-family: ${poppins};
    text-shadow: ${multiple};
  }
`;

const Header = (props) => (
  <Div>
    <h1>React Project Starter</h1>
  </Div>
);

export default Header;