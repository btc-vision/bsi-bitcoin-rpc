import { BlockchainConfig, IConfig, IConfigTemplate } from '@btc-vision/bsi-common';

export interface IBtcTestConfig extends IConfig<IConfigTemplate> {
    BLOCKCHAIN: BlockchainConfig;
}
