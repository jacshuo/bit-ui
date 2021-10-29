import React, {FunctionComponent} from 'react';
import Container from '../components/layouts/Container';
import Row from '../components/layouts/Row';
import Col from '../components/layouts/Col';

const Layout: FunctionComponent<any> = (props) => {
  return <>
    <Container fluidXXL>
      <Row gutters={[12, 20]}>
        <Col xs={{span: 4}} sm={{span: 6, offset: 12}} md={{span: 8, offset: 8}}
          lg={{span: 12, offset: 6}}
          xl={{span: 16, offset: 4}}
          xxl={{span: 18, offset: 3}}>COL</Col>
        {/* <Col xs={12} sm={8} md={6} lg={4}>COL</Col>*/}
      </Row>
    </Container>
  </>;
};

export default Layout;
