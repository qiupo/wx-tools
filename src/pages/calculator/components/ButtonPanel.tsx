import { Col, Row } from '@nutui/nutui-react-taro';
import { Button, View } from '@tarojs/components';
import { useState } from 'react';
import { FaceSmile } from '@nutui/icons-react-taro';
const ButtonPanel = ({ onClick, className }) => {
  const [buttonValue, setButtonValue] = useState('c');

  const handleClick = (value) => {
    setButtonValue(value);
    onClick(value);
  };

  return (
    <View className={`${className} button-panel`}>
      <View>
        <Row>
          <Col span="6">
            <Button className='btn' onClick={() => handleClick('c')} >C</Button>
          </Col>
          <Col span="6">
            <Button className='btn'><FaceSmile /></Button>
          </Col>
          <Col span="6">
            <Button className='btn' onClick={() => handleClick('back')}>←</Button>
          </Col>
          <Col span="6">
            <Button className='btn' onClick={() => handleClick('+')}>+</Button>
          </Col>
        </Row>
        <Row>
          <Col span="6" >
            <Button className='btn' onClick={() => handleClick('7')} >7</Button>
          </Col>
          <Col span="6">
            <Button className='btn' onClick={() => handleClick('8')} >8</Button>
          </Col>
          <Col span="6">
            <Button className='btn' onClick={() => handleClick('9')}>9</Button>
          </Col>
          <Col span="6">
            <Button className='btn' onClick={() => handleClick('--')}>-</Button>
          </Col>
        </Row>
        <Row>
          <Col span="6">
            <Button className='btn' onClick={() => handleClick('4')} >4</Button>
          </Col>
          <Col span="6">
            <Button className='btn' onClick={() => handleClick('5')} >5</Button>
          </Col>
          <Col span="6">
            <Button className='btn' onClick={() => handleClick('6')}>6</Button>
          </Col>
          <Col span="6">
            <Button className='btn' onClick={() => handleClick('*')}>*</Button>
          </Col>
        </Row>
        <Row>
          <Col span="6">
            <Button className='btn' onClick={() => handleClick('1')} >1</Button>
          </Col>
          <Col span="6">
            <Button className='btn' onClick={() => handleClick('2')} >2</Button>
          </Col>
          <Col span="6">
            <Button className='btn' onClick={() => handleClick('3')}>3</Button>
          </Col>
          <Col span="6">
            <Button className='btn' onClick={() => handleClick('/')}>÷</Button>
          </Col>
        </Row>
        <Row>
          <Col span="6">
            <Button className='btn' ><FaceSmile></FaceSmile></Button>
          </Col>
          <Col span="6">
            <Button className='btn' onClick={() => handleClick('0')} >0</Button>
          </Col>
          <Col span="6">
            <Button className='btn' onClick={() => handleClick('.')}>.</Button>
          </Col>
          <Col span="6">
            <Button className='btn' onClick={() => handleClick('=')}>=</Button>
          </Col>
        </Row>
      </View>

    </View>
  );
};

export default ButtonPanel;