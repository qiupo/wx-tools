import React from 'react';
import ResultPanel from './ResultPanel';
import ButtonPanel from './ButtonPanel';
import { View } from '@tarojs/components';
import { separate } from '../utils/separate';
import BigNumber from "bignumber.js";
import Taro from '@tarojs/taro';

const Calculator = () => {
  const [last, setLast] = React.useState('');
  const [cur, setCur] = React.useState('0');

  const onButtonClick = (type: React.SetStateAction<string>) => {
    let lastLetter: string;

    switch (type) {
      case 'c':
        setLast('');
        setCur('0');
        break;
      case 'back':
        setCur(cur === '0' ? cur : cur.slice(0, -1) || '0');
        break;
      case '=':
        let { res, type: symbol } = separate(cur);
        let numb = new BigNumber(res[0]);
        let numa = new BigNumber(res[1]);
        if (symbol === '+') {
          setCur(numb.plus(numa) + '');
          setLast(cur + '=');
        } else if (symbol === '--') {
          if (numb.comparedTo(numa) === -1) {
            setCur('-' + numa.minus(numb).toString());
          } else {
            setCur(numb.minus(numa).toString());
          }
          setLast(cur + '=');
        } else if (symbol === '*') {
          let res = numb.times(numa);
          if (!res.isFinite()) {
            Taro.showToast({
              icon: 'error',
              title: '无穷'
            })
            setCur('0')
            setLast('')
          } else if (res.isNaN()) {
            Taro.showToast({
              icon: 'error',
              title: '计算错误'
            })
            setCur('0')
            setLast('')
          } else {
            setCur(res.toString());
            setLast(cur + '=');
          }
        } else if (symbol === '/') {
          let res = numb.div(numa);
          if (!res.isFinite()) {
            Taro.showToast({
              title: '无穷',
              icon: 'error'
            });
            setCur('0');
            setLast('');
          } else if (res.isNaN()) {
            Taro.showToast({
              icon: 'error',
              title: '计算错误'
            });
            setCur('0');
            setLast('');
          } else {
            setCur(res.toString());
            setLast(cur + '=');
          }
        } else {
          setCur(cur);
          setLast(cur)
        }
        break;
      case '+':
      case '--':
      case '*':
      case '/':
        lastLetter = cur.slice(-1);
        if (lastLetter === '+' || lastLetter === '--' || lastLetter === '*' || lastLetter === '/') {
          setCur(cur.slice(0, -1) + type);
        } else {
          setCur(cur + type);
        }
        break;
      case '.':
        lastLetter = cur.slice(-1);
        if (lastLetter !== '.') {
          setCur(cur + type);
        }
        break;
      default:
        setCur(cur === '0' ? type : cur + type);
        break;
    }
  }

  return (
    <View className="flex flex-col h-100vh">
      <ResultPanel exp={{ cur: cur, last: last }} className='flex-1'/>
      <ButtonPanel className={'mb-16px'} onClick={onButtonClick} />
    </View>
  );
}

export default Calculator;