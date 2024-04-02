import React, { useEffect, useState } from "react"
import './index.less'

const IconAHUihuahuabicaibi = ({ size, quot = '', color }: { size?: number, quot?: string, color?: string | string[] }) => {
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
  <div style={{backgroundImage: `url(${quot}data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%201024%201024%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27${svgSize}px%27%20height%3D%27${svgSize}px%27%3E%3Cpath%20d%3D%27M543.019136%2061.453588h-44.683038L390.350719%20303.483962v100.536835h264.376011V303.483962z%27%20fill=%27${(isStr?svgColor: svgColor?.[0])||'%23FFE38D'}%27%2F%3E%3Cpath%20d%3D%27M654.72673%20434.901996H390.350719a30.8812%2030.8812%200%200%201-30.8812-30.881199V303.483962c0-4.33572%200.914084-8.622031%202.680488-12.583059l107.989497-242.030375a30.8812%2030.8812%200%200%201%2028.200712-18.29814h44.683037a30.8812%2030.8812%200%200%201%2028.04013%2017.939918l111.707593%20242.030375c1.873459%204.055731%202.84107%208.473801%202.841071%2012.941281v100.536835a30.885317%2030.885317%200%200%201-30.885317%2030.881199z%20m-233.494811-61.762399h202.613611v-62.874123l-100.586245-217.934804h-4.887464L421.231919%20310.059599v63.079998z%27%20fill=%27${(isStr?svgColor: svgColor?.[1])||'%236E6E96'}%27%2F%3E%3Cpath%20d%3D%27M807.209859%2061.44947h-44.678919L654.541442%20303.479845v100.536834h264.371894V303.479845z%27%20fill=%27${(isStr?svgColor: svgColor?.[2])||'%2378E6D2'}%27%2F%3E%3Cpath%20d%3D%27M918.913336%20434.897879H654.541442a30.8812%2030.8812%200%200%201-30.8812-30.8812V303.479845c0-4.33572%200.914084-8.622031%202.676371-12.58306l107.989497-242.030374a30.885317%2030.885317%200%200%201%2028.20483-18.298141h44.683037a30.8812%2030.8812%200%200%201%2028.040129%2017.939919l111.703477%20242.030374c1.873459%204.055731%202.84107%208.473801%202.84107%2012.941282v100.536834a30.885317%2030.885317%200%200%201-30.885317%2030.8812z%20m-233.490694-61.7624h202.609494v-62.874123l-100.582127-217.930686h-4.887465L685.422642%20310.055482v63.079997z%27%20fill=%27${(isStr?svgColor: svgColor?.[3])||'%236E6E96'}%27%2F%3E%3Cpath%20d%3D%27M274.225055%2061.44947H229.546135L121.560755%20303.479845v100.536834h264.371893V303.479845z%27%20fill=%27${(isStr?svgColor: svgColor?.[4])||'%23FF8C8C'}%27%2F%3E%3Cpath%20d%3D%27M385.932648%20434.897879H121.560755a30.8812%2030.8812%200%200%201-30.8812-30.8812V303.479845c0-4.33572%200.914084-8.622031%202.680488-12.58306l107.989498-242.030374a30.8812%2030.8812%200%200%201%2028.200711-18.298141h44.67892a30.885317%2030.885317%200%200%201%2028.04013%2017.939919l111.703476%20242.030374c1.873459%204.055731%202.84107%208.473801%202.84107%2012.941282v100.536834a30.8812%2030.8812%200%200%201-30.8812%2030.8812z%20m-233.490693-61.7624h202.609494v-62.874123L254.469322%2092.33067H249.585975L152.441955%20310.055482v63.079997z%27%20fill=%27${(isStr?svgColor: svgColor?.[5])||'%236E6E96'}%27%2F%3E%3Cpath%20d%3D%27M390.350719%20303.483962h264.376011v659.066568H390.350719z%27%20fill=%27${(isStr?svgColor: svgColor?.[6])||'%23FFE38D'}%27%2F%3E%3Cpath%20d%3D%27M654.722612%20993.43173H390.350719a30.8812%2030.8812%200%200%201-30.8812-30.8812V303.483962a30.8812%2030.8812%200%200%201%2030.8812-30.8812h264.376011a30.8812%2030.8812%200%200%201%2030.881199%2030.8812v659.066568a30.8812%2030.8812%200%200%201-30.885317%2030.8812z%20m-233.490693-61.7624h202.613611V334.365162H421.231919v597.304168z%27%20fill=%27${(isStr?svgColor: svgColor?.[7])||'%236E6E96'}%27%2F%3E%3Cpath%20d%3D%27M654.541442%20303.479845h264.371894v659.070685H654.541442z%27%20fill=%27${(isStr?svgColor: svgColor?.[8])||'%2378E6D2'}%27%2F%3E%3Cpath%20d%3D%27M918.913336%20993.43173H654.541442a30.877082%2030.877082%200%200%201-30.8812-30.8812V303.479845a30.8812%2030.8812%200%200%201%2030.8812-30.8812h264.371894a30.8812%2030.8812%200%200%201%2030.881199%2030.8812v659.070685c0%2017.058775-13.822425%2030.8812-30.881199%2030.8812z%20m-233.490694-61.7624h202.609494V334.361045H685.422642v597.308285z%27%20fill=%27${(isStr?svgColor: svgColor?.[9])||'%236E6E96'}%27%2F%3E%3Cpath%20d%3D%27M121.560755%20303.479845h264.371893v659.070685H121.560755z%27%20fill=%27${(isStr?svgColor: svgColor?.[10])||'%23FF8C8C'}%27%2F%3E%3Cpath%20d%3D%27M385.932648%20993.43173H121.560755a30.8812%2030.8812%200%200%201-30.8812-30.8812V303.479845a30.8812%2030.8812%200%200%201%2030.8812-30.8812h264.371893a30.8812%2030.8812%200%200%201%2030.8812%2030.8812v659.070685a30.8812%2030.8812%200%200%201-30.8812%2030.8812z%20m-233.490693-61.7624h202.609494V334.361045H152.441955v597.308285z%27%20fill=%27${(isStr?svgColor: svgColor?.[11])||'%236E6E96'}%27%2F%3E%3Cpath%20d%3D%27M121.560755%20303.479845h264.371893v100.536834H121.560755z%27%20fill=%27${(isStr?svgColor: svgColor?.[12])||'%23FFFFFF'}%27%2F%3E%3Cpath%20d%3D%27M385.932648%20434.897879H121.560755a30.8812%2030.8812%200%200%201-30.8812-30.8812V303.479845a30.8812%2030.8812%200%200%201%2030.8812-30.8812h264.371893a30.8812%2030.8812%200%200%201%2030.8812%2030.8812v100.536834a30.8812%2030.8812%200%200%201-30.8812%2030.8812z%20m-233.490693-61.7624h202.609494v-38.774434H152.441955v38.774434z%27%20fill=%27${(isStr?svgColor: svgColor?.[13])||'%236E6E96'}%27%2F%3E%3Cpath%20d%3D%27M390.350719%20303.479845h264.376011v100.540952H390.350719z%27%20fill=%27${(isStr?svgColor: svgColor?.[14])||'%23FFFFFF'}%27%2F%3E%3Cpath%20d%3D%27M654.722612%20434.901996H390.350719a30.8812%2030.8812%200%200%201-30.8812-30.881199V303.479845a30.8812%2030.8812%200%200%201%2030.8812-30.8812h264.376011a30.8812%2030.8812%200%200%201%2030.881199%2030.8812v100.540952a30.885317%2030.885317%200%200%201-30.885317%2030.881199z%20m-233.490693-61.762399h202.613611v-38.778552H421.231919v38.778552z%27%20fill=%27${(isStr?svgColor: svgColor?.[15])||'%236E6E96'}%27%2F%3E%3Cpath%20d%3D%27M654.541442%20303.479845h264.371894v100.540952H654.541442z%27%20fill=%27${(isStr?svgColor: svgColor?.[16])||'%23FFFFFF'}%27%2F%3E%3Cpath%20d%3D%27M918.913336%20434.901996H654.541442a30.8812%2030.8812%200%200%201-30.8812-30.881199V303.479845a30.8812%2030.8812%200%200%201%2030.8812-30.8812h264.371894a30.8812%2030.8812%200%200%201%2030.881199%2030.8812v100.540952a30.8812%2030.8812%200%200%201-30.881199%2030.881199z%20m-233.490694-61.762399h202.609494v-38.778552H685.422642v38.778552z%27%20fill=%27${(isStr?svgColor: svgColor?.[17])||'%236E6E96'}%27%2F%3E%3Cpath%20d%3D%27M822.872804%20303.483962h96.040532v659.066568h-96.040532zM560.691417%20272.602762h96.040532v659.066568h-96.040532zM289.892117%20303.483962h96.040531v659.066568H289.892117z%27%20fill=%27${(isStr?svgColor: svgColor?.[18])||'%236E6E96'}%27%20opacity%3D%27.2%27%2F%3E%3Cpath%20d%3D%27M152.441955%20434.901996h52.806852v496.767334H152.441955zM416.813848%20434.901996h52.806852v496.767334H416.813848zM685.607929%20434.901996h52.806852v496.767334h-52.806852z%27%20fill=%27${(isStr?svgColor: svgColor?.[19])||'%23FFFFFF'}%27%20opacity%3D%27.5%27%2F%3E%3Cpath%20d%3D%27M253.744643%2061.453588l36.147474%20211.149174h83.992746zM511.454432%2061.453588l36.143356%20211.149174h84.000982zM782.611954%2061.453588l36.143357%20211.149174h83.996863z%27%20fill=%27${(isStr?svgColor: svgColor?.[20])||'%236E6E96'}%27%20opacity%3D%27.2%27%2F%3E%3C%2Fsvg%3E${quot})`, width: `${svgSize}px`, height: `${svgSize}px`}} className="icon-ahuihuahuabicaibi" />
  </>
}
export default IconAHUihuahuabicaibi
