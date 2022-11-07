import web3 from "./web3";
import campaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  campaignFactory.abi,
  "0xc5E139d6Bdad109E03fD0763fc792f648c0B8B54"
);

export default instance;
