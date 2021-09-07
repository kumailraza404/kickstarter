const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  "alley first mother airport collect allow bleak glance option middle goose option",
  // remember to change this to your own phrase!
  "https://rinkeby.infura.io/v3/15c1d32581894b88a92d8d9e519e476c"
  // remember to change this to your own endpoint!
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);
  web3.eth.getBalance(accounts[0]).then((res) => console.log(res));
  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: "10000000", gasPrice: "1000000000", from: accounts[0] });

  console.log("Contract deployed to", result.options.address);
};
deploy();
