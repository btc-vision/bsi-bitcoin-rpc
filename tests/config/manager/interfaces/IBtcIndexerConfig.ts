import { BlockchainConfig, IConfig, IConfigTemplate } from '@btc-vision/bsi-common';

export interface IBtcIndexerConfig extends IConfig<IConfigTemplate> {
    BLOCKCHAIN: BlockchainConfig;
}
