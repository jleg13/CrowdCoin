import React, { useEffect, useState } from "react";
import getCampaignSummary from "../../../../utils/getCampaignSummary";
import { Button, Grid, Table } from "semantic-ui-react";
import CampaignLayout from "../../../../components/CampaignLayout";
import Link from "next/link";
import Campaign from "../../../../ethereum/campaign";
import web3 from "../../../../ethereum/web3";
import RequestRow from "../../../../components/RequestRow";

const RequestsIndex = ({ summary, requests }) => {
  const [isManager, setIsManager] = useState(false);
  const [isApprover, setIsApprover] = useState(false);

  useEffect(() => {
    (async () => {
      const accounts = await web3.eth.getAccounts();
      setIsManager(accounts[0] === summary.manager);

      const campaign = Campaign(summary.address);
      const approver = await campaign.methods.approvers(accounts[0]).call();
      setIsApprover(approver);
    })();
  }, []);

  const renderAddRequestButton = () => {
    if (isManager) {
      return (
        <Link href={`/campaigns/${summary.address}/requests/new`}>
          <a>
            <Button floated="right" primary>
              Add Request
            </Button>
          </a>
        </Link>
      );
    }
  };

  const renderActionOptions = () => {
    if (isManager || isApprover) {
      const actionCount = isManager + isApprover;
      return (
        <HeaderCell colSpan={actionCount} textAlign="center">
          Actions
        </HeaderCell>
      );
    }
  };

  const renderActionHeadings = () => {
    if (isManager && isApprover) {
      return (
        <Row>
          <HeaderCell textAlign="center">Approve</HeaderCell>
          <HeaderCell textAlign="center">Finalise</HeaderCell>
        </Row>
      );
    } else if (isApprover) {
      return (
        <Row>
          <HeaderCell textAlign="center">Approve</HeaderCell>
        </Row>
      );
    } else if (isManager) {
      return (
        <Row>
          <HeaderCell textAlign="center">Finalise</HeaderCell>
        </Row>
      );
    }
  };

  const renderRows = () => {
    return requests.map((request, index) => {
      return (
        <RequestRow
          key={index}
          id={index}
          request={request}
          isManager={isManager}
          isApprover={isApprover}
          approversCount={summary.approversCount}
          address={summary.address}
        />
      );
    });
  };

  const { Row, Header, HeaderCell, Body } = Table;

  return (
    <CampaignLayout
      name={summary.name}
      description={summary.description}
      statistics={{
        "Active Requests": summary.requestsCount,
        "Total Spent": `${summary.totalBalance - summary.currentBalance} ether`,
        "Finalised Requests": 0,
      }}
    >
      <h1 className="Heading">Campaign Requests:</h1>
      <Grid columns="equal">
        <Grid.Row>
          <Grid.Column width={14}>
            <Table celled structured fixed singleLine>
              <Header>
                <Row>
                  <HeaderCell width={1} rowSpan="2">ID</HeaderCell>
                  <HeaderCell rowSpan="2">Name</HeaderCell>
                  <HeaderCell rowSpan="2">Description</HeaderCell>
                  <HeaderCell rowSpan="2">Amount (ether)</HeaderCell>
                  <HeaderCell rowSpan="2">Recipient</HeaderCell>
                  <HeaderCell rowSpan="2">Approval Count</HeaderCell>
                  {renderActionOptions()}
                </Row>
                {renderActionHeadings()}
              </Header>
              <Body>{renderRows()}</Body>
            </Table>
          </Grid.Column>
          <Grid.Column>{renderAddRequestButton()}</Grid.Column>
        </Grid.Row>
      </Grid>
    </CampaignLayout>
  );
};

RequestsIndex.getInitialProps = async ({ query }) => {
  const address = query.address;
  const campaign = Campaign(address);
  const requestCount = await campaign.methods.getRequestsCount().call();
  const requests = await Promise.all(
    Array(parseInt(requestCount))
      .fill()
      .map((element, index) => {
        return campaign.methods.requests(index).call();
      })
  );
  const summary = await getCampaignSummary(address);
  return { summary, requests };
};

export default RequestsIndex;
