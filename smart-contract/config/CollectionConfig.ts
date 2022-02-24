import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'Testnft',
  tokenName: 'tst721',
  tokenSymbol: 'TST',
  hiddenMetadataUri: 'ipfs://QmWif11k19WRt3We919YqT5o7iqSEJx4NL8hBzgWodSLD8/hidden.json',
  maxSupply: 10,
  whitelistSale: {
    price: 0.12,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.07,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.15,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0xB4D5c3c67F1cc0008F93bAcCd8617808a9AFD600",
  openSeaSlug: 'my-nft-token',
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
