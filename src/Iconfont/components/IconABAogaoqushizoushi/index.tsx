import React, { useEffect, useState } from "react"
import './index.less'

const IconABAogaoqushizoushi = ({ size, quot = '', color }: { size?: number, quot?: string, color?: string | string[] }) => {
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
  <div style={{backgroundImage: `url(${quot}data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%201104%201024%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27${svgSize}px%27%20height%3D%27${svgSize}px%27%3E%3Cpath%20d%3D%27M330.0617%20356.80313L235.939644%20432.407719l-177.610999%2068.842644v421.870218a41.30467%2041.30467%200%200%200%2041.304671%2041.300089H1000.089791a41.295508%2041.295508%200%200%200%2041.300089-41.300089V63.419024l-235.435705%20148.60244-153.417347%2020.652335-90.278376%20115.653993-83.805051-26.910341%27%20fill=%27${(isStr?svgColor: svgColor?.[0])||'%23FFBF00'}%27%2F%3E%3Cpath%20d%3D%27M99.637897%20964.425251H1000.089791a41.295508%2041.295508%200%200%200%2041.300089-41.300089V307.284254l-195.514576%2047.956665-188.317412%2097.457215-71.898347%20132.471811-206.527933-41.080188-159.712003%20104.645218-161.090964%2038.546749v235.838857a41.30467%2041.30467%200%200%200%2041.309252%2041.30467z%27%20fill=%27${(isStr?svgColor: svgColor?.[1])||'%23FFBF00'}%27%2F%3E%3Cpath%20d%3D%27M173.739832%20868.204977h737.065717c19.946821%200%2036.114099-15.328907%2036.114099-34.244944V433.273578l-106.839642%2039.765366-164.687256%2080.808904-62.877839%20109.844951-244.744832-34.066274-139.668976%2095.922492-90.479952%2022.805529v85.605487c-0.004581%2018.916036%2016.167278%2034.244944%2036.118681%2034.244944z%27%20fill=%27${(isStr?svgColor: svgColor?.[2])||'%23FFFF00'}%27%20opacity%3D%27.6%27%2F%3E%3Cpath%20d%3D%27M1000.089791%20998.784726H99.637897c-41.721565%200-75.664146-33.937999-75.664146-75.659564v-235.838856a34.359475%2034.359475%200%200%201%2026.36059-33.415735l155.263596-37.154046%20154.704682-101.360452a34.354894%2034.354894%200%200%201%2025.531381-4.961508l181.702067%2036.141587%2059.826718-110.225197a34.345731%2034.345731%200%200%201%2014.408074-14.124035l188.317411-97.457215a34.460263%2034.460263%200%200%201%207.604897-2.858708l195.514577-47.956665a34.368638%2034.368638%200%200%201%2042.546193%2033.369922v615.840908c-0.004581%2041.716984-33.94258%2075.659564-75.664146%2075.659564zM92.68812%20714.38906v208.731521c0%203.825355%203.115259%206.940614%206.945196%206.940614H1000.089791c3.825355%200%206.940614-3.115259%206.940614-6.940614V351.090294l-148.991847%2036.549319-175.315786%2090.72734-66.86812%20123.199334a34.336569%2034.336569%200%200%201-36.902076%2017.303432l-192.747494-38.336012-147.956481%2096.944114a34.432775%2034.432775%200%200%201-10.834688%204.67747l-134.725793%2032.233769z%27%20fill=%27${(isStr?svgColor: svgColor?.[3])||'%236E6E96'}%27%2F%3E%3Cpath%20d%3D%27M383.680806%20302.767128m-76.122272%200a76.122272%2076.122272%200%201%200%20152.244544%200%2076.122272%2076.122272%200%201%200-152.244544%200Z%27%20fill=%27${(isStr?svgColor: svgColor?.[4])||'%23FFFFFF'}%27%2F%3E%3Cpath%20d%3D%27M1000.089791%20998.784726H99.637897c-41.721565%200-75.664146-33.937999-75.664146-75.659564v-421.870217a34.354894%2034.354894%200%200%201%2021.944252-32.036775L218.572075%20402.295075l89.976012-72.278592a34.359475%2034.359475%200%200%201%2043.036388%2053.573293L257.457838%20459.194366a34.396125%2034.396125%200%200%201-9.098389%205.250127l-155.666747%2060.335239v398.340849c0%203.825355%203.115259%206.940614%206.945195%206.940614H1000.089791c3.825355%200%206.940614-3.115259%206.940614-6.940614V125.73795l-182.737433%20115.337886a34.382381%2034.382381%200%200%201-13.752952%204.998158l-139.540701%2018.78318-81.656438%20104.608568a34.373219%2034.373219%200%200%201-37.589266%2011.572271l-83.805051-26.910341a34.359475%2034.359475%200%200%201%2021.009674-65.429603l60.972034%2019.580319%2075.522127-96.747119a34.350313%2034.350313%200%200%201%2022.498584-12.910001l145.995701-19.653619%20229.104399-144.602997a34.354894%2034.354894%200%201%201%2052.698272%2029.054372v859.706138c0%2041.716984-33.937999%2075.659564-75.659564%2075.659564z%27%20fill=%27${(isStr?svgColor: svgColor?.[5])||'%236E6E96'}%27%2F%3E%3Cpath%20d%3D%27M383.680806%20413.248875c-60.92164%200-110.481747-49.564688-110.481747-110.486328S322.759166%20192.2808%20383.680806%20192.2808s110.481747%2049.560107%20110.481747%20110.481747S444.602446%20413.248875%20383.680806%20413.248875z%20m0-152.249125c-23.030011%200-41.762797%2018.732786-41.762797%2041.762797s18.732786%2041.767378%2041.762797%2041.767378%2041.762797-18.737367%2041.762797-41.767378-18.732786-41.762797-41.762797-41.762797z%27%20fill=%27${(isStr?svgColor: svgColor?.[6])||'%236E6E96'}%27%2F%3E%3C%2Fsvg%3E${quot})`, width: `${svgSize}px`, height: `${svgSize}px`}} className="icon-abaogaoqushizoushi" />
  </>
}
export default IconABAogaoqushizoushi
