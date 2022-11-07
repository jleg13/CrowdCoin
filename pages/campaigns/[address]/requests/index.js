import React, { useEffect, useState } from "react";
import getCampaignSummary from "../../../../utils/getCampaignSummary";
import { Button, Grid, Table, Message } from "semantic-ui-react";
import CampaignLayout from "../../../../components/CampaignLayout";
import Link from "next/link";
import Campaign from "../../../../ethereum/campaign";
import web3 from "../../../../ethereum/web3";
import RequestRow from "../../../../components/RequestRow";

const RequestsIndex = ({ summary, requests, finalisedRequestCount }) => {
  const [isManager, setIsManager] = useState(false);
  const [isApprover, setIsApprover] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    (async () => {
      const accounts = await web3.eth.getAccounts();
      setIsManager(accounts[0] === summary.manager);
      const campaign = Campaign(summary.address);
      const approver = await campaign.methods.approvers(accounts[0]).call();
      setIsApprover(approver);
    })();
  }, []);

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
          setErrorMessage={setErrorMessage}
        />
      );
    });
  };

  const { Header, HeaderCell, Body, Row } = Table;
  const total = summary.totalBalance - summary.currentBalance;
  const totalEther = web3.utils.fromWei(total.toString(), "ether");

  return (
    <CampaignLayout
      name={summary.name}
      description={summary.description}
      statistics={{
        "Total Requests": summary.requestsCount,
        "Total Spent": `${totalEther} ether`,
        "Finalised Requests": finalisedRequestCount,
      }}
    >
      <h1 className="Heading">Campaign Requests:</h1>

      <Grid>
        <Grid.Row>
          <Grid.Column width={14}>
            <Table celled structured fixed singleLine>
              <Header>
                <Row>
                  <HeaderCell width={1} rowSpan="2">
                    Id
                  </HeaderCell>
                  <HeaderCell rowSpan="2">Name</HeaderCell>
                  <HeaderCell width={3} rowSpan="2">
                    Description
                  </HeaderCell>
                  <HeaderCell rowSpan="2">Amount(ETH)</HeaderCell>
                  <HeaderCell rowSpan="2">Recipient</HeaderCell>
                  <HeaderCell rowSpan="2">Approval Count</HeaderCell>
                  <HeaderCell colSpan="2" textAlign="center">
                    Actions
                  </HeaderCell>
                </Row>
                <Row>
                  <HeaderCell textAlign="center">Approve</HeaderCell>
                  <HeaderCell textAlign="center">Finalise</HeaderCell>
                </Row>
              </Header>
              <Body>{renderRows()}</Body>
            </Table>
          </Grid.Column>
          <Grid.Column>
            {!isManager ? null : (
              <Link
                floated="right"
                href={`/campaigns/${summary.address}/requests/new`}
              >
                <Button primary>Add Request</Button>
              </Link>
            )}
          </Grid.Column>
        </Grid.Row>
        {!errorMessage ? null : (
          <Grid.Row>
            <Message negative header="Oops!" content={errorMessage} />
          </Grid.Row>
        )}
      </Grid>
      <hr />
      <Link href={`/campaigns/${summary.address}/`}>
        <a>Return to campaign.</a>
      </Link>
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

  const finalisedRequestCount = requests.reduce((accumulator, request) => {
    return request.complete ? accumulator + 1 : accumulator;
  }, 0);

  const summary = await getCampaignSummary(address);
  return { summary, requests, finalisedRequestCount };
};

export default RequestsIndex;
