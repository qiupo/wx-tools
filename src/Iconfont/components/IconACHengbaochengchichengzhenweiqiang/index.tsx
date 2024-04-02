import React, { useEffect, useState } from "react"
import './index.less'

const IconACHengbaochengchichengzhenweiqiang = ({ size, quot = '', color }: { size?: number, quot?: string, color?: string | string[] }) => {
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
  <div style={{backgroundImage: `url(${quot}data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%201124%201024%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27${svgSize}px%27%20height%3D%27${svgSize}px%27%3E%3Cpath%20d%3D%27M848.648366%2068.159582v167.186405h-187.086362v-167.186405h-203.01525v167.186405H275.440383v-167.186405H72.429595v887.680836h346.312784v-296.536122h278.644009v296.536122H1051.663617V68.159582z%27%20fill=%27${(isStr?svgColor: svgColor?.[0])||'%23FF7189'}%27%2F%3E%3Cpath%20d%3D%27M73.473673%20335.755991h986.074074v75.851852h-986.074074z%27%20fill=%27${(isStr?svgColor: svgColor?.[1])||'%236E6E96'}%27%2F%3E%3Cpath%20d%3D%27M73.473673%20411.607843h981.612201v75.851852h-981.612201z%27%20fill=%27${(isStr?svgColor: svgColor?.[2])||'%23A9000E'}%27%20opacity%3D%27.15%27%2F%3E%3Cpath%20d%3D%27M1085.127669%20989.304471h-421.205333v-296.536122H452.210893v296.536122H38.965542V34.695529h269.938894v167.186406H425.082702V34.695529h269.943355v167.186406h120.158257V34.695529h269.943355v954.608942z%20m-354.277229-66.928105H1018.199564V101.623634h-136.087146v167.186405h-254.014466v-167.186405h-136.087146v167.186405H241.976331v-167.186405H105.893647v820.74827h279.38468v-296.536122h345.567651v296.540584z%27%20fill=%27${(isStr?svgColor: svgColor?.[3])||'%236E6E96'}%27%2F%3E%3C%2Fsvg%3E${quot})`, width: `${svgSize}px`, height: `${svgSize}px`}} className="icon-achengbaochengchichengzhenweiqiang" />
  </>
}
export default IconACHengbaochengchichengzhenweiqiang
