import React, { useEffect, useState } from "react"
import './index.less'

const IconAGOngwenbaogongwendai = ({ size, quot = '', color }: { size?: number, quot?: string, color?: string | string[] }) => {
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
  <div style={{backgroundImage: `url(${quot}data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%201024%201024%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27${svgSize}px%27%20height%3D%27${svgSize}px%27%3E%3Cpath%20d%3D%27M901.941529%20154.419016v826.016053H122.058471V154.419016%27%20fill=%27${(isStr?svgColor: svgColor?.[0])||'%23BFA686'}%27%2F%3E%3Cpath%20d%3D%27M901.941529%201011.855108H122.058471a31.420038%2031.420038%200%200%201-31.420039-31.420039V154.419016a31.420038%2031.420038%200%200%201%2062.840077%200v794.591826H870.521491V154.419016c0-17.35224%2014.063609-31.420038%2031.420038-31.420039s31.420038%2014.067799%2031.420039%2031.420039v826.011864a31.420038%2031.420038%200%200%201-31.420039%2031.424228z%27%20fill=%27${(isStr?svgColor: svgColor?.[1])||'%236E6E96'}%27%2F%3E%3Cpath%20d%3D%27M179.6912%2047.712376h668.295839l53.95449%20107.766542-391.904234%20148.218795-387.978824-148.218795z%27%20fill=%27${(isStr?svgColor: svgColor?.[2])||'%23A58F77'}%27%2F%3E%3Cpath%20d%3D%27M930.035233%20141.415309L876.080743%2033.644577a31.415849%2031.415849%200%200%200-28.093704-17.356429H179.6912a31.420038%2031.420038%200%200%200-27.708285%2016.602348L94.350186%20140.661228a31.424228%2031.424228%200%200%200%2016.493426%2044.172385L480.577867%20326.077159V969.5386a31.420038%2031.420038%200%200%200%2031.420038%2031.420038c17.356429%200%2031.420038-14.063609%2031.420039-31.420038V324.665352l369.6379-139.798224a31.420038%2031.420038%200%200%200%2016.979389-43.451819zM498.60878%20265.696224L166.578571%20138.851434l31.939516-59.71902h630.059747l29.677274%2059.27495-334.564759%20126.534779-25.081569%200.754081z%27%20fill=%27${(isStr?svgColor: svgColor?.[3])||'%236E6E96'}%27%2F%3E%3C%2Fsvg%3E${quot})`, width: `${svgSize}px`, height: `${svgSize}px`}} className="icon-agongwenbaogongwendai" />
  </>
}
export default IconAGOngwenbaogongwendai
