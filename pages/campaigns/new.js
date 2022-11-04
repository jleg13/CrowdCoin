import React, { useState } from "react";
import { Form, Button, Input, Message } from "semantic-ui-react";
import Layout from "../../components/Layout";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import { useRouter } from "next/router";

export default function CampaignNew() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [goal, setGoal] = useState("");
  const [minimumContribution, setMinimumContribution] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const onSubmit = async (event) => {
    event.preventDefault();
    // set listener for campaign creation event on solidity contract
    factory.once("CampaignCreated", (err, campaignEvent) => {
      if (!err) {
        router.push(`/campaigns/${campaignEvent.returnValues.campaignAddress}`);
      }
    });

    try {
      setLoading(true);
      setErrorMessage("");
      const accounts = await web3.eth.getAccounts();
      
      await factory.methods
        .createCampaign(name, description, goal, minimumContribution)
        .send({
          from: accounts[0],
        });
    } catch (err) {
      setErrorMessage(err.message);
    }
    setLoading(false);
  };

  return (
    <Layout>
      <h1 className="Heading">New Campaign:</h1>
      <Form onSubmit={onSubmit} error={!!errorMessage}>
        <Form.Field>
          <label>Campaign Name</label>
          <Input
            value={name}
            onClick={() => (setErrorMessage(""), setName(""))}
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Campaign Description</label>
          <Input
            value={description}
            onClick={() => (setErrorMessage(""), setDescription(""))}
            onChange={(event) => setDescription(event.target.value)}
          />
        </Form.Field>
        <Form.Group widths="equal">
          <Form.Field>
            <label>Campaign Goal</label>
            <Input
              label="ether"
              labelPosition="right"
              value={goal}
              onClick={() => (setErrorMessage(""), setGoal(""))}
              onChange={(event) => setGoal(event.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Minimum Contribution</label>
            <Input
              label="wei"
              labelPosition="right"
              value={minimumContribution}
              onClick={() => (setErrorMessage(""), setMinimumContribution(""))}
              onChange={(event) => setMinimumContribution(event.target.value)}
            />
          </Form.Field>
        </Form.Group>

        <Message error header="Oops!" content={errorMessage} />
        <Button primary loading={loading}>
          Create!
        </Button>
      </Form>
    </Layout>
  );
}
