const Web3 = require('web3').default;
const web3 = new Web3('http://localhost:8545');

async function sendEth(fromAddress, privateKey, to, amountInEth) {
    const amountInWei = web3.utils.toWei(amountInEth, 'ether');
    const latestBlock = await web3.eth.getBlock('latest');
    const gasFee = web3.utils.toWei('2', 'gwei');
    const maxPriorityFeePerGas = gasFee;
    const maxFeePerGas = web3.utils.toHex(parseInt(latestBlock.baseFeePerGas) + parseInt(gasFee));

    const transaction = {
        'from': fromAddress,
        'to': to,
        'value': amountInWei,
        'gas': 21000,
        'maxPriorityFeePerGas': maxPriorityFeePerGas,
        'maxFeePerGas': maxFeePerGas
    };

    const signedTx = await web3.eth.accounts.signTransaction(transaction, privateKey);
    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    console.log('Transaction receipt:', receipt);
}

const fromAddress = process.argv[2];
const privateKey = process.argv[3];
const toAddress = process.argv[4];
const amountInEth = process.argv[5];

sendEth(fromAddress, privateKey, toAddress, amountInEth);
