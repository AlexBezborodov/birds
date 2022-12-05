import React, {FC} from "react";

import {View} from "react-native";

interface ChildrenProps {
  children: any;
}

export const Layout: FC<ChildrenProps> = ({children}) => {
  return <View style={{padding: 16}}>{children}</View>;
};
