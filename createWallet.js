const Web3 = require('web3').default;
const web3 = new Web3();

function createWallet() {
    const wallet = web3.eth.accounts.create();
    console.log('Address:', wallet.address);
    console.log('Private Key:', wallet.privateKey);
}

createWallet();
