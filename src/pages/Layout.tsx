import React, {FunctionComponent} from 'react';
import Layouts from '../components/layouts';
import Typography from '../components/typography';

const {Container, Row, Col} = Layouts;
const {H1} = Typography;
const Layout: FunctionComponent<any> = (props) => {
  return <>
    <Container fluidXXL>
      <Row>
        <Col span={3}>
          <H1>LAYOUT</H1>
        </Col>
        <Col span={3}>
          <H1>LAYOUT</H1>
        </Col>
      </Row>
    </Container>
  </>;
};

export default Layout;
