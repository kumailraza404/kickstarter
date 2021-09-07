import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x44b0F9592925700CDE346f197F49769AfB7B59C4"
);

export default instance;
