# Replit Lightning Tips

![Replit](/images/replit.png)

#### Deploy a lightning tip service so people can tip you for your work! 

No need to change any code, just enter 2 stuff and your set.

## What you need?

- LND Node
- REST Host URL for your LND Node
- LND macaroon HEX encoded

## Setup

Go to Replit's `secrets` section and add two Environment Variables (the names **must** match the names in the example below):

- LND_URL=`https://yoururl.com:8081` (REST Host URL for your LND Node)
- LND_MACAROON=`0201036c6e6402...` (HEX macaroon)

Optional:

- MIN=`0` (minimum amount accepting in sats)
- MAX=`100000` (maximum amount accepting in sats)
- NAME=`Tip Suhail Saqan` (title displayed in the top part)

(these are just examples, change them)

Learn more about setting up an LND node [here](https://github.com/lightningnetwork/lnd).

## Video

![Replit](/images/replit.gif)

## Live Demo

[Tip me](https://tip.suhailsaqan.com/)

## Author

[Suhail Saqan](https://suhailsaqan.com/)
