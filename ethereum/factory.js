import web3 from "./web3";
import campaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  campaignFactory.abi,
  "0xC1325B5C86E4Bc658DAa59AcCA9ccbD4471d6Af3"
);

export default instance;
