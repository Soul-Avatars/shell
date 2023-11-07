<div align="center">
<img src="./docs/images/icon.svg" alt="icon"/>

<h1 align="center">Soul Avatars</h1>

Soul Avatars is an open source web UI that allows web3 users to chat with AI-powered avatars based on their NFT collection. It connects to ChatGPT API and web3 wallets to create a seamless conversational experience with your digital collectibles.

[Web App](https://chatgpt.nextweb.fun/)

![cover](./docs/images/cover.png)

</div>

## Features

- Chat with your NFTs powered by ChatGPT API
- Supports multiple blockchains - currently Ethereum, Polygon
- Easy setup flow - get API key, connect wallet, start chatting
- Auto-detects your NFT collection based on wallet address
- Customize avatar name, personality, backstory
- Avatars have persistent memory and personality

## Project Origin

This project was originally forked from [Yidadaa/ChatGPT-Next-Web](https://github.com/Yidadaa/ChatGPT-Next-Web). The core chat functionality using the OpenAI API comes from that project.
For Soul Avatars, we built on top of it to add web3 wallet connection, NFT detection, and avatar customization features. Huge thanks to the original repo authors for building an amazing foundation to start from!

## Getting Started

### Prerequisites

- OpenAI API key
  - Sign up on [OpenAI](https://openai.com/) to get a free API key
  - API key is required for the app to connect to ChatGPT API
- Web3 wallet
  - Install browser wallet like [MetaMask](https://metamask.io/)
  - Required for app to detect your NFTs and authenticate your wallet

### Setup Flow

1. Enter OpenAI key on setup page
2. Connect your Ethereum/Polygon wallet
3. App auto-detects your NFTs, select avatar
4. Customize avatar name, personality, backstory
5. Start chatting!

## Roadmap

Some planned features:

- Support more blockchains like Solana, BNB Chain
- Make avatars visually react during chat
- Persist avatar memory/personality on IPFS/Filecoin
- Allow selling avatar as an NFT

### Development & Deployment

This project was forked from [Yidadaa/ChatGPT-Next-Web](https://github.com/Yidadaa/ChatGPT-Next-Web). Check their docs for development & deployment.

## Contributing

Pull requests are welcome! Feel free to open issues for any bugs or ideas.

## LICENSE

[MIT](https://opensource.org/license/mit/)
