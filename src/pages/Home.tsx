import React from 'react';
import Container from '../components/layouts/Container';
import Row from '../components/layouts/Row';
import Col from '../components/layouts/Col';

const Home: React.FunctionComponent<any> = () => {
  return <>
    <Container fluidXL>
      <Row cols={18}>
        <Col>col-span-2</Col>
        <Col>col-span-2</Col>
        <Col>col-span-2</Col>
        <Col>col-span-2</Col>
        <Col>col-span-2</Col>
      </Row>
      <div>I am not a row.</div>
    </Container>
  </>;
};

export default Home;
