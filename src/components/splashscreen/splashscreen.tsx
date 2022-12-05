import React, {useEffect} from "react";

import {Text} from "react-native-paper";
import {useNavigate} from "react-router-native";

import {Box} from "../box";

export const Splashscreen = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate("/birds"), 1500);
  }, []);
  return (
    <Box
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#26D826",
        height: "100%",
      }}>
      <Text variant="displayLarge">
        Wiki<Text style={{color: "#fff"}}>ANIMALS</Text>
      </Text>
    </Box>
  );
};
