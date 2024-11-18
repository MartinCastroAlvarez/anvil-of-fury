const Web3 = require('web3').default;
const web3 = new Web3('http://localhost:8545');

async function getBalance(address) {
    const balanceWei = await web3.eth.getBalance(address);
    const balanceEth = web3.utils.fromWei(balanceWei, 'ether');
    console.log(`Balance of ${address}: ${balanceEth} ETH`);
}

const address = process.argv[2];
getBalance(address);
