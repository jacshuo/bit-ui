import React from 'react';
import './App.scss';
import Header from './components/layouts/Header';
import Container from './components/layouts/Container';
import Row from './components/layouts/Row';
import Col from './components/layouts/Col';
import Logo from './components/navigation/Logo';
import logoImg from './assets/images/icon-logo-main-white.png';
import Main from './components/layouts/Main';
import BasicLayout from './components/layouts/BasicLayout';

/**
 *
 * @return {JSX.Element}
 * @constructor
 */
function App() {
  return (
    <div className="App">
      <BasicLayout>
        <Header>
          <Container fluidXXL>
            <Row cols={12} gutters={5}>
              <Col spanSM={6} spanLG={4} spanXL={3}
                flexJustifyContent="flex-start"
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
        <Main />
      </BasicLayout>
    </div>
  );
}

export default App;
