import React from 'react';

import {
    Container,
    Register
  } from '../components';

export default (props) => (
    <Container nav={false}>
        <Register {...props}/>
    </Container>
); 
