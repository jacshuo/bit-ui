import React, {useState} from 'react';
import Container from '../components/layouts/Container';
import Row from '../components/layouts/Row';
import Col from '../components/layouts/Col';
import Input from '../components/inputs/Input';
import {IoAtOutline, IoCalendarNumber, IoSearch} from 'react-icons/io5';
import H1 from '../components/typography/H1';

const Inputs: React.FunctionComponent<any> = () => {
  const [inputContent, setInputContent] = useState('');
  return <>
    <Container fluidXXL>
      <Row>
        <Col span={3} gutter={5}>
          <H1>
            INPUTS
          </H1>
        </Col>
      </Row>
      <Row gutters={5}>
        <Col span={2} flex flexAlignItems="center"
          flexJustifyContent={'center'}>
          尺寸:
        </Col>
        <Col span={3}>
          <Input size="small" />
        </Col>
        <Col span={3}>
          <Input />
        </Col>
        <Col span={3}>
          <Input size="large" />
        </Col>
      </Row>
      <Row gutters={5}>
        <Col span={2} flex flexAlignItems="center"
          flexJustifyContent={'center'}>
          视觉:
        </Col>
        <Col span={3}>
          <Input success />
        </Col>
        <Col span={3}>
          <Input warn />
        </Col>
        <Col span={3}>
          <Input danger />
        </Col>
      </Row>
      <Row gutters={5}>
        <Col span={2} flex flexAlignItems="center"
          flexJustifyContent={'center'}>
          形状:
        </Col>
        <Col span={6}>
          <Input rounded />
        </Col>
        <Col span={6}>
          <Input />
        </Col>
      </Row>
      <Row gutters={5}>
        <Col span={2} flex flexAlignItems="center"
          flexJustifyContent={'center'}>
          前后缀:
        </Col>
        <Col span={6}>
          <Input prefix={'@'} />
        </Col>
        <Col span={6}>
          <Input suffix={() => (
            <IoSearch size={20} />
          )} />
        </Col>
        <Col span={6}>
          <Input prefix={() => (
            <IoAtOutline size={24} />
          )}
          suffix={() => (<IoSearch size={24} />)} />
        </Col>
      </Row>
      <Row gutters={5}>
        <Col span={2} flex flexAlignItems="center"
          flexJustifyContent={'center'}>
          可清空:
        </Col>
        <Col span={6}>
          <Input prefix={() => (
            <IoAtOutline size={20} />
          )} suffix={() => (<IoCalendarNumber size={20} />)} clearable />
        </Col>
        <Col span={6}>
          <Input clearable />
        </Col>
      </Row>
      <Row gutters={5}>
        <Col span={2} flex flexAlignItems="center"
          flexJustifyContent={'center'}>
          禁用/只读:
        </Col>
        <Col span={6}>
          <Input disabled value="我是禁用的" prefix={() => (
            <IoAtOutline size={20} />
          )} suffix={() => (<IoCalendarNumber size={20} />)} clearable />
        </Col>
        <Col span={6}>
          <Input value={'我是只读的'} readOnly clearable />
        </Col>
      </Row>
      <Row gutters={5}>
        <Col span={2} flex flexAlignItems="center"
          flexJustifyContent={'center'}>
          受控:
        </Col>
        <Col span={6}>
          <Input value="我是受控组件" prefix={() => (
            <IoAtOutline size={20} />
          )} suffix={() => (<IoCalendarNumber size={20} />)} clearable />
        </Col>
        <Col span={2} flex flexAlignItems="center"
          flexJustifyContent={'center'}>
          非受控:
        </Col>
        <Col span={6}>
          <Input prefix={() => (
            <IoAtOutline size={20} />
          )} suffix={() => (<IoCalendarNumber size={20} />)} clearable
          onChange={(e) => {
            setInputContent(e.target.value);
          }} onClear={() => {
            setInputContent('');
            console.log('value cleared');
          }} onFocus={(e) => {
            console.log('focused', e);
          }} onInput={(e) => {
            console.log('input', e);
          }} onBlur={(e) => {
            console.log('blur', e);
          }} />
        </Col>
        <Col span={6} flex flexAlignItems={'center'}
          flexJustifyContent={'flex-start'}>
          已输入：{inputContent}
        </Col>
      </Row>
    </Container>
  </>;
};

export default Inputs;
