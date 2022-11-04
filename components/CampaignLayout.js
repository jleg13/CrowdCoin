import React from "react";
import { Header } from "semantic-ui-react";
import Layout from "./Layout";
import StatisticSummary from "./StatisticSummary";

const CampaignLayout = (props) => {
  return (
    <Layout>
      <Header as="h2" textAlign="center">
        <Header.Content>
          {props.name}
          <Header.Subheader>{props.description}</Header.Subheader>
        </Header.Content>
      </Header>
      <StatisticSummary statistics={props.statistics} />
      {props.children}
    </Layout>
  );
};
export default CampaignLayout;
