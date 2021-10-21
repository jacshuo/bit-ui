import React from 'react';
import Container from '../components/layouts/Container';
import Row from '../components/layouts/Row';
import Col from '../components/layouts/Col';

const Home: React.FunctionComponent<any> = () => {
  return <>
    <Container fluidXL>
      <Row gutters={5} style={{marginBottom: 10}}>
        <Col span={7}>col-1</Col>
        <Col>col-2</Col>
        <Col>col-3</Col>
        <Col>col-4</Col>
        <Col>col-5</Col>
      </Row>
      <Row cols={18} gutters={5} style={{marginBottom: 10}}>
        <Col span={4}>col-span-4</Col>
        <Col span={6}>col-span-6</Col>
        <Col span={8}>
          <Row gutters={2}>
            <Col>1</Col>
            <Col>1</Col>
            <Col>1</Col>
          </Row>
        </Col>
      </Row>
      <Row cols={12} gutters={5} style={{marginBottom: 10}}>
        <Col span={1}>col-span-1</Col>
        <Col span={2}>col-span-2</Col>
        <Col span={9}>
          <Row gutters={3}>
            <Col>sub-col</Col>
            <Col>sub-col</Col>
            <Col>sub-col</Col>
          </Row>
        </Col>
      </Row>
      <Row style={{marginBottom: 10}}>
        <Col spanSM={24} spanMD={18} spanLG={16} spanXL={14}
          spanXXL={12}>
          响应式
        </Col>
      </Row>
      <div>I am not a row.</div>
    </Container>
  </>;
};

export default Home;
