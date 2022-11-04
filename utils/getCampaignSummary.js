import Campaign from "../ethereum/campaign";

const getCampaignSummary = async (address) => {
  const campaign = Campaign(address);
  const summary = await campaign.methods.getSummary().call();
  return {
    address: address,
    name: summary[0],
    description: summary[1],
    goal: summary[2],
    contibutionCount: summary[3],
    minimumContribution: summary[4],
    totalBalance: summary[5],
    currentBalance: summary[6],
    requestsCount: summary[7],
    approversCount: summary[8],
    manager: summary[9],
  };
};

export default getCampaignSummary;
