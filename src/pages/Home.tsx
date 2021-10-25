import React from 'react';
import BasicLayout from '../components/layouts/BasicLayout';
import Header from '../components/layouts/Header';
import Main from '../components/layouts/Main';
import Sider from '../components/layouts/Sider';
import Footer from '../components/layouts/Footer';
import Logo from '../components/navigation/Logo';
import logoImg from '../assets/images/icon-logo-main-white.png';
import Container from '../components/layouts/Container';
import Row from '../components/layouts/Row';
import Col from '../components/layouts/Col';
import Input from '../components/inputs/Input';

const Home: React.FunctionComponent<any> = () => {
  return <>
    <BasicLayout>
      <Header>
        <Container fluidXXL>
          <Row cols={12} gutters={5}>
            <Col spanSM={6} spanLG={4} spanXL={3}
              flexJustifyContent="center"
              flexAlignItems="center">
              <Logo media={logoImg} />
            </Col>
            <Col spanSM={3} spanLG={4} spanXL={7}
              flexJustifyContent="flex-start"
              flexAlignItems="center">
              NavBar Component
            </Col>
            <Col spanSM={3} spanLG={4} spanXL={2}
              flexJustifyContent="flex-end"
              flexAlignItems="center">
              LoginInfo Component
            </Col>
          </Row>
        </Container>
      </Header>
      <Sider>Sider</Sider>
      <Main>
        <Container fluid>
          <Row>
            <Col span={3}>
              <Input />
            </Col>
          </Row>
        </Container>
      </Main>
      <Footer>
        FOOTER
      </Footer>
    </BasicLayout>
  </>;
};

export default Home;
