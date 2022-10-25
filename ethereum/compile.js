const path = require("path");
const fs = require('fs-extra');
const solc = require("solc");

const buildPath = path.resolve(__dirname, "build");
const campaignPath = path.resolve(__dirname, "contracts", "Campaign.sol");
const source = fs.readFileSync(campaignPath, "utf8");

// First remove previous compiled build
fs.removeSync(buildPath);

// Then compile the solidity contract
const input = {
    language: 'Solidity',
    sources: {
      'Campaign.sol': {
        content: source,
      },
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['*'],
        },
      },
    },
  };

  const output = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
    'Campaign.sol'
];
// Rebuild the build directory with copiled contracts in json files
for (let contract in output) {
    fs.outputJsonSync(`${buildPath}/${contract}.json`, output[contract]);
}