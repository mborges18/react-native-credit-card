import { View, StyleSheet, ViewProps, DimensionValue } from 'react-native'
import Svg, { Defs, Rect, LinearGradient, Stop, NumberProp } from 'react-native-svg'

type GradientProps = { 
  fromColor: string
  toColor: string
  children?: any
  height?: DimensionValue,
  opacityColor1?: number
  opacityColor2?: number
  angleX1?: NumberProp,
  angleY1?: NumberProp,
  angleX2?: NumberProp,
  angleY2?: NumberProp, 
} & ViewProps

function GradientCard({ 
  children, 
  fromColor, 
  toColor, 
  height = '100%', 
  opacityColor1 = 1, 
  opacityColor2 = 1, 
  angleX1 = "0%",
  angleY1 = "0%",
  angleX2 = "0%",
  angleY2 = "80%",
  ...otherViewProps 
}: GradientProps) {
  const gradientUniqueId = `grad${fromColor}+${toColor}`.replace(/[^a-zA-Z0-9 ]/g, '')
  return <>
    <View style={[StyleSheet.absoluteFillObject, {  height, zIndex: -1}, otherViewProps.style]} {...otherViewProps}>
        <Svg height='100%' width="100%" style={StyleSheet.absoluteFillObject}>
            <Defs>
                <LinearGradient id={gradientUniqueId} x1={angleX1} y1={angleY1} x2={angleX2} y2={angleY2}>
                    <Stop offset="0" stopColor={fromColor} stopOpacity={opacityColor1} />
                    <Stop offset="1" stopColor={toColor} stopOpacity={opacityColor2} />
                </LinearGradient>
            </Defs>
            <Rect width="100%" height="100%" fill={`url(#${gradientUniqueId})`} />
        </Svg>
    </View>
    {children}
  </>
};

export default GradientCard