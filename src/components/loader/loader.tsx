import * as React from "react";

import {ActivityIndicator, MD2Colors} from "react-native-paper";

import {Box} from "../box";

export const Loader = () => (
  <Box
    m={16}
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
    }}>
    <ActivityIndicator animating={true} color={MD2Colors.green500} />
  </Box>
);
