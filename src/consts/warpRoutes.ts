import { WarpCoreConfig } from '@hyperlane-xyz/sdk';

// A list of Warp Route token configs
// These configs will be merged with the warp routes in the configured registry
// The input here is typically the output of the Hyperlane CLI warp deploy command
export const warpRouteConfigs: WarpCoreConfig = {
  tokens: [
    {
      chainName: 'celestiadevnet',
      standard: 'CosmosNativeHypCollateral' as any,
      addressOrDenom: '0x726f757465725f61707000000000000000000000000000010000000000000000',
      collateralAddressOrDenom: 'utia',
      decimals: 6,
      name: 'TIA',
      symbol: 'TIA',
      connections: [
        {
          token: 'ethereum|edentestnet|0x5E7e917Df774541F2343B1E17F8D41847E50188C',
        },
      ],
    },
    {
      chainName: 'edentestnet',
      standard: 'EvmHypSynthetic' as any,
      addressOrDenom: '0x5E7e917Df774541F2343B1E17F8D41847E50188C',
      decimals: 6,
      name: 'TIA',
      symbol: 'TIA',
      connections: [
        {
          token: 'cosmosnative|celestiadevnet|0x726f757465725f61707000000000000000000000000000010000000000000000',
        },
      ],
    },
  ],
  options: {},
};
