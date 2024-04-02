import { View } from '@tarojs/components'
import { Button, Cell, ConfigProvider, NavBar, SideNavBar, SideNavBarItem, SubSideNavBar } from "@nutui/nutui-react-taro"
import './index.less'
import { darkTheme } from '@/constant'
import { useState } from 'react'

import Taro from '@tarojs/taro'
import IconABAogaoqushizoushi from '@/Iconfont/components/IconABAogaoqushizoushi'
import IconACAijingzoushiqushi from '@/Iconfont/components/IconACAijingzoushiqushi'
import IconAFEnxibaogaozhanbi from '@/Iconfont/components/IconAFEnxibaogaozhanbi'
import { Iconfont } from '@/Iconfont'

function Index() {
  const [navBarState, setNavBarState] = useState(false)
  const changeNarBar = (visible) => {
    setNavBarState(visible)
  }
  return (
    <ConfigProvider theme={darkTheme}>
      <View className="nutui-react-demo ">
        <Iconfont name='icon-a-huazhiwu' size={40}></Iconfont>
        <IconABAogaoqushizoushi size={40} color={['red', 'green']} />
        <IconACAijingzoushiqushi size={34}></IconACAijingzoushiqushi>
        <IconAFEnxibaogaozhanbi size={40}/>
        <Cell title="计算器" extra="基本计算功能" onClick={() => {
          Taro.navigateTo({
            url: '/pages/calculator/index'
          })
        }} />
        <Cell title="我是标题" description="我是描述" extra="描述文字" />
        <Cell
          title="点击测试"
          onClick={() => {
            console.log('eee');

          }}
        />
        <Cell title="圆角设置0" radius={0} />
      </View>

      <SideNavBar
        title="菜单"
        visible={navBarState}
        position={'left'}
        onClose={() => {
          changeNarBar(false)
        }}
      >
        <SubSideNavBar title="常用工具" key="1-0" value={'1'} >
          <SideNavBarItem title="计算" key="1-01" value={'1-1'} />
          <SideNavBarItem title="转换" key="1-02" value={'1-2'} onClick={() => {
            Taro.showToast({ title: '1-2' })
          }} />
        </SubSideNavBar>
      </SideNavBar>
    </ConfigProvider>
  )
}

export default Index
