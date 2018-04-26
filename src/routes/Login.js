import React from 'react';

import {
    Container,
    Login
  } from '../components';

export default (props) => (
    <Container nav={false}>
        <Login {...props}/>
    </Container>
);
