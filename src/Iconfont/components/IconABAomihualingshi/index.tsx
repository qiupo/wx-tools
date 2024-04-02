import React, { useEffect, useState } from "react"
import './index.less'

const IconABAomihualingshi = ({ size, quot = '', color }: { size?: number, quot?: string, color?: string | string[] }) => {
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
  <div style={{backgroundImage: `url(${quot}data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%201024%201024%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20width%3D%27${svgSize}px%27%20height%3D%27${svgSize}px%27%3E%3Cpath%20d%3D%27M191.994089%20478.791801l61.539915%20426.507338c4.013026%2030.253938%2032.281009%2055.014636%2062.802208%2055.014636h332.986569c30.525311%200%2059.41005-24.662017%2064.187854-54.813163L787.081403%20478.590327%27%20fill=%27${(isStr?svgColor: svgColor?.[0])||'%23CFCFE2'}%27%2F%3E%3Cpath%20d%3D%27M649.326893%20991.155687H316.340324c-46.273147%200-87.287422-35.928093-93.372748-81.798294L161.42355%20482.854167l61.136967-8.120621%2061.539915%20426.507338c1.994178%2015.044735%2017.059471%2028.23509%2032.23578%2028.23509h332.986569c15.266767%200%2031.34354-13.728989%2033.732442-28.802505l73.570768-426.914397%2060.910824%209.66251L743.97427%20910.331868c-7.183152%2045.319231-48.756618%2080.823819-94.647377%2080.823819z%27%20fill=%27${(isStr?svgColor: svgColor?.[1])||'%236E6E96'}%27%2F%3E%3Cpath%20d%3D%27M555.978815%20270.994366m-61.675601%200a61.675601%2061.675601%200%201%200%20123.351202%200%2061.675601%2061.675601%200%201%200-123.351202%200Z%27%20fill=%27${(isStr?svgColor: svgColor?.[2])||'%2523333333'}%27%2F%3E%3Cpath%20d%3D%27M260.651368%20211.164922m-42.848095%200a42.848096%2042.848096%200%201%200%2085.696191%200%2042.848096%2042.848096%200%201%200-85.696191%200Z%27%20fill=%27${(isStr?svgColor: svgColor?.[3])||'%2523333333'}%27%2F%3E%3Cpath%20d%3D%27M774.182979%20525.081395a173.28788%20173.28788%200%200%200%2074.61103-2.997434c43.551198-15.838294%2079.183248-43.551198%20102.936578-87.098284%2011.878721-19.793756%2015.838294-43.547086%2015.838294-63.340842-3.959574-39.591624-15.838294-79.183248-51.470345-106.896151-27.712903-23.75333-59.381268-31.672477-95.013318-27.712903-11.874609%200-23.75333-3.959574-35.632051%203.955462-11.874609-59.381268-63.340842-118.766649-130.645369-110.851614-59.381268-67.304527-158.358273-95.013319-237.537409-47.506659-43.547086-27.712903-102.932466-27.712903-142.52409%203.959574-11.874609%2011.874609-27.712903%2023.749218-31.672477%2043.547085-55.425807%200-110.851613%2019.793756-146.483664%2063.344954-15.838294%2019.793756-27.712903%2039.591624-35.63205%2059.38538-11.878721%2039.587512-7.919147%2083.13871%2019.793756%20118.770761a154.698854%20154.698854%200%200%200%208.211078%209.424031%20117.570142%20117.570142%200%200%200-16.31114%2059.878785c0%2065.248674%2052.892995%20118.145781%20118.145781%20118.145781%2016.311141%200%2031.84928-3.305812%2045.985328-9.284234%27%20fill=%27${(isStr?svgColor: svgColor?.[4])||'%23FFB571'}%27%2F%3E%3Cpath%20d%3D%27M651.049698%20409.924825c-33.021117%200-63.468305%2010.48074-87.88362%2028.111739-26.203907-15.846518-59.208577-25.31989-95.111999-25.31989-37.840037%200-72.472943%2010.513634-99.297718%2027.930823a121.048646%20121.048646%200%200%200-80.811484-30.726784c-66.831681%200-121.007529%2053.777012-121.007528%20120.107065%200%2066.334165%2054.175848%20120.107065%20121.007528%20120.107065a121.028087%20121.028087%200%200%200%2078.977663-29.152001c27.075589%2018.14085%2062.423931%2029.152001%20101.131539%2029.152001%2025.636491%200%2049.792768-4.847702%2071.062627-13.37127%2026.689088%2030.533534%2066.918027%2049.981907%20111.932992%2049.981907%2080.359196%200%20145.505077-61.967532%20145.505077-138.412384%200-76.44074-65.145881-138.408272-145.505077-138.408271z%27%20fill=%27${(isStr?svgColor: svgColor?.[5])||'%236E6E96'}%27%20opacity%3D%27.2%27%2F%3E%3Cpath%20d%3D%27M727.815262%20554.22106a146.25752%20146.25752%200%200%200%2062.958454-2.536923c36.750435-13.363047%2066.819346-36.750435%2086.863916-73.496757%2010.024341-16.701753%2013.363047-36.742211%2013.363047-53.443964-3.338706-33.407617-13.363047-66.819346-43.427847-90.202622-23.387388-20.04457-50.113481-26.726094-80.178281-23.383276-10.020229%200-20.04457-3.338706-30.064799%203.338706-10.020229-50.10937-53.448076-100.21874-110.243081-93.541328-50.10937-56.790893-133.626357-80.178281-200.441591-40.089141-36.746323-23.387388-86.859804-23.387388-120.267421%203.338706-10.020229%2010.024341-23.383276%2020.04457-26.726094%2036.746323-46.770664%200-93.541328%2016.701753-123.606127%2053.452187-13.363047%2016.701753-23.387388%2033.407617-30.0648%2050.113482-10.024341%2033.407617-6.681523%2070.15394%2016.701753%20100.222851a133.975852%20133.975852%200%200%200%206.928226%207.952041%2099.203148%2099.203148%200%200%200-13.765995%2050.528764c0%2055.059865%2044.632576%2099.692441%2099.696553%2099.692441a99.338834%2099.338834%200%200%200%2038.802177-7.832801%27%20fill=%27${(isStr?svgColor: svgColor?.[6])||'%23FFD471'}%27%2F%3E%3Cpath%20d%3D%27M190.793471%20589.931233c-82.147789%200-148.983581-66.831681-148.983581-148.983581%200-19.102989%203.679978-37.971612%2010.752113-55.565605C24.022647%20345.181891%2016.37076%20294.163834%2031.419607%20244.009235c0.263149-0.875794%200.563304-1.739252%200.904575-2.586263%209.004638-22.519818%2022.523929-45.130093%2040.18371-67.201735%2035.015294-42.802867%2088.594945-69.105455%20149.39064-74.064173%207.450413-12.918983%2017.470642-22.417025%2025.541923-30.073023%201.883162-1.788592%203.737541-3.540179%205.49324-5.295878%200.805895-0.805895%201.652906-1.562449%202.541034-2.273774%2044.320087-35.459359%20108.647738-40.788131%20162.034139-14.987171%2080.531888-38.506133%20181.042559-18.157297%20249.967098%2051.063286%2065.174663%200.300155%20117.17953%2049.093778%20139.530768%20106.702901%202.853524%200.106904%205.452123%200.324825%207.730008%200.513963%201.809151%200.152133%203.548403%200.296043%205.016283%200.357719%2044.525672-4.485872%2083.496428%207.195487%20115.859672%2034.690469%2036.409163%2028.592809%2056.906021%2070.380084%2062.63774%20127.717834%200.098681%201.019703%200.152133%202.043518%200.152133%203.067334%200%2020.611986-3.466169%2050.931711-19.896549%2078.644614-26.134008%2047.621787-66.22726%2081.522809-119.173708%20100.777932a31.183184%2031.183184%200%200%201-2.684944%200.838788c-28.617479%207.532647-59.02355%208.749712-87.949407%203.523733a30.8378%2030.8378%200%201%201%2010.970034-60.692903%20142.593989%20142.593989%200%200%200%2059.928125-2.133976c38.460905-14.292293%2066.293047-37.983947%2085.062989-72.386597%200.201474-0.370054%200.411171-0.740107%200.629091-1.101937%209.506266-15.846518%2011.286635-35.048188%2011.430545-45.985328-4.259728-40.146704-16.492056-66.108021-39.554619-84.039174a24.793592%2024.793592%200%200%201-1.134831-0.929246c-20.028123-17.162264-42.741191-23.675207-71.539585-20.476299-5.369889%200.600309-10.587645-0.053452-14.872044-0.415283-2.40946-0.201474-5.957863-0.501628-7.458635-0.357718a30.915923%2030.915923%200%200%201-28.514687%202.532811%2030.846024%2030.846024%200%200%201-18.428669-22.40469c-11.944508-59.726652-58.600044-90.778261-96.806023-86.27183a30.862471%2030.862471%200%200%201-26.726094-10.225815c-60.820366-68.932763-145.916248-73.040358-198.550206-41.466562a30.833689%2030.833689%200%200%201-32.420807-0.427617c-33.160915-21.101279-77.267193-20.558534-105.535176%201.11016-1.714582%201.681688-3.490839%203.367488-5.295879%205.077958-9.440479%208.955297-15.270879%2014.859708-16.566066%2021.347982a30.8378%2030.8378%200%200%201-30.237491%2024.789479c-50.870036%200-95.560176%2018.967303-122.615206%2052.033649-13.309595%2016.640077-23.576526%2033.547415-30.340284%2050.027136-5.698826%2019.80198-10.748001%2056.58942%2014.983059%2089.672211%201.706358%202.133976%203.860893%204.605112%206.340252%207.244828a30.8378%2030.8378%200%200%201%204.091148%2036.770993%2087.159959%2087.159959%200%200%200-12.043189%2044.221406c0%2048.139862%2039.168118%2087.30798%2087.30798%2087.30798%2011.800598%200%2023.227031-2.306667%2033.970921-6.845992a30.829577%2030.829577%200%200%201%2040.413966%2016.385152%2030.8378%2030.8378%200%200%201-16.385152%2040.413965%20147.943319%20147.943319%200%200%201-58.007958%2011.730699z%27%20fill=%27${(isStr?svgColor: svgColor?.[7])||'%236E6E96'}%27%2F%3E%3Cpath%20d%3D%27M280.441013%20371.858644c50.722014%200%2091.83497%2041.117067%2091.834969%2091.83497s-41.112955%2091.843193-91.834969%2091.843193-91.839081-41.121179-91.839082-91.843193%27%20fill=%27${(isStr?svgColor: svgColor?.[8])||'%23FFFF00'}%27%2F%3E%3Cpath%20d%3D%27M280.441013%20586.374607c-67.645799%200-122.676882-55.035194-122.676882-122.680993a30.8378%2030.8378%200%200%201%2061.675601%200c0%2033.637873%2027.36752%2061.005393%2061.001281%2061.005392s60.997169-27.36752%2060.997169-61.005392c0-33.633761-27.363408-60.997169-60.997169-60.99717a30.8378%2030.8378%200%200%201%200-61.6756c67.641687%200%20122.67277%2055.031083%20122.67277%20122.67277%200.004112%2067.649911-55.031083%20122.680993-122.67277%20122.680993z%27%20fill=%27${(isStr?svgColor: svgColor?.[9])||'%2523333333'}%27%2F%3E%3Cpath%20d%3D%27M280.441013%20371.858644c50.722014%200%2091.83497%2041.117067%2091.834969%2091.83497s-41.112955%2091.843193-91.834969%2091.843193-91.839081-41.121179-91.839082-91.843193%27%20fill=%27${(isStr?svgColor: svgColor?.[10])||'%23FFD471'}%27%2F%3E%3Cpath%20d%3D%27M280.441013%20586.374607c-67.645799%200-122.676882-55.035194-122.676882-122.680993a30.8378%2030.8378%200%200%201%2061.675601%200c0%2033.637873%2027.36752%2061.005393%2061.001281%2061.005392s60.997169-27.36752%2060.997169-61.005392c0-33.633761-27.363408-60.997169-60.997169-60.99717a30.8378%2030.8378%200%200%201%200-61.6756c67.641687%200%20122.67277%2055.031083%20122.67277%20122.67277%200.004112%2067.649911-55.031083%20122.680993-122.67277%20122.680993z%27%20fill=%27${(isStr?svgColor: svgColor?.[11])||'%236E6E96'}%27%2F%3E%3Cpath%20d%3D%27M796.554775%20452.152053c0%2071.765729-58.168315%20129.942267-129.946379%20129.942267-71.769841%200-129.946379-58.176538-129.946379-129.942267s58.176538-129.946379%20129.946379-129.946379%27%20fill=%27${(isStr?svgColor: svgColor?.[12])||'%23FFD471'}%27%2F%3E%3Cpath%20d%3D%27M666.608396%20612.932121c-88.65662%200-160.78418-72.127559-160.784179-160.780068%200-88.65662%2072.127559-160.78418%20160.784179-160.78418%2017.034801%200%2030.8378%2013.807111%2030.8378%2030.837801s-13.802999%2030.8378-30.8378%2030.8378c-54.648694%200-99.108579%2044.459885-99.108579%2099.108579%200%2054.648694%2044.459885%2099.104467%2099.108579%2099.104467s99.108579-44.455773%2099.108579-99.104467c0-17.030689%2013.802999-30.8378%2030.8378-30.837801s30.8378%2013.807111%2030.837801%2030.837801c0%2088.652509-72.127559%20160.780068-160.78418%20160.780068z%27%20fill=%27${(isStr?svgColor: svgColor?.[13])||'%236E6E96'}%27%2F%3E%3Cpath%20d%3D%27M500.840828%20579.306583a288.066173%20288.066173%200%200%201-40.430412-2.935758l-1.689912-0.28782c-40.923817-8.186408-78.915987-28.230978-109.868915-57.970953l42.728856-44.480443c22.252557%2021.376763%2049.352816%2035.821189%2078.414359%2041.803722%2026.981019%203.749877%2053.020458%202.619157%2073.402189-3.20302l16.944343%2059.303146c-20.291273%205.793395-40.8827%207.771126-59.500508%207.771126z%27%20fill=%27${(isStr?svgColor: svgColor?.[14])||'%236E6E96'}%27%2F%3E%3Cpath%20d%3D%27M590.550045%20962.492979l-61.523467-4.354297%2031.672476-410.664932%2061.523468%204.354297zM365.824714%20954.146215l-28.395446-462.579342%2061.572808-3.503174%2028.395447%20462.579341z%27%20fill=%27${(isStr?svgColor: svgColor?.[15])||'%236E6E96'}%27%2F%3E%3Cpath%20d%3D%27M448.71261%20309.097553m-45.594716%200a45.594716%2045.594716%200%201%200%2091.189432%200%2045.594716%2045.594716%200%201%200-91.189432%200Z%27%20fill=%27${(isStr?svgColor: svgColor?.[16])||'%23FFB571'}%27%2F%3E%3Cpath%20d%3D%27M463.991712%20163.711715m-63.283278%200a63.283278%2063.283278%200%201%200%20126.566556%200%2063.283278%2063.283278%200%201%200-126.566556%200Z%27%20fill=%27${(isStr?svgColor: svgColor?.[17])||'%23FFB571'}%27%2F%3E%3Cpath%20d%3D%27M168.43401%20260.994696m-47.979506%200a47.979506%2047.979506%200%201%200%2095.959012%200%2047.979506%2047.979506%200%201%200-95.959012%200Z%27%20fill=%27${(isStr?svgColor: svgColor?.[18])||'%23FFB571'}%27%2F%3E%3Cpath%20d%3D%27M306.04461%20296.602076m-25.603597%200a25.603598%2025.603598%200%201%200%2051.207195%200%2025.603598%2025.603598%200%201%200-51.207195%200Z%27%20fill=%27${(isStr?svgColor: svgColor?.[19])||'%23FFFFFF'}%27%2F%3E%3Cpath%20d%3D%27M573.868851%20253.108442m-17.890036%200a17.890036%2017.890036%200%201%200%2035.780072%200%2017.890036%2017.890036%200%201%200-35.780072%200Z%27%20fill=%27${(isStr?svgColor: svgColor?.[20])||'%23FFFFFF'}%27%2F%3E%3Cpath%20d%3D%27M203.17382%20221.752567m-41.75027%200a41.75027%2041.75027%200%201%200%2083.50054%200%2041.75027%2041.75027%200%201%200-83.50054%200Z%27%20fill=%27${(isStr?svgColor: svgColor?.[21])||'%23FFB571'}%27%2F%3E%3Cpath%20d%3D%27M389.13398%20148.930129m-40.278279%200a40.278279%2040.278279%200%201%200%2080.556558%200%2040.278279%2040.278279%200%201%200-80.556558%200Z%27%20fill=%27${(isStr?svgColor: svgColor?.[22])||'%23FFB571'}%27%2F%3E%3Cpath%20d%3D%27M657.731221%20434.590953m-40.076805%200a40.076805%2040.076805%200%201%200%2080.153611%200%2040.076805%2040.076805%200%201%200-80.153611%200Z%27%20fill=%27${(isStr?svgColor: svgColor?.[23])||'%23FFFFFF'}%27%2F%3E%3Cpath%20d%3D%27M467.47844%20409.924825m-38.062069%200a38.062069%2038.062069%200%201%200%2076.124138%200%2038.062069%2038.062069%200%201%200-76.124138%200Z%27%20fill=%27${(isStr?svgColor: svgColor?.[24])||'%23FFFFFF'}%27%2F%3E%3Cpath%20d%3D%27M367.383051%20248.745921m-35.734843%200a35.734843%2035.734843%200%201%200%2071.469686%200%2035.734843%2035.734843%200%201%200-71.469686%200Z%27%20fill=%27${(isStr?svgColor: svgColor?.[25])||'%23FFFFFF'}%27%2F%3E%3Cpath%20d%3D%27M111.848702%20905.22924m-55.084535%200a55.084535%2055.084535%200%201%200%20110.16907%200%2055.084535%2055.084535%200%201%200-110.16907%200Z%27%20fill=%27${(isStr?svgColor: svgColor?.[26])||'%23FFA3A3'}%27%2F%3E%3Cpath%20d%3D%27M900.59329%20905.22924m-63.731454%200a63.731454%2063.731454%200%201%200%20127.462909%200%2063.731454%2063.731454%200%201%200-127.462909%200Z%27%20fill=%27${(isStr?svgColor: svgColor?.[27])||'%23FFE963'}%27%2F%3E%3Cpath%20d%3D%27M581.032993%20463.407131a73.870923%2084.984866%2066.309%201%200%20155.645656-68.294508%2073.870923%2084.984866%2066.309%201%200-155.645656%2068.294508Z%27%20fill=%27${(isStr?svgColor: svgColor?.[28])||'%23FFFFFF'}%27%20opacity%3D%27.5%27%2F%3E%3C%2Fsvg%3E${quot})`, width: `${svgSize}px`, height: `${svgSize}px`}} className="icon-abaomihualingshi" />
  </>
}
export default IconABAomihualingshi