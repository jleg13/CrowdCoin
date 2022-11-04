import React, { useEffect, useState } from "react";
import { Table, Button, Icon, Message } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import Campaign from "../ethereum/campaign";

import { useRouter } from "next/router";

const RequestRow = (props) => {
  const { Row, Cell } = Table;
  const { id, request, isManager, isApprover, approversCount, address } = props;
  const value = web3.utils.fromWei(request.value, "ether");
  const router = useRouter();

  const [loadApprove, setLoadApprove] = useState(false);
  const [loadFinalise, setLoadFinalise] = useState(false);
  const [hasApproved, setHasApproved] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [positive, setPositive] = useState(request.complete);

  useEffect(() => {
    (async () => {
      const campaign = Campaign(address);
      const approved = await campaign.methods.hasApproved(id).call();
      setHasApproved(approved);
    })();
  }, []);

  const onApprove = async () => {
    try {
      setLoadApprove(true);
      setErrorMessage("");
      const accounts = await web3.eth.getAccounts();
      const campaign = Campaign(address);
      await campaign.methods.approveRequest(id).send({
        from: accounts[0],
      });
    } catch (err) {
      setErrorMessage(err.message);
    }
    setLoadApprove(false);
    router.push(`/campaigns/${address}/requests`);
  };

  const onFinalise = async () => {
    try {
      setLoadFinalise(true);
      setErrorMessage("");
      const accounts = await web3.eth.getAccounts();
      const campaign = Campaign(address);
      await campaign.methods.finaliseRequest(id).send({
        from: accounts[0],
      });
    } catch (err) {
      setErrorMessage(err.message);
    }
    setLoadFinalise(false);
    router.push(`/campaigns/${address}/requests`);
  };

  const renderActionState = () => {
    const actionsJsx = [];
    if (request.complete) {
      return (
        <Cell colSpan={2} textAlign="center">
          <Icon name="checkmark" />
          Finalised
        </Cell>
      );
    } else {
      if (isApprover && hasApproved) {
        actionsJsx.push(
          <Cell key="approve" textAlign="center">
            <Icon name="checkmark" />
            Approved
          </Cell>
        );
      } else if (isApprover && !hasApproved) {
        actionsJsx.push(
          renderActionButton(
            "green",
            "check",
            onApprove,
            loadApprove,
            "approve"
          )
        );
      }

      if (isManager) {
        actionsJsx.push(
          renderActionButton(
            "teal",
            "share",
            onFinalise,
            loadFinalise,
            "finalise"
          )
        );
      }

      return actionsJsx;
    }
  };

  const renderActionButton = (color, content, action, loading, key) => {
    return (
      <Cell textAlign="center" key={key}>
        <Button color={color} icon onClick={action} loading={loading}>
          <Icon name={content} />
        </Button>
      </Cell>
    );
  };

  return (
    <Row positive={positive}>
      <Cell>{id}</Cell>
      <Cell title={request.name}>{request.name}</Cell>
      <Cell title={request.description}>{request.description}</Cell>
      <Cell title={value}>{value}</Cell>
      <Cell title={request.recipient}>{request.recipient}</Cell>
      <Cell>{`${request.approvalCount}/${approversCount}`}</Cell>
      {renderActionState()}
    </Row>
  );
};

export default RequestRow;
