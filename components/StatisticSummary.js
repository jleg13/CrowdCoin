import React from "react";
import { Grid, Card, Container } from "semantic-ui-react";

const StatisticSummary = ({ statistics }) => {
  const renderCard = (index) => {
    const [label, data] = Object.entries(statistics)[index];
    return (
      <Card color="orange" centered>
        <Card.Content>
          <Card.Header content={data} />
          <Card.Meta content={label} />
        </Card.Content>
      </Card>
    );
  };
  return (
    <Container className="statistics">
      <Grid columns={3} padded>
        <Grid.Row>
          <Grid.Column>{renderCard(0)}</Grid.Column>

          <Grid.Column>{renderCard(1)}</Grid.Column>

          <Grid.Column>{renderCard(2)}</Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default StatisticSummary;
