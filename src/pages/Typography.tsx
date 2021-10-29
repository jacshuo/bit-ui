import React from 'react';
import Container from '../components/layouts/Container';
import Row from '../components/layouts/Row';
import Col from '../components/layouts/Col';
import H1 from '../components/typography/H1';
import H2 from '../components/typography/H2';
import H3 from '../components/typography/H3';
import H4 from '../components/typography/H4';
import H5 from '../components/typography/H5';
import H6 from '../components/typography/H6';


const Typography: React.FunctionComponent<any> = (props) => {
  return <>
    <Container fluidXXL>
      <Row cols={18}>
        <Col>
          <H1>Typography</H1>
        </Col>
      </Row>
      <Row cols={18} gutters={10}>
        <Col span={18}>
          标题
        </Col>
        <Col span={18} flex flexJustifyContent="flex-start"
          flexAlignItems="center">
          <H1>H1. The Pragmatic Romanticism</H1>
        </Col>
        <Col span={18} flex flexJustifyContent="flex-start"
          flexAlignItems="center">
          <H2>H2. The Pragmatic Romanticism</H2>
        </Col>
        <Col span={18} flex flexJustifyContent="flex-start"
          flexAlignItems="center">
          <H3>H3. The Pragmatic Romanticism</H3>
        </Col>
        <Col span={18} flex flexJustifyContent="flex-start"
          flexAlignItems="center">
          <H4>H4. The Pragmatic Romanticism</H4>
        </Col>
        <Col span={18} flex flexJustifyContent="flex-start"
          flexAlignItems="center">
          <H5>H5. The Pragmatic Romanticism</H5>
        </Col>
        <Col span={18} flex flexJustifyContent="flex-start"
          flexAlignItems="center">
          <H6>H6. The Pragmatic Romanticism</H6>
        </Col>
      </Row>
    </Container>
  </>;
};

export default Typography;
