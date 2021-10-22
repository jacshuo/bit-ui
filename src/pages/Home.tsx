import React from 'react';
import BasicLayout from '../components/layouts/BasicLayout';
import Header from '../components/layouts/Header';
import Main from '../components/layouts/Main';
import Sider from '../components/layouts/Sider';
import Footer from '../components/layouts/Footer';

const Home: React.FunctionComponent<any> = () => {
  return <>
    <BasicLayout>
      <Header>
        HEADER
      </Header>
      <Main>
        MAIN
      </Main>
      <Sider>
        SIDER
      </Sider>
      <Footer>
        FOOTER
      </Footer>
    </BasicLayout>
  </>;
};

export default Home;
