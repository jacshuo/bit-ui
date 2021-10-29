import React, {useState} from 'react';
import Layouts from '../components/layouts';
import Typography from '../components/typography';

const {Container, Row, Col} = Layouts;
const {H1} = Typography;
const InputsPage: React.FunctionComponent<any> = () => {
  const [inputContent, setInputContent] = useState('');
  return <>
    <Container fluidXXL>
      <Row>
        <Col>
          <H1>INPUT</H1>
        </Col>
      </Row>
    </Container>
  </>;
};

export default InputsPage;
