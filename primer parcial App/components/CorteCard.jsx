import React from "react";
import { Card, Button, Text } from "react-native-paper";

export default function CorteCard({ corte }) {
  return (
    <Card style={{ margin: 10 }}>
      <Card.Cover source={{ uri: corte.imagen }} />
      <Card.Content>
        <Text variant="titleMedium">{corte.nombre}</Text>
      </Card.Content>
      <Card.Actions>
        <Button mode="contained">Agendar</Button>
      </Card.Actions>
    </Card>
  );
}
