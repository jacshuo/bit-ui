import React, {FunctionComponent} from 'react';
import Layouts from '../components/layouts';
import Typography from '../components/typography';

const {Container, Row, Col} = Layouts;
const {H1} = Typography;
const Layout: FunctionComponent<any> = (props) => {
  return <>
    <Container fluidXXL>
      <Row>
        <Col>
          <H1>LAYOUT</H1>
        </Col>
      </Row>
    </Container>
  </>;
};

export default Layout;
