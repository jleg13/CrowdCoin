import React from "react";
import { Grid, Card, Button } from "semantic-ui-react";
import Link from "next/link";
import ContributeForm from "../../../components/Contribute";
import CampaignLayout from "../../../components/CampaignLayout";
import web3 from "../../../ethereum/web3";
import getCampaignSummary from "../../../utils/getCampaignSummary";

const CampaignDisplay = (summary) => {
  const percentFunded = (
    (web3.utils.fromWei(summary.totalBalance, "ether") / summary.goal) *
    100
  ).toFixed(3);

  const renderCards = () => {
    const items = [
      {
        header: summary.manager,
        meta: "Address of Manager",
        description:
          "The manager created this campaign and can create requests to withdraw money",
        style: { overflowWrap: "break-word" },
      },
      {
        header: summary.minimumContribution,
        meta: "Minimum Contribution (wei)",
        description:
          "You must contribute at least this much wei to become an approver",
      },
      {
        header: summary.requestsCount,
        meta: "Number of Requests",
        description:
          "A request tries to withdraw money from the contract. Requests must be approved by approvers",
      },
      {
        header: summary.approversCount,
        meta: "Number of Approvers",
        description:
          "Number of people who have already donated to this campaign",
      },
      {
        header: web3.utils.fromWei(summary.currentBalance, "ether"),
        meta: "Current Balance (ether)",
        description:
          "The balance is how much money this campaign has left to spend",
      },
    ];

    return <Card.Group items={items} />;
  };

  return (
    <CampaignLayout
      name={summary.name}
      description={summary.description}
      statistics={{
        "Total Raised": `${web3.utils.fromWei(
          summary.totalBalance.toString(),
          "ether"
        )} ether`,
        "Number of Contributions": summary.contibutionCount,
        "Percentage Funded": `${percentFunded}%`,
      }}
    >
      <h3 className="Heading">Campaign Details:</h3>
      <Grid columns="equal">
        <Grid.Row>
          <Grid.Column width={12}>{renderCards()}</Grid.Column>
          <Grid.Column>
            <ContributeForm address={summary.address} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Link href={`/campaigns/${summary.address}/requests`}>
              <a>
                <Button primary content="View Requests" />
              </a>
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </CampaignLayout>
  );
};

CampaignDisplay.getInitialProps = async ({ query }) => {
  const address = query.address;
  return await getCampaignSummary(address);
};

export default CampaignDisplay;
