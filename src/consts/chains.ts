import {
  eclipsemainnet,
  eclipsemainnetAddresses,
  solanamainnet,
  solanamainnetAddresses,
  solaxy,
  solaxyAddresses,
  sonicsvm,
  sonicsvmAddresses,
  soon,
  soonAddresses,
} from '@hyperlane-xyz/registry';
import { ChainMap, ChainMetadata } from '@hyperlane-xyz/sdk';
import { ProtocolType } from '@hyperlane-xyz/utils';

// A map of chain names to ChainMetadata
// Chains can be defined here, in chains.json, or in chains.yaml
// Chains already in the SDK need not be included here unless you want to override some fields
// Schema here: https://github.com/hyperlane-xyz/hyperlane-monorepo/blob/main/typescript/sdk/src/metadata/chainMetadataTypes.ts
export const chains: ChainMap<ChainMetadata & { mailbox?: Address }> = {
  celestiadevnet: {
    protocol: ProtocolType.Cosmos,
    chainId: 'arabica-11',
    domainId: 1095909698,
    name: 'celestiadevnet',
    displayName: 'Celestia Arabica Devnet',
    isTestnet: true,
    bech32Prefix: 'celestia',
    nativeToken: {
      name: 'Celestia',
      symbol: 'TIA',
      decimals: 6,
      denom: 'utia',
    },
    rpcUrls: [
      { http: 'https://rpc.celestia-arabica-11.com' },
    ],
    restUrls: [
      { http: 'https://api.celestia-arabica-11.com' },
    ],
    grpcUrls: [
      { http: 'https://grpc.celestia-arabica-11.com:443' },
    ],
    blocks: {
      confirmations: 1,
      reorgPeriod: 1,
      estimateBlockTime: 6,
    },
    slip44: 118,
  },
  edentestnet: {
    protocol: ProtocolType.Ethereum,
    chainId: 3735928814,
    domainId: 2147483647,
    name: 'edentestnet',
    displayName: 'Eden Testnet',
    isTestnet: true,
    nativeToken: {
      name: 'Eden',
      symbol: 'EDEN',
      decimals: 18,
    },
    rpcUrls: [
      { http: process.env.NODE_ENV === 'development' ? 'http://localhost:3000/rpc' : 'https://ev-reth-eden-testnet.binarybuilders.services:8545' },
    ],
  },
  solanamainnet: {
    ...solanamainnet,
    // SVM chains require mailbox addresses for the token adapters
    mailbox: solanamainnetAddresses.mailbox,
  },
  eclipsemainnet: {
    ...eclipsemainnet,
    mailbox: eclipsemainnetAddresses.mailbox,
  },
  soon: {
    ...soon,
    mailbox: soonAddresses.mailbox,
  },
  sonicsvm: {
    ...sonicsvm,
    mailbox: sonicsvmAddresses.mailbox,
  },
  solaxy: {
    ...solaxy,
    mailbox: solaxyAddresses.mailbox,
  },
  // mycustomchain: {
  //   protocol: ProtocolType.Ethereum,
  //   chainId: 123123,
  //   domainId: 123123,
  //   name: 'mycustomchain',
  //   displayName: 'My Chain',
  //   nativeToken: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  //   rpcUrls: [{ http: 'https://mycustomchain-rpc.com' }],
  //   blockExplorers: [
  //     {
  //       name: 'MyCustomScan',
  //       url: 'https://mycustomchain-scan.com',
  //       apiUrl: 'https://api.mycustomchain-scan.com/api',
  //       family: ExplorerFamily.Etherscan,
  //     },
  //   ],
  //   blocks: {
  //     confirmations: 1,
  //     reorgPeriod: 1,
  //     estimateBlockTime: 10,
  //   },
  //   logoURI: '/logo.svg',
  // },
};

// rent account payment for (mostly for) SVM chains added on top of IGP,
// not exact but should be pretty close to actual payment
export const chainsRentEstimate: ChainMap<bigint> = {
  eclipsemainnet: BigInt(Math.round(0.00004019 * 10 ** 9)),
  solanamainnet: BigInt(Math.round(0.00411336 * 10 ** 9)),
  sonicsvm: BigInt(Math.round(0.00411336 * 10 ** 9)),
  soon: BigInt(Math.round(0.00000355 * 10 ** 9)),
};
