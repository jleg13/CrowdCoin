import React, { useState } from "react";
import Campaign from "../ethereum/campaign";
import web3 from "../ethereum/web3";
import { Form, Button, Input, Message } from "semantic-ui-react";
import Router from "next/router";

const ContributeForm = ({ address }) => {
  const [contribution, setContribution] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      setErrorMessage("");
      const accounts = await web3.eth.getAccounts();
      const campaign = Campaign(address);
      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(contribution, "ether"),
      });
    } catch (err) {
      setErrorMessage(err.message);
    }
    setLoading(false);
    Router.replace(`/campaigns/${address}`);
  };
  return (
    <Form onSubmit={onSubmit} error={!!errorMessage}>
      <Form.Field>
        <label>Amount to Contribute</label>
        <Input
          label="ether"
          labelPosition="right"
          value={contribution}
          onClick={() => (setContribution(""), setErrorMessage(""))}
          onChange={(event) => setContribution(event.target.value)}
        />
      </Form.Field>
      <Message error header="Oops!" content={errorMessage} />
      <Button primary loading={loading}>
        Contribute!
      </Button>
    </Form>
  );
};

export default ContributeForm;
