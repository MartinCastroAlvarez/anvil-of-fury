# anvil-of-fury
Local Ethereum development using Anvil

![wallpaper.jpg](wallpaper.jpg)

## Anvil

Anvil is a local Ethereum node simulator included in the Foundry suite of developer tools, designed to streamline Ethereum smart contract development and testing. It provides a fast and flexible local blockchain environment, enabling developers to deploy, interact with, and test smart contracts without connecting to public Ethereum networks. With features like automatic account generation and pre-loaded Ether, Anvil simplifies the development process, making it easier for developers to test applications and smart contracts in a controlled setting that mimics live blockchain conditions. Anvil is particularly valued for its integration with other Foundry tools like Forge for testing, making it a comprehensive choice for Ethereum developers looking for robust, efficient development workflows.

## Foundry

Foundry is a powerful suite of Ethereum development tools designed to enhance the speed and efficiency of smart contract development and testing. Comprising key components like Forge for smart contract testing, Anvil as a local Ethereum node for development, and Cast for interacting with Ethereum networks, Foundry streamlines the entire development workflow. It is known for its high performance and flexibility, allowing developers to compile, test, and deploy Ethereum contracts more quickly and reliably. Foundry is highly favored in the Ethereum community for its robust testing capabilities and integration with existing Ethereum development practices, making it an essential toolset for any serious Ethereum developer.

## Installation

* Install `Foundry`

```bash
curl -L https://foundry.paradigm.xyz | bash
bash
foundryup
```

* Verify the installation

```bash
forge --version
anvil --version
```

* Start a new node project

```bash
npm init -y
npm install web3
```

## Testing

* Start Anvil

```bash
anvil
```

* Create a new wallet

```bash
node createWallet.js
```
```bash
Address: 0x838FC94A70401b6c87F376e9D98bf6f6E77DF795
Private Key: 0x7d0355189e9a0bc83e5afd877b7a85be0f88de528250b3ad84183218f730a753
```

* Add funds to your walet

```bash
node addFunds.js 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80 0x838FC94A70401b6c87F376e9D98bf6f6E77DF795 1  
```
```bash
Transaction receipt: {
  type: 2n,
  status: 1n,
  cumulativeGasUsed: 21000n,
  logs: [],
  logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  transactionHash: '0x0247de59ca6bb9aebafff9b519f8ce47b91773c915298450baac8d20ee686e04',
  transactionIndex: 0n,
  blockHash: '0xc404fbe207d2469c5ce20a185b1f6d9550eb33e9e547f5be295fd7760f27038b',
  blockNumber: 3n,
  gasUsed: 21000n,
  effectiveGasPrice: 2765931281n,
  from: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
  to: '0x838fc94a70401b6c87f376e9d98bf6f6e77df795'
}
```

* Get your ETH balance

```bash
node getBalance.js 0x838FC94A70401b6c87F376e9D98bf6f6E77DF795
```
```bash
Balance of 0x838FC94A70401b6c87F376e9D98bf6f6E77DF795: 3 ETH
```
