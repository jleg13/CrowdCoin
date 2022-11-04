import React, { useState } from "react";
import { Form, Button, Input, Message } from "semantic-ui-react";
import Campaign from "../../../../ethereum/campaign";
import web3 from "../../../../ethereum/web3";
import { useRouter } from "next/router";
import Layout from "../../../../components/Layout";
import Link from "next/link";

const RequestNew = ({ address }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [recipient, setRecipient] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  
  const router = useRouter();

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      setErrorMessage("");
      const accounts = await web3.eth.getAccounts();
      const campaign = Campaign(address);
      await campaign.methods
        .createRequest(
          name,
          description,
          web3.utils.toWei(value, "ether"),
          recipient
        )
        .send({
          from: accounts[0],
        });
      router.push(`/campaigns/${address}/requests`);
    } catch (err) {
      setErrorMessage(err.message);
    }
    setLoading(false);
  };

  return (
    <Layout>
      <h1 className="Heading">New Request:</h1>
      <Form onSubmit={onSubmit} error={!!errorMessage}>
        <Form.Field>
          <label>Request Name</label>
          <Input
            value={name}
            onClick={() => (setErrorMessage(""), setName(""))}
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Request Description</label>
          <Input
            value={description}
            onClick={() => (setErrorMessage(""), setDescription(""))}
            onChange={(event) => setDescription(event.target.value)}
          />
        </Form.Field>
        <Form.Group widths="equal">
          <Form.Field width={6}>
            <label>Request Value</label>
            <Input
              label="ether"
              labelPosition="right"
              value={value}
              onClick={() => (setErrorMessage(""), setValue(""))}
              onChange={(event) => setValue(event.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Recipient</label>
            <Input
              value={recipient}
              onClick={() => (setErrorMessage(""), setRecipient(""))}
              onChange={(event) => setRecipient(event.target.value)}
            />
          </Form.Field>
        </Form.Group>

        <Message error header="Oops!" content={errorMessage} />
        <Button primary loading={loading}>
          Create!
        </Button>
      </Form>
      <hr />
      <Link href={`/campaigns/${address}/requests`}>
        <a>Return to requests.</a>
      </Link>
    </Layout>
  );
};

RequestNew.getInitialProps = async ({ query }) => {
  return { address: query.address };
};

export default RequestNew;
