import React, {FunctionComponent} from 'react';
import Container from '../components/layouts/Container';
import Row from '../components/layouts/Row';
import Col from '../components/layouts/Col';

const ColorPlate: FunctionComponent<any> = (props) => {
  return <>
    <Container>
      <Row>
        <Col>1</Col>
        <Col>1</Col>
        <Col>1</Col>
        <Col>1</Col>
        <Col>1</Col>
        <Col>1</Col>
      </Row>
    </Container>
  </>;
};
export default ColorPlate;
