import { Divider } from '@nutui/nutui-react-taro';
import { View } from '@tarojs/components';
import { useEffect, useState } from 'react';

const replacement = [
  {
    reg: /\*/g,
    dest: '×'
  }, {
    reg: /\//g,
    dest: '÷'
  }, {
    reg: /--/g,
    dest: '-'
  }
];
const ResultPanel = ({ exp, className }) => {
  const [cur, setCur] = useState('');
  const [last, setLast] = useState('')
  useEffect(() => {
    replacement.forEach((item) => {
      setCur(exp.cur.replace(item.reg, item.dest));
      setLast(exp.last.replace(item.reg, item.dest));
    });
  }, [exp])
  return (
    <View className={`${className} p-12px b-1px b-amber b-solid`}>
      <View className="text-36px break-all">{last}</View>
      {last === '' ? <></> : <Divider />}
      <View className="text-30px break-all">{cur}</View>
    </View >
  );
};

export default ResultPanel;