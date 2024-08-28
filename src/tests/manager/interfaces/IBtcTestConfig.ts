import { IConfig, IConfigTemplate } from '@btc-vision/bsi-common';
import { RPCConfig } from '../../../rpc/interfaces/RPCConfig.js';

export interface IBtcTestConfig extends IConfig<IConfigTemplate> {
    BLOCKCHAIN: RPCConfig;
}
