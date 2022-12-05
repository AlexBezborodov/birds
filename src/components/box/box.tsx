import React, {FC, ReactElement} from "react";

import {LayoutChangeEvent, View} from "react-native";

interface BoxProps {
  children?: any;
  onLayout?: (event: LayoutChangeEvent) => void | undefined;
  pb?: number;
  pt?: number;
  pl?: number;
  pr?: number;
  px?: number;
  py?: number;
  ml?: number;
  mt?: number;
  mr?: number;
  mb?: number;
  mx?: number;
  my?: number;
  p?: number;
  m?: number;
  style?: any;
  pointerEvents?: "auto" | "box-none" | "none" | "box-only" | undefined;
}

export const Box: FC<BoxProps> = ({
  children,
  onLayout,
  pb,
  pt,
  pl,
  pr,
  px,
  py,
  ml,
  mt,
  mr,
  mb,
  mx,
  my,
  p,
  m,
  style = {},
  pointerEvents = "auto",
  ...props
}) => {
  return (
    <View
      pointerEvents={pointerEvents}
      onLayout={onLayout}
      style={{
        padding: p,
        paddingBottom: pb,
        paddingTop: pt,
        paddingLeft: pl,
        paddingRight: pr,
        paddingHorizontal: px,
        paddingVertical: py,
        margin: m,
        marginLeft: ml,
        marginRight: mr,
        marginTop: mt,
        marginBottom: mb,
        marginHorizontal: mx,
        marginVertical: my,
        ...style,
        ...props,
      }}>
      {children}
    </View>
  );
};
