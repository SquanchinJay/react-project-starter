import React from 'react';
import styled from 'styled-components';

import { multiple, poppins, jet, mayaBlue, gigas, gigasToMayaBlue } from './styled/vars';

const Div = styled.div`
  background: ${gigasToMayaBlue};
  color: #fff;
  padding: 1.6rem 3rem;
  box-shadow: 0 1px 4px ${mayaBlue};

  h1 {
    font-size: 3.5rem;
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