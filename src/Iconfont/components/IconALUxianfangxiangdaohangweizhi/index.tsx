import React, { useEffect, useState } from "react"
import './index.less'

const IconALUxianfangxiangdaohangweizhi = ({ size, quot = '', color }: { size?: number, quot?: string, color?: string | string[] }) => {
  const [svgSize, setSize] = useState(size);
  useEffect(() => {
    if (false){
      setSize((size||16) * (750 / 750))
    }else{
      setSize(size||16)
    }
  }, [size])
  const isStr = typeof color === 'string';
  const svgColor = isStr ? encodeURIComponent(color) : color?.map(item => encodeURIComponent(item))
  return <>
  <div style={{backgroundImage: `url(${quot}data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%201032%201024%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27${svgSize}px%27%20height%3D%27${svgSize}px%27%3E%3Cpath%20d%3D%27M577.084624%20439.449841h304.270772l93.513922%20144.395172-93.513922%20134.334533h-304.270772%27%20fill=%27${(isStr?svgColor: svgColor?.[0])||'%235CE68F'}%27%2F%3E%3Cpath%20d%3D%27M881.355396%20748.927218h-304.270772c-16.985015%200-30.747673-13.762658-30.747673-30.747672s13.762658-30.747673%2030.747673-30.747673h288.212287l72.53581-104.205914-73.19586-113.028445h-287.552237c-16.985015%200-30.747673-13.766758-30.747673-30.747673s13.762658-30.747673%2030.747673-30.747673h304.270772a30.747673%2030.747673%200%200%201%2025.807547%2014.033238l93.513922%20144.395172a30.747673%2030.747673%200%200%201-0.573956%2034.281605l-93.513923%20134.334533a30.747673%2030.747673%200%200%201-25.23359%2013.180502z%27%20fill=%27${(isStr?svgColor: svgColor?.[1])||'%236E6E96'}%27%2F%3E%3Cpath%20d%3D%27M470.541888%20131.161373V47.757286h106.542736v933.806826h-106.542736V409.739389%27%20fill=%27${(isStr?svgColor: svgColor?.[2])||'%23FFA607'}%27%2F%3E%3Cpath%20d%3D%27M577.084624%201012.311785h-106.546836a30.747673%2030.747673%200%200%201-30.747673-30.747673V409.739389a30.747673%2030.747673%200%200%201%2061.495346%200v541.07705h45.05149V78.504958h-45.05149v52.656415a30.747673%2030.747673%200%200%201-61.495346%200V47.757286a30.747673%2030.747673%200%200%201%2030.747673-30.747673h106.546836a30.747673%2030.747673%200%200%201%2030.747673%2030.747673v933.806826c0%2016.985015-13.762658%2030.747673-30.747673%2030.747673z%27%20fill=%27${(isStr?svgColor: svgColor?.[3])||'%236E6E96'}%27%2F%3E%3Cpath%20d%3D%27M557.967771%20161.749158H151.200657L57.682634%20306.078735l93.518023%20134.252539H557.967771%27%20fill=%27${(isStr?svgColor: svgColor?.[4])||'%23FFCC71'}%27%2F%3E%3Cpath%20d%3D%27M557.967771%20471.078947H151.196557a30.743573%2030.743573%200%200%201-25.229491-13.172303L32.453144%20323.654105a30.747673%2030.747673%200%200%201-0.573957-34.293905l93.518022-144.329576a30.747673%2030.747673%200%200%201%2025.803448-14.029139h406.771214c16.985015%200%2030.747673%2013.766758%2030.747673%2030.747673s-13.762658%2030.747673-30.747673%2030.747673H167.915092L94.723331%20305.459682l72.531711%20104.123919H557.967771c16.985015%200%2030.747673%2013.766758%2030.747673%2030.747673s-13.762658%2030.747673-30.747673%2030.747673z%27%20fill=%27${(isStr?svgColor: svgColor?.[5])||'%236E6E96'}%27%2F%3E%3C%2Fsvg%3E${quot})`, width: `${svgSize}px`, height: `${svgSize}px`}} className="icon-aluxianfangxiangdaohangweizhi" />
  </>
}
export default IconALUxianfangxiangdaohangweizhi