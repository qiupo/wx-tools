import React, { useEffect, useState } from "react"
import './index.less'

const IconAFEnxibaogaozhanbi = ({ size, quot = '', color }: { size?: number, quot?: string, color?: string | string[] }) => {
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
  <div style={{backgroundImage: `url(${quot}data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%201024%201024%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27${svgSize}px%27%20height%3D%27${svgSize}px%27%3E%3Cpath%20d%3D%27M54.338873%20512c0%20252.359576%20205.305731%20457.665306%20457.665307%20457.665306S969.665306%20764.359576%20969.665306%20512%20764.359576%2054.334694%20512%2054.334694C259.644604%2054.334694%2054.338873%20259.640424%2054.338873%20512z%27%20fill=%27${(isStr?svgColor: svgColor?.[0])||'%23FFFFFF'}%27%2F%3E%3Cpath%20d%3D%27M96.264359%20688.270106a31.351118%2031.351118%200%200%201-19.982628-55.521698l164.065698-135.523265a31.342759%2031.342759%200%200%201%2044.13231%204.204669%2031.346939%2031.346939%200%200%201-4.20467%2044.13231l-164.065698%20135.523266a31.196473%2031.196473%200%200%201-19.945012%207.184718zM126.432653%20791.497665a31.346939%2031.346939%200%200%201-19.6608-55.785012l298.431216-239.854237a31.33858%2031.33858%200%200%201%2044.069617%204.793992%2031.342759%2031.342759%200%200%201-4.793992%2044.069616l-298.431216%20239.858417a31.196473%2031.196473%200%200%201-19.614825%206.917224zM194.091886%20859.161078a31.346939%2031.346939%200%200%201-19.635723-55.797551l324.81698-260.635168a31.346939%2031.346939%200%200%201%2039.238008%2048.892865l-324.81698%20260.639347a31.242449%2031.242449%200%200%201-19.602285%206.900507zM266.248359%20923.451559a31.346939%2031.346939%200%200%201-19.468539-55.927118l303.3088-239.992163a31.3344%2031.3344%200%200%201%2044.032%205.136718%2031.33858%2031.33858%200%200%201-5.136718%2044.032l-303.3088%20239.992163a31.179755%2031.179755%200%200%201-19.426743%206.7584zM361.538873%20974.726792a31.346939%2031.346939%200%200%201-19.945012-55.542596l265.065535-218.295902a31.346939%2031.346939%200%200%201%2039.856588%2048.391314L381.446269%20967.57551a31.217371%2031.217371%200%200%201-19.907396%207.151282zM484.55262%20997.087608a31.300963%2031.300963%200%200%201-24.145502-11.330873%2031.355298%2031.355298%200%200%201%204.116898-44.144849l189.565388-157.232066a31.355298%2031.355298%200%200%201%2040.032131%2048.253388l-189.565388%20157.232065a31.263347%2031.263347%200%200%201-20.003527%207.222335z%27%20fill=%27${(isStr?svgColor: svgColor?.[1])||'%236E6E96'}%27%2F%3E%3Cpath%20d%3D%27M743.775086%20906.490776l-231.775086-402.076735%20320.491102-318.785829s135.920327%20133.266286%20135.920327%20360.427102c-0.00418%20227.169176-224.636343%20360.435461-224.636343%20360.435462z%27%20fill=%27${(isStr?svgColor: svgColor?.[2])||'%236ABAFF'}%27%2F%3E%3Cpath%20d%3D%27M51.927249%20533.947037l460.072751-29.532996%20320.491102-321.3312S601.827788%208.551445%20330.171037%2092.047151%2051.927249%20533.947037%2051.927249%20533.947037z%27%20fill=%27${(isStr?svgColor: svgColor?.[3])||'%23FFA738'}%27%2F%3E%3Cpath%20d%3D%27M512.00418%201001.012245c-269.642188%200-489.012245-219.370057-489.012245-489.012245%200-269.642188%20219.365878-489.012245%20489.008065-489.012245s489.012245%20219.370057%20489.012245%20489.012245c0%20269.642188-219.361698%20489.012245-489.008065%20489.012245z%20m-0.00418-915.330612c-235.072784%200-426.314188%20191.245584-426.314188%20426.318367s191.245584%20426.318367%20426.318368%20426.318367c235.068604%200%20426.314188-191.245584%20426.314187-426.318367s-191.245584-426.318367-426.318367-426.318367z%27%20fill=%27${(isStr?svgColor: svgColor?.[4])||'%236E6E96'}%27%2F%3E%3Cpath%20d%3D%27M857.196669%20208.294139l-43.877355-44.780147-319.287379%20312.884245-437.636702%2024.500767a31.346939%2031.346939%200%200%200%203.502498%2062.593567l430.343314-24.099526%20205.197061%20367.089371%2054.727576-30.582073-203.232653-363.570155%20310.26364-304.036049z%27%20fill=%27${(isStr?svgColor: svgColor?.[5])||'%236E6E96'}%27%2F%3E%3Cpath%20d%3D%27M734.032457%20767.07631l-142.1312-246.562481%20196.528588-195.48369s83.341061%2081.723559%2083.341061%20221.025175c0.008359%20139.309976-137.738449%20221.020996-137.738449%20221.020996z%27%20fill=%27${(isStr?svgColor: svgColor?.[6])||'%238FCBFF'}%27%2F%3E%3Cpath%20d%3D%27M192.796212%20415.53502l275.192686-17.667134%20191.701159-192.20271S538.653257%20117.751641%20376.163265%20167.693584C213.673273%20217.635527%20192.796212%20415.53502%20192.796212%20415.53502z%27%20fill=%27${(isStr?svgColor: svgColor?.[7])||'%23FFC378'}%27%2F%3E%3Cpath%20d%3D%27M489.003886%20210.659788c7.615216%2019.24702-35.961208%2034.515069-86.041078%2054.343053-50.079869%2019.827984-87.700376%2036.700996-95.319771%2017.453975-7.619396-19.24702%2026.803722-50.919967%2076.883592-70.747951%2050.079869-19.823804%2096.857861-20.296098%20104.477257-1.049077z%27%20fill=%27${(isStr?svgColor: svgColor?.[8])||'%23FFFFFF'}%27%2F%3E%3C%2Fsvg%3E${quot})`, width: `${svgSize}px`, height: `${svgSize}px`}} className="icon-afenxibaogaozhanbi" />
  </>
}
export default IconAFEnxibaogaozhanbi