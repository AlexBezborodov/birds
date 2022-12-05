import React, {FC} from "react";

import {Card, Text, Button, MD2Colors} from "react-native-paper";
import {useNavigate} from "react-router-native";

import {Box} from "../box";

interface CardProps {
  item: {
    id: number;
    image: string;
    title: string;
    text: string;
  };
  onDelete: (id: number) => void;
  loading: boolean;
}

export const CardDetails: FC<CardProps> = ({item, onDelete, loading}) => {
  const navigate = useNavigate();
  return (
    <Box my={8}>
      <Card elevation={1}>
        <Card.Cover source={{uri: item.image}} />
        <Card.Content>
          <Box m={8}>
            <Box>
              <Text variant="titleLarge">{item.title}</Text>
              <Text variant="labelMedium" style={{color: "lightGray"}}>
                {item.text}
              </Text>
            </Box>
          </Box>
        </Card.Content>

        <Card.Actions>
          <Button
            mode="elevated"
            textColor="#fff"
            onPress={() => navigate(`/birds/edit/${item.id}`)}
            buttonColor={MD2Colors.orange500}>
            Edit
          </Button>
          <Button
            mode="elevated"
            textColor="#fff"
            disabled={loading}
            loading={loading}
            onPress={() => onDelete(item.id)}
            buttonColor={MD2Colors.red500}>
            Delete
          </Button>
        </Card.Actions>
      </Card>
    </Box>
  );
};
