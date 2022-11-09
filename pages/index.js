import React from "react";
import factory from "../ethereum/factory";
import getCampaignSummary from "../utils/getCampaignSummary";
import CampaignLayout from "../components/CampaignLayout";
import { Card, Button, Grid } from "semantic-ui-react";
import Link from "next/link";
import web3 from "../ethereum/web3";

const CampaignIndex = ({ campaigns }) => {
  const renderCampaigns = () => {
    return campaigns.map((campaign) => {
      const percentFunded = (
        (web3.utils.fromWei(campaign.totalBalance, "ether") / campaign.goal) *
        100
      ).toFixed(3);
      return (
        <Card
          key={campaign.address}
          href={`/campaigns/${campaign.address}`}
          header={campaign.name}
          meta={`${percentFunded}% funded`}
          description={campaign.description}
          fluid
        />
      );
    });
  };

  const totalContributions = campaigns.reduce((total, campaign) => {
    return total + parseInt(campaign.totalBalance);
  }, 0);

  const numberContributions = campaigns.reduce((total, campaign) => {
    return total + parseInt(campaign.contibutionCount);
  }, 0);

  return (
    <CampaignLayout
      name="Welcome to secure and transparent project funding."
      description=""
      statistics={{
        "Projects funded": campaigns.length,
        "Total Contributions": `${web3.utils.fromWei(
          totalContributions.toString(),
          "ether"
        )} ether`,
        "Number Contributions": numberContributions,
      }}
    >
      <h1 className="Heading">Current Campaigns:</h1>
      <Grid columns="equal">
        <Grid.Row>
          <Grid.Column width={10}>
            <Card.Group>{renderCampaigns()}</Card.Group>
          </Grid.Column>
          <Grid.Column>
            <Link href="/campaigns/new">
              <a>
                <Button
                  floated="right"
                  content="Create Campaign"
                  icon="add circle"
                  primary
                />
              </a>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </CampaignLayout>
  );
};

CampaignIndex.getInitialProps = async () => {
  const campaignAddresses = await factory.methods.getDeployedCampaigns().call();
  const campaigns = await Promise.all(
    campaignAddresses.map(async (address) => {
      return await getCampaignSummary(address);
    })
  );
  return { campaigns };
};

export default CampaignIndex;
