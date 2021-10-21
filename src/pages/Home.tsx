import React from 'react';
import Container from '../components/layouts/Container';
import Row from '../components/layouts/Row';
import Col from '../components/layouts/Col';

const Home: React.FunctionComponent<any> = () => {
  return <>
    <Container>
      <Row cols={12} gutters={5}>
      </Row>
      <div>I am not a row.</div>
    </Container>
  </>;
};

export default Home;
