import { View } from '@tarojs/components'
import { ConfigProvider } from "@nutui/nutui-react-taro"
import './index.less'
import { darkTheme } from '@/constant'
import Calculator from './components/Calculator'

function Index() {
    return (
        <ConfigProvider theme={darkTheme}>
            <View className="calculator">
                <Calculator />
            </View>
        </ConfigProvider>
    )
}

export default Index
