import React, { useState, useEffect } from "react";
import { Table, Button, Icon } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import Campaign from "../ethereum/campaign";

import { useRouter } from "next/router";

const RequestRow = (props) => {
  const { Row, Cell } = Table;
  const {
    id,
    request,
    isManager,
    isApprover,
    approversCount,
    address,
    setErrorMessage,
  } = props;
  const value = web3.utils.fromWei(request.value, "ether");
  const router = useRouter();

  const [loadApprove, setLoadApprove] = useState(false);
  const [loadFinalise, setLoadFinalise] = useState(false);
  const [approved, setApproved] = useState(false);

  useEffect(() => {
    (async () => {
      const accounts = await web3.eth.getAccounts();
      const campaign = Campaign(address);
      const isApproved = await campaign.methods
        .hasApproved(accounts[0], id)
        .call();

      setApproved(isApproved);
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
    router.reload();
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
    router.reload();
  };

  const renderActionButtons = () => {
    let actionsJSX = [];
    if (isApprover && approved) {
      actionsJSX.push(
        <Cell positive textAlign="center" key="approve">
          <Icon name="checkmark" />
          Approved
        </Cell>
      );
    } else if (isApprover && !approved) {
      actionsJSX.push(
        <Cell textAlign="center" key="approve">
          <Button color="green" icon onClick={onApprove} loading={loadApprove}>
            <Icon name="check" />
          </Button>
        </Cell>
      );
    } else {
      actionsJSX.push(
        <Cell textAlign="center" disabled key="approve">
          <Button color="grey" icon>
            <Icon name="check" />
          </Button>
        </Cell>
      );
    }

    if (isManager) {
      actionsJSX.push(
        <Cell textAlign="center" key="finalise">
          <Button color="teal" icon onClick={onFinalise} loading={loadFinalise}>
            <Icon name="share" />
          </Button>
        </Cell>
      );
    } else {
      actionsJSX.push(
        <Cell textAlign="center" disabled key="finalise">
          <Button color="grey" icon>
            <Icon name="share" />
          </Button>
        </Cell>
      );
    }
    return actionsJSX;
  };

  return (
    <Row positive={request.complete}>
      <Cell>{id}</Cell>
      <Cell title={request.name}>{request.name}</Cell>
      <Cell title={request.description}>{request.description}</Cell>
      <Cell title={value}>{value}</Cell>
      <Cell title={request.recipient}>{request.recipient}</Cell>
      <Cell>{`${request.approvalCount}/${approversCount}`}</Cell>
      {request.complete ? (
        <Cell colSpan={2} textAlign="center">
          <Icon name="checkmark" />
          Finalised
        </Cell>
      ) : (
        renderActionButtons()
      )}
    </Row>
  );
};

export default RequestRow;
