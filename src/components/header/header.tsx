import React, {FC} from "react";

import {Appbar} from "react-native-paper";

interface HeaderProps {
  title?: string;
  backAction?: () => void;
  children?: any;
}

export const AppHeader: FC<HeaderProps> = ({
  title = " ",
  backAction,
  children,
}) => {
  return (
    <Appbar.Header style={{backgroundColor: "#26D826"}}>
      {backAction && <Appbar.BackAction onPress={backAction} />}
      <Appbar.Content title={title} />
      {children}
    </Appbar.Header>
  );
};
